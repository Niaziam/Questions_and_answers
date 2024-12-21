const ContactList = ({ contacts, deleteContact, startEdit }) => {
	return (
	  <div className="space-y-4">
		{contacts.map((contact) => (
		  <div
			key={contact.id} 
			className="p-4 bg-white shadow-md rounded-md flex flex-col sm:flex-row sm:justify-between items-start sm:items-center z-40"
		  >
			<div>
			  <p className="text-lg font-semibold">Name: {contact.name}</p>
			  <p className="text-gray-600">Phone: {contact.phone}</p>
			  <p className="text-gray-600">Email: {contact.email}</p>
			</div>
			<div className="mt-4 sm:mt-0 flex space-x-2">
			  <button
				onClick={() => deleteContact(contact.id)}  
				className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
			  >
				Delete
			  </button>
			  <button
				onClick={() => startEdit(contact.id)} 
				className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
			  >
				Edit
			  </button>
			</div>
		  </div>
		))}
	  </div>
	);
  };
  
  export default ContactList;
  