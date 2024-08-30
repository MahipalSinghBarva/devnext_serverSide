
const app = require('./app.js');
const connectDB = require('./config/db.js');
const dotenv = require("dotenv")

dotenv.config()


connectDB();


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
