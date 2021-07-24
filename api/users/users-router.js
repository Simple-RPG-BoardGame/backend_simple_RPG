const router = require("express").Router();

const Users = require("./users-model");

// WORKING
router.get("/users", (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json({ message: `failed to get users - ${error}`})
    })
});

// WORKING
router.get("/users/champs", (req, res) => {
    Users.findChamps()
    .then(users => {
        let topThree = [users[0], users[1], users[2]]
        res.status(200).json(topThree);
    })
    .catch(error => {
        res.status(500).json({ message: `failed to get users - ${error}`})
    })
});

// WORKING
router.get("/users/:id", (req, res) => {
    const id = req.params

    Users.findById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({message: "Could not find user by given ID"})
            }
        })
        .catch(error => {
            res.status(500).json({ message: `failed to get user from Database - ${error}`})
        })
});

// WORKING
router.post("/users/post", (req, res) => {
    const newUser = req.body

    Users.add(newUser)
        .then(user => {
            if(user) {
                res.status(201).json({message: "User posted successfully", userId: user});
            } else {
                res.status(404).json({message: "Failed to post user to database"});
            }
        })
        .catch(err => {
            res.status(500).json({message: "DB Error, user not posted to database", error: err})
        })
})

// WORKING
router.put("/users/edit/:id", (req, res) => {
    const {id} = req.params
    const changes = req.body

    Users.findById(id)
        .then(user => {
            if(user) {
                Users.update(changes, id)
                    .then(updatedUser => {
                        console.log("updated User", updatedUser, "changes", changes)
                        res.status(201).json({message:"Successfully updated User"})
                    })
            } else {
                res.status(404).json({message: "Could not find user by given ID"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Failed to update user", error: err})
        })
})

// WORKING
router.delete("/users/delete/:id", (req, res) => {
    const {id} = req.params

    Users.deleteById(id)
        .then(deleted => {
            if(deleted){
                res.status(201).json({message: "Successfully deleted user"})
            } else {
                res.status(404).json({message: "Could not find user of given ID in Database"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Cannot delete message from database", error: err})
        })
})

module.exports = router;