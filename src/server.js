//server.js
import ex from "express";
import 'dotenv/config'
import ROUTER from "./routes/playerRoutes.js";
const api = ex();
const port = process.env.PORT || 44446;

api.use(ex.json())
api.use("/player",ROUTER)
api.get('/' , (req,res) => { res.json({Hola:"WELCOME STUDENT"})})
api.listen(port,()=>console.log("Su Servidor se encuentra en en puerto : " + port +" ------------ "+" http://localhost:"+port))