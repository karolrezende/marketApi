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
const verifyName = (req: Request, res: Response, next: NextFunction) : Response | void =>{
    const name = market.find(prod=> prod.name === req.body.name)
    console.log(req.body)
    if(name !== undefined){
        return res.status(409).json("Esse produto já está cadastrado")
    }
    return next()
}

export {verifyGetProduct, verifyName}