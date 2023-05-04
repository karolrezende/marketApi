import { Request, Response } from "express";
import { iCleaning, iFood } from "./interfaces";
import market from "./database";
const getProduct = (req: Request, res: Response): Response =>{
    if(market.length < 0){
        return res.status(200).json("vazio")
    }
    return res.status(200).json(market)
}
const getSingleProduct = (req: Request, res: Response): Response =>{
    return res.status(201).json(res.locals.product)
}
const createProduct = (req: Request, res: Response):Response =>{
    const {section} = req.body
    if(section == "food"){
        const newProduct: iFood = {
            id: new Date().getTime(),
            name: req.body.name,
            price: req.body.price,
            weight: req.body.weight,
            calories: req.body.calories,
            section: req.body.section
        }
        market.push(newProduct)
        return res.status(201).json(newProduct)
    }else
    if(section == "cleaning"){
        const newProduct: iCleaning = {
            id: new Date().getTime(),
            name: req.body.name,
            price: req.body.price,
            weight: req.body.weight,
            section: req.body.section
        }
        market.push(newProduct)
        return res.status(201).json(newProduct)
    }else{
        return res.status(400).json({error: 'invalid section'})
    }
}
const patchProduct = (req: Request, res:Response): Response=>{
    const product = res.locals.product
    const findIndex = market.findIndex(prod => prod.id === Number(product.id))

    const patchProduct = {
        ...market[findIndex],
        ...req.body
    }
    market[findIndex] = patchProduct
    return res.status(200).json(patchProduct)  
}
export {getProduct, getSingleProduct, createProduct, patchProduct}