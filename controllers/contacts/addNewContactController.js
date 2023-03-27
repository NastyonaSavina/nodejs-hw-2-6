const { addContact } = require("../../service/contacts");


const addNewContactController = async (req, res, next) => {
    const newContact = await addContact(req.body);

    res.status(201).json(newContact);
};

module.exports = { addNewContactController };