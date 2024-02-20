const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/users');

mongoose.connect("mongodb+srv://:@cluster0.rkkdpfa.mongodb.net/mernstack?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(result);
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
