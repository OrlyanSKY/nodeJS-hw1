const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// listContacts().then((contacts) => console.table(contacts));

// getContactById("5").then((contact) => console.table(contact));

// removeContact(8).then((contacts) => console.table(contacts));

addContact("Marik", "Marik@gmail.com", "0930335642");
