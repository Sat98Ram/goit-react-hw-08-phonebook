import { useDispatch } from 'react-redux';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contactItem}>
      {name}: {number}
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.btnDelete}
      >
        delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
