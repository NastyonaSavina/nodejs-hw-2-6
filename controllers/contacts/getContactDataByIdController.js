const { getContactById } = require("../../service/contacts");

const getContactDataByIdController = async (req, res, next) => {
    const  id = req.params.contactId;

    const contactDataById = await getContactById(id);
    if (!contactDataById) {
        return res.status(404).json({ "message": `Contact with id ${id} wasn't  found` });
    }

    res.status(200).json(contactDataById);
};

module.exports = { getContactDataByIdController };