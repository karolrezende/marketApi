import { Request, Response } from "express";
import { iCleaning, iFood } from "./interfaces";
import market from "./database";

const createProduct = (req: Request, res: Response):Response =>{
    const {section} = req.body
    if(section == "food"){
        const newProduct: iFood = {
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
export {createProduct}