import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { model as OwnerModel } from "./models/ownerModel.js";
import { model as RegisterModel } from "./models/register.js";
import { model as LoginModel } from "./models/loginModel.js";
import { model as ItemsModel } from "./models/itemsModel.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
const PORT = process.env.PORT || "6000";
app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/OwnerModel", async (req, res) => {
  try {
    console.log(req.body);
    const { FirstName, LastName, Age, ID, Pnum } = req.body;
    const newOwnerModel = new OwnerModel({
      FirstName,
      LastName,
      Age,
      ID,
      Pnum
    });
    await newOwnerModel.save();
    res.status(200).json({ message: "success", json: newOwnerModel });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/RegisterModel", async (req, res) => {
    try {
      console.log(req.body);
      const { FirstName, LastName, Email, Pno, User, Pwd } = req.body;
      const newRegisterModel = new RegisterModel({
        FirstName,
        LastName,
        Email,
        Pno,
        User,
        Pwd
      });
      await newRegisterModel.save();
      res.status(200).json({ message: "success", json: newRegisterModel });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post("/api/LoginModel", async (req, res) => {
    try {
      console.log(req.body);
      const { UserName, Pswd, Role } = req.body;
      const newLoginModel = new LoginModel({
        UserName,
        Pswd,
        Role
      });
      await newLoginModel.save();
      res.status(200).json({ message: "success", json: newLoginModel });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post("/api/ItemsModel", async (req, res) => {
    try {
      console.log(req.body);
      const { Item, Price, Type } = req.body;
      const newItemsModel = new ItemsModel({
        Item,
        Price,
        Type
      });
      await newItemsModel.save();
      res.status(200).json({ message: "success", json: newItemsModel });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get('/api/LoginModel', async (req, res) => {
    const { UserName, Pswd } = req.query;
  
    // Query the login database to find a matching record
    const user = await LoginModel.findOne({ UserName, Pswd });
    console.log("UserName:", UserName);
    console.log("Pswd:", Pswd);
    console.log("User:", user);

    if (user) {
      if (user.UserName === 'aarav' && user.Pswd==='patel') {
        res.redirect('/editpage.html');
      } else if (user.Role === 'customer') {
        res.redirect('/shop.html');
      }
    } else {
      res.status(401).json({ message: 'Invalid user credentials' });
    }
  });

  // Get all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await ItemsModel.find();
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Add a new item
app.post("/api/items", async (req, res) => {
  try {
    const { Item, Price, Type } = req.body;
    const newItem = new ItemsModel({ Item, Price, Type });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete an item by name
app.delete("/api/items/:itemName", async (req, res) => {
  try {
    const { itemName } = req.params;
    await ItemsModel.deleteOne({ Item: itemName });
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Update an item by name
app.put("/api/items/:itemName", async (req, res) => {
  try {
    const { itemName } = req.params;
    const { Price, Type } = req.body;
    const updatedItem = await ItemsModel.findOneAndUpdate({ Item: itemName }, { Price, Type }, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
