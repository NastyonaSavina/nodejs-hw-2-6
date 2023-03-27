const { updateStatusContact } = require("../../service/contacts");

const updateStatusContactController = async (req, res, next) => {
    const updatedStatusById = await updateStatusContact(req.params.contactId, req.body);
    if (!updatedStatusById) {
        res.status(404).json({ "message": `Contact with id ${req.params.contactId} wasn't  found` });

    }
    res.status(200).json(updatedStatusById);
}

module.exports = { updateStatusContactController };