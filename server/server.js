require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const People = require("./models/people");

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/people", (req, res) => {
  People.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred");
    } else {
      const people = data.map((person) => {
        return {
          id: person._id,
          name: `${person.firstName} ${person.lastName}`,
          age: person.age,
        };
      });
      res.json(people);
    }
  });
});

app.post("/api/submit", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, age } = req.body;
  const person = new People({ firstName, lastName, age });
  person.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred");
    } else {
      console.log("Person added to database", data);
    }
  });

  res.send("Data received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
