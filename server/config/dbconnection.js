const { default: mongoose } = require('mongoose')

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        if (conn.connection.readyState == 1) console.log('DB connection is successfully!')
        else console.log('DB connect')
    } catch (error) {
        console.log('DB connection is Failed')
        throw new Error(error)
    }
}
module.exports = dbConnect
