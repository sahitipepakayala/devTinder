const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./Models/user');  // Ensure the correct path

const app = express();
app.use(express.json());  // To parse JSON request body

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://pepakayalasahiti23:zCE0rLQopMFeRxng@namastenode.e3lodm5.mongodb.net/devTinder", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Error in connecting to MongoDB:", error);
        process.exit(1);
    }
};

// ✅ Define `/signup` Route BEFORE calling `connectDB()`
app.post("/signup", async (req, res) => {
    try {
        const user1 = new User({
            firstName: "Sahiti",
            lastName: "Pepakayala",
            emailId: "sahiti@mail.com",
            password: "sahi@1149",
            age: 50,
            gender: "female"
        });
        await user1.save();
        res.status(201).send("Added user successfully");
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});

// ✅ Connect to MongoDB and Start Server
connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Listening on port 5000");
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
});



























// app.get("/abc", (req, res) => {
//     res.send("matched route with multiple 'b's");
// });


// app.get("/userId",userAuth,(req,res)=>{
//     console.log("Authenticatd");
//     res.send("Loggedin")
// })

// app.get("/user",(req,res,next)=>{
//     console.log("requesting user id");
//     next();
// //    res.send("request 1");
    
// },(req,res,next)=>{
//     console.log("response 2");
//     // res.send("request 2");
//     next(); 
// },(req,res,next)=>{
//     console.log("response 3");
//      res.send("request 3");
   
// })

// app.use((err,req,res,next)=>{
//     console.log(err.stack);
//     res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
// })

// app.listen(port,()=>{
//     console.log("listening to the port successfully");
// })
