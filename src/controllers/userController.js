const getUser = async (req, res) => {
    const user = {
        id: 1,
        name: "Hamza"
    };

    res.json(user);
};

const getUsers = async (req, res) => {
    throw new Error("Failed to get users");

    const users = [
        { id: 1, name: "Hamza" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Omar" }
    ];

    res.json(users);
};

const createUser = async (req, res) => {
    const user = {
        id: 4,
        name: req.body.name
    };

    res.status(201).json(user);
};

module.exports = {
    getUser,
    getUsers,
    createUser
};