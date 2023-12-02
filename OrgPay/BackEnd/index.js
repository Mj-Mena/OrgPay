const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (res, req) => {});
app.post("/signup", async (req, res) => {
  console.log("Hi");
  try {
    const allUsers = await UsersModel.find();
    console.log(allUsers);
    const findUser = await UsersModel.findOne({ Email: req.body.Email });
    if (findUser) {
      res.json("email is already used");
    } else {
      const users = await UsersModel.create(req.body);
      res.json(users);
    }
  } catch (err) {
    res.json(err);
  }
});

app.post("/Login", async (req, res) => {
  try {
    const findUser = await UsersModel.findOne({ Email: req.body.Email });
    if (findUser) {
      if (req.body.Email === "admin@adminacc.com") {
        if (findUser.Password === req.body.Password) {
          res.json("admin");
        } else {
          res.json("Password didn't match");
        }
      } else {
        res.json("user");
      }
    } else {
      res.json("Doesn't have an account");
    }
  } catch (err) {
    res.json(err);
  }
});
app.get("/admin", (req, res) => {
  UsersModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/admin/users", (req, res) => {
  UsersModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/update", async (req, res) => {
  const id = req.body.id;
  const usern = req.body.usern;
  const email = req.body.email;
  const balance = req.body.balance;
  let doc = await UsersModel.findOneAndUpdate(
    { _id: id },
    { Username: usern, Email: email, Balance: balance }
  );
  let change = await UsersModel.findOne({ _id: id });
  console.log(doc);
  try {
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

app.delete("/admin/user/:id", async (req, res) => {
  const id = req.params.id;
  await UsersModel.findOneAndDelete({ _id: id });
  res.send("Item Deleted");
});
mongoose
  .connect("mongodb://127.0.0.1:27017/Users")
  .then(() => {
    app.listen(3001, () => {
      console.log("connecting to server");
    });
  })
  .catch(() => {
    console.log("can't find db");
  });
