import { useState } from 'react';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addContact } from 'redux/operations';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const сontact = { name, number };
    const isExist = name =>
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    if (isExist(name)) {
      alert(`contact already exist`);
      return;
    }

    const action = addContact(сontact);
    console.log('action in form', action);
    dispatch(action);

    setName('');
    setNumber('');
  };

  return (
    <div className={css.formWrapper}>
      <label className={css.inputTitle}>Name</label>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          value={name}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={css.inputTitle}>Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button className={css.btnSubmit}>Add contact</button>{' '}
      </form>
    </div>
  );
};

export default Phonebook;
