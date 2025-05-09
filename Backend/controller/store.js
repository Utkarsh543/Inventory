const Store = require("../models/store");

// Add Store
const addStore = async (req, res) => {
    console.log(req.body)
  const addStore = await new Store({
    userID : req.body.userId,
    name: req.body.name,
    email: req.body.email,
    rollno: req.body.rollno,
    phone: req.body.phone
  });

  addStore.save().then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get All Stores
const getAllStores = async (req, res) => {
  const findAllStores = await Store.find({}).sort({ _id: -1 });
  console.log(findAllStores) 
  console.log("store")// -1 for descending;
  res.json(findAllStores);
};

module.exports = { addStore, getAllStores };
