
const express = require('express')
const customer = require('./lib/data/customer')
const { blockAddNewCustomerRequest } = require('./middlewares')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(blockAddNewCustomerRequest)

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

    res.send(`
        <div>
        <ul>
            <li>${customer[0].first_name}</li>
             <li>${customer[0].address}</li>
              <li>${customer[0].contact}</li>

        </ul>
        </div>

    `)

})


app.listen(5000, () => {
    console.log('Server started')
})


