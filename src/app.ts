import { Application, Request, Response, json } from "express"
import { createProduct, deleteProduct, getProduct, getSingleProduct, patchProduct } from "./logic"
import { verifyGetProduct, verifyName } from "./middlewares"

const express = require('express')
const app: Application = express()
app.use(json())

app.get('/products', getProduct)
app.get('/products/:id', verifyGetProduct, getSingleProduct)
app.post('/products', verifyName, createProduct)
app.patch('/products/:id', verifyGetProduct, patchProduct)
app.delete('/products/:id', verifyGetProduct, deleteProduct)
app.listen(3000, ()=>{
    console.log("Aplicação iniciada!")
})