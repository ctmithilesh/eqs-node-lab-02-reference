
const express = require('express')
const customer = require('./lib/data/customer')
const { blockAddNewCustomerRequest } = require('./middlewares')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Global Level Middleware 
app.use(blockAddNewCustomerRequest)

// Request Level Middleware
app.post('/orders/all', (req, res, next) => {

    const { country } = req.body

    if (country === 'North Korea') {
        res.status(403).json({ message: "Access Denied for customers of this region" })
    }


    res.sendStatus(200).json({ message: "Ok" })

})

app.get('/', (req, res) => {
    res.send({ message: "Welcome to Customer Service Server 1.0" })
})

app.post('/customer/add', (req, res) => {

    let myData = {
        first_name: 'John',
        address: 'UK'
    }
    customer.push(myData)
    console.log(customer)

    res.send('OK')
})

app.get('/customers/all', (req, res) => {


    // res.send(`
    //     ${customer.map(item => `
    //         <div>
    //             <h3>${item.first_name}</h3>
    //         </div>

    //     `)}
    // `)

    let customerList = '<div>'
    customer.forEach(item => {
        customerList += `
            <ul>
                <li>${item.first_name}</li>
                <li>${item.address}</li>
            </ul>
        `
    })
    customerList += '</div>'



})


app.listen(5000, () => {
    console.log('Server started')
})


