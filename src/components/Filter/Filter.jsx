import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/selector';
import { updateFilter } from 'redux/slice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={css.filterText}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={filter}
        onChange={event => dispatch(updateFilter(event.target.value))}
      />
    </>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
