const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

// app.use("/", express.static("public"))


const users = [
    {
        name: "Tony",
        age: 44,
        occupation: "Police",
        id: 1
    }, 
    {
        name: "Anna",
        age: 62,
        occupation: "Banker",
        id: 2
    },
    {
        name: "Erik",
        age: 33,
        occupation: "Doctor",
        id: 3
    },
    {
        name: "Emil",
        age: 25,
        occupation: "Carpenter",
        id: 4
    }
]


app.get("/api/users", (req, res) => { 
    if(users.length === 0){
res.status(404).send('Users not found')
    } else {
        res.json(users)
    }
})

app.post("/api/users", (req, res) => {
    users.push(req.body)
    res.status(201).send(users)
})

app.put("api/users/:id", (req, res) => {

})

app.delete("/api/users/:id", function(req, res) {
    const itemIndex = users.findIndex(({ id }) => id == req.params.id);
    if (itemIndex >= 0) {
      users.splice(itemIndex, 1);
    }
    res.send('User deleted')
});
  

app.listen(port, () => { console.log("App is now running on port: " + port) })