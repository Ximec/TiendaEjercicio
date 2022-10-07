const app=require("./app")

//setear archivo de configuracion
const dotenv=require("dotenv");
dotenv.config({path:'back/config/config.env'})

//llamamos al servidor
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})