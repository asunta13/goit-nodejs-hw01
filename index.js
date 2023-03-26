const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			console.log(allContacts);
			break;
		case "readById":
			const oneContact = await contacts.getContactById(id);
			console.log(oneContact);
			break;
		case "add":
			const newContact = await contacts.addContact({ name, email, phone });
			console.log(newContact);
			break;
		case "deleteById":
			const deleteContact = await contacts.deleteContact(id);
			console.log(deleteContact);
			break;
		default:
			console.warn("\x1B[31m Unknown action type!");
	}
};

program
	.option("-a, --action <type>")
	.option("--id <type>")
	.option("--name <type>")
	.option("--email <type>")
	.option("--phone <type>");

program.parse();
const options = program.opts();
invokeAction(options);
