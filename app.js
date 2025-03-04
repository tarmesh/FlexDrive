const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./routes/user.routes')
const connectToDB = require('./config/db'); 
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes')


dotenv.config();

connectToDB();

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter)

app.listen(3000,()=>{
  console.log('Server running on port 3000');
})








// const express = require('express');
// const dotenv = require('dotenv');
// const connectToDB = require('./config/db'); 
// const userRouter = require('./routes/user.routes');

// // Load environment variables
// dotenv.config();

// // Initialize the Express app
// const app = express();

// // Database connection
// connectToDB();

// // Set up middleware
// app.set('view engine', 'ejs'); // Set EJS as the template engine
// app.use(express.json()); // Parse JSON request bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// // Define routes
// app.use('/user', userRouter);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(Server running on port ${PORT});
// });