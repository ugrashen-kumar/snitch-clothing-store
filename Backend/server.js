import app from './src/app.js'
import connectToDatabase from './src/config/database.js'

connectToDatabase()



app.listen(3000, ()=>{
    console.log("server is running on https://localhost:3000/")
})