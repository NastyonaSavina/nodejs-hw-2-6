const express = require('express');

const {
  getContacts,
  getContactDataById,
  addNewContact,
  deleteContactById,
  updateContactById
} = require('../../controllers/contactsController');

const { asyncWrapper } = require('../../helpers/apiHelpers');

const {addContactValidation } = require('../../middlewares/validationMiddleware');

const router = express.Router();

router.get('/', asyncWrapper(getContacts));

router.get('/:contactId', asyncWrapper(getContactDataById));

router.post('/', addContactValidation, asyncWrapper(addNewContact));

router.delete('/:contactId', asyncWrapper(deleteContactById));

router.put('/:contactId', addContactValidation, asyncWrapper(updateContactById));

router.patch('/:contactId/favorite', addContactValidation, asyncWrapper(updateContactById));

module.exports = router;
