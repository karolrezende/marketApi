import { Application, Request, Response, json } from "express"

const express = require('express')
const app: Application = express()
app.use(json())

app.listen(3000, ()=>{
    console.log("Aplicação iniciada!")
})