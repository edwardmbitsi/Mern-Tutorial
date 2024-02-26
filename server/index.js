const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/users');

mongoose.connect("mongodb+srv://mbitsiedward:nMWYlFrx45L8Q2jY@cluster0.rkkdpfa.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0");

// Use async/await syntax to handle asynchronous operations
app.get("/getUsers", async (req, res) => {
    try {
        const result = await UserModel.find({});
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Use async/await syntax to handle asynchronous operations
app.post("/createUser", async (req, res) => {
    const user = req.body;
    try {
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
