const express = require('express');

const {
  getContactsController,
  getContactDataByIdController,
  addNewContactController,
  deleteContactByIdController,
  updateContactByIdController,
  updateStatusContactController,
} = require('../../controllers/contacts/index');

const { asyncWrapper } = require("../../helpers/index");

const {addContactValidation, updateStatusContactValidation } = require('../../middlewares/index');

const router = express.Router();

router.get('/', asyncWrapper(getContactsController));

router.get('/:contactId', asyncWrapper(getContactDataByIdController));

router.post('/', addContactValidation, asyncWrapper(addNewContactController));

router.delete('/:contactId', asyncWrapper(deleteContactByIdController));

router.put('/:contactId', addContactValidation, asyncWrapper(updateContactByIdController));

router.patch('/:contactId/favorite', updateStatusContactValidation, asyncWrapper(updateStatusContactController));

module.exports = router;
