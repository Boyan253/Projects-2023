require('dotenv').config()
const express = require('express')
start()


async function start() {

    app.set('views', path.join(__dirname, 'client', 'pages')); // Specify the directory where your views are located
    app.set('view engine', 'jsx'); // Set the view engine to 'jsx'
    app.engine('jsx', require('express-react-views').createEngine()); // Use express-react-views as the view engine



    const app = express()
    app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`))

}



app.get('/', (req, res) => {

    res.send('hello world!')
})

