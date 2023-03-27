const { getContactById } = require("../../service/contacts");


const deleteContactByIdController = async (req, res, next) => {
    const id = req.params.contactId;
    
    const contactById = await getContactById(id);
    if (!contactById) {
        return res.status(404).json({ "message": `Contact with id ${id} wasn't  found` });
    }

    await removeContact(id);
    res.status(200).json({ "message": "contact deleted" });
};

module.exports = { deleteContactByIdController };
