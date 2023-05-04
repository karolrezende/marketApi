import { NextFunction, Request, Response } from "express";
import market from "./database";

const verifyGetProduct = (req:Request, res: Response, next: NextFunction): Response | void => {
    const product = market.find(prod=> prod.id === Number(req.params.id))
    if(product === undefined){
        return res.status(404).json("Produto não encontrado")
    }
    res.locals.product = product
    return next()
}

export {verifyGetProduct}