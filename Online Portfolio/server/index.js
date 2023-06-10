require('dotenv').config()
const express = require('express')
start()


async function start() {
    const app = express()

    // app.set('views', path.join("C:/Users/bobob/Desktop/MyPortfolio/", 'client/', 'pages')); // Specify the directory where your views are located
    app.set('view engine', 'jsx'); // Set the view engine to 'jsx'
    app.engine('jsx', require('express-react-views').createEngine()); // Use express-react-views as the view engine



    app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`))

}



{/* <issue_comment>username_1: @username_0 I'm not sure what you're trying to do. */}

