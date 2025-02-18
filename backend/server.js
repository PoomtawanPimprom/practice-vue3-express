import express from 'express'
import morgan from 'morgan'

const app = express()

//route
import HelloRoute from './router/hello/hello.route.js'

// router
app.use('/api/hello',HelloRoute)

//setup
app.use(morgan('dev'))


app.listen(3000, () =>{
    console.log("server start")
})


