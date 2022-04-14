const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

let users = [
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
    }
]

app.get("/api/users", (req, res) => { 
    if(users.length === 0){
res.status(404).send('Users not found')
    } else {
        res.send(users)
    }
})

app.post("/api/users", (req, res) => {
    users.push(req.body)
    res.status(201).send("User added")
});

app.put("/api/users/:id", (req, res) => {
    let {id} = req.params; 
    let currentUser = users.find((user) => {
return user.id == id; 
    })
    if(!currentUser){
        res.status(404).send('ID not found');
    } else {
   let updatedUsers = users.map((user) => {
 if(user.id == id){
            return req.body;
        } else {
        return user;
        }
    });
    users = updatedUsers;
res.send("User updated");
}});

app.delete("/api/users/:id", (req, res) => {
let { id } = req.params; 
let current = users.find((user) => {
return user.id == id; 
})
if(!current){
    res.status(404).send('ID not found');
return
} else {
    let newList = users.filter((user) => user.id != id);
 users = newList;
    res.send('User deleted');
}});
  

app.listen(port, () => { console.log("App is now running on port: " + port) })