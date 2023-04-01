const { Contacts } = require("../../service/contacts/contactsSchema");
const { getListContacts } = require("../../service/contacts/contactsService");


const getContactsController = async (req, res, next) => {
    const { _id: owner } = req.user;

    const contacts = await getListContacts(owner);
    res.status(200).json({contacts});
};

module.exports = { getContactsController };