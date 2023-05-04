import { Application, Request, Response, json } from "express"
import { createProduct, getProduct } from "./logic"

const express = require('express')
const app: Application = express()
app.use(json())

app.get('/products', getProduct)
app.post('/products', createProduct)

app.listen(3000, ()=>{
    console.log("Aplicação iniciada!")
})