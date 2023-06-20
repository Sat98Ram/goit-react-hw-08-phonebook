import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selector';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import ContactItem from './ContactItem';
import { selectIsAuth } from 'redux/auth/authSelectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuth]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {filteredContacts.map((contact, index) => (
          <ContactItem
            key={index}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
