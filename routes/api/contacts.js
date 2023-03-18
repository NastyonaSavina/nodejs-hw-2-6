const express = require('express');
const { getListContacts, getContactById, addContact, updateContact, removeContact } = require('../../models/contacts');

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contacts= await getListContacts();
  res.status(200).json(contacts);
})

router.get('/:contactId', async (req, res, next) => {
  const { id } = req.params.contactId;

  const contactDataById = await getContactById(id);
  if (!contactDataById) {
    res.status(404).json({ "message": `Contact with id ${id} wasn't  found` });
    return;

  }
  res.status(200).json(contactDataById);
})

router.post('/', async (req, res, next) => {
  const { body } = req.body;
  const {
    name,
    email,
    phone
  } = body;

  if(!name || !email || !phone){
    res.status(400).json({"message": "missing required name field"});
    return;
  }

  const newContact = await addContact(body);
  res.status(201).json(newContact);
})

router.delete('/:contactId', async (req, res, next) => {
  const { id } = req.params.contactId;
  const contactById = await getContactById(id);
  if (!contactById) {
    res.status(404).json({ "message": `Contact with id ${id} wasn't  found` });
    return;
  }

  await removeContact(id);
  res.status(200).json({ "message": "contact deleted" });
})

router.put('/:contactId', async (req, res, next) => {
  const {
    name,
    email,
    phone
  } = req.body;

  if(!name || !email || !phone){
    res.status(400).json({"message": "missing fields"});
    return;
  }
 
  const updatedContact = await updateContact(req.params.contactId, req.body);
   if (!updatedContact) {
      res.status(404).json({"message": `Contact with id ${req.params.contactId} wasn't  found`});

  }
  res.status(200).json(updatedContact);

})

module.exports = router
