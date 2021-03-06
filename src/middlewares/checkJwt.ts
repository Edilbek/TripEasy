import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    // Get the jwt token from the head
    const token = <string>req.headers['token'];
    let jwtPayload;

    // Try to validate the token and get data
    try {
        jwtPayload =<any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        // If token us not valid, respond with 401 (unauthorized)
        res.sendStatus(401);
        return;
    }

    //  The token is valid for 3 days
    // We want to send a new token on every request
    const { userId, email } = jwtPayload;
    const newToken = jwt.sign({userId, email}, config.jwtSecret, {
       expiresIn: "3d"
    });
    res.setHeader("token", newToken);

    next();
}