import { Application, Request, Response, json } from "express"
import { createProduct, getProduct, getSingleProduct, patchProduct } from "./logic"
import { verifyGetProduct } from "./middlewares"

const express = require('express')
const app: Application = express()
app.use(json())

app.get('/products', getProduct)
app.get('/products/:id', verifyGetProduct, getSingleProduct)
app.post('/products', createProduct)
app.patch('/products/:id', verifyGetProduct, patchProduct)

app.listen(3000, ()=>{
    console.log("Aplicação iniciada!")
})