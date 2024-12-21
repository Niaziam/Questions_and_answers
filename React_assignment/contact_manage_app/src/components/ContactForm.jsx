import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, currentContact, updateContact }) => {
  const [name, setName] = useState(currentContact?.name || '');
  const [phone, setPhone] = useState(currentContact?.phone || '');
  const [email, setEmail] = useState(currentContact?.email || '');

  
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setPhone(currentContact.phone);
      setEmail(currentContact.email);
    }
  }, [currentContact]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { name, phone, email };

    if (currentContact) {
      updateContact(currentContact.id, contactData);
    } else {
      addContact(contactData);
    }

   
    resetForm();
  };

  
  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="p-2 border rounded w-full"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
        className="p-2 border rounded w-full"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        {currentContact ? 'Save Changes' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm;
