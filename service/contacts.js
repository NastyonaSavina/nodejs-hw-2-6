const fs = require('fs/promises');
const path = require("path");

const { v4: uuidv4 } = require('uuid');

const { Contacts } = require('./schema/contactsSchema');




const contactsPath = path.join(__dirname, "../models/contacts.json");


const getListContacts = async () => {
  return Contacts.find();
   
 
}

const getContactById = async (contactId) => {
  return Contacts.findById({ _id: contactId });
}

const removeContact = async (contactId) => {
  return Contacts.findByIdAndRemove({ _id: contactId });

}

const addContact = async ({name, email, phone}) => {
  return Contacts.create({id, name, email, phone});
}

const updateContact = async (contactId, body) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, body, { new: true });
}

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
