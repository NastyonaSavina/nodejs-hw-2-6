const { getListContacts } = require("../../service/contacts");


const getContactsController = async (req, res, next) => {
    const contacts = await getListContacts();
    res.status(200).json(contacts);
};

module.exports = { getContactsController };