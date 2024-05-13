const blockAddNewCustomerRequest = (req, res, next) => {


    const url = req.url
    const method = req.url
    console.log(`
    Intercepted ${req.method} request to ${req.url}
    `
    )

    if (url === '/customer/add') {
        res.send('Too many requests received!!, Try later!!')
    }
    else {
        // continue the operation 
        next()
    }
}

module.exports = {
    blockAddNewCustomerRequest
} 