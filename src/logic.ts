import { Request, Response } from "express";
import { iCleaning, iFood, iProduct } from "./interfaces";
import market from "./database";
// const getId = (req: Request, res: Response): Response =>{
//     const id = req.params.id
//     const newId = market.find(product => product.id === Number(id))

//     if(newId === undefined){
//         return res.status(404).json({'Produto não encontrado!'})
//     }
// }
const getProduct = (req: Request, res: Response): Response =>{
    if(market.length < 0){
        return res.status(200).json("vazio")
    }
    return res.status(200).json(market)
}
const getSingleProduct = (req: Request, res: Response): Response =>{
    return res.status(201).json(res.locals.product)
}
const createProduct = (req: Request, res: Response): Response =>{
    req.body.forEach((element: any, index: number) => {
        if(element.section === "food"){
            const data: any = element
            const newProduct: iFood = {
                id: market.length+1,
                ...data,
                expirationDate: new Date().getTime()
            }
            market.push(newProduct)
        }
        if(element.section === "cleaning"){
            const data: any = element
            const newProduct: iCleaning = {
                id: market.length+1,
                ...data,
                expirationDate: new Date().getTime()
            }
            market.push(newProduct)
        }
    })
    const totalPrice= market.reduce((total, nowProd)=>{
        return total+nowProd.price
    },0 )
    return res.status(201).json(
        {
            total: totalPrice,
            market: [...market]
        }
    )
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
const deleteProduct = (req: Request, res: Response) : Response =>{
    const productId = res.locals.product.id
    const index = market.findIndex(prod => prod.id === Number(productId))
    market.splice(index, 1)
    return res.status(200).json('Produto deletado!')
}
export {getProduct, getSingleProduct, createProduct, patchProduct, deleteProduct}