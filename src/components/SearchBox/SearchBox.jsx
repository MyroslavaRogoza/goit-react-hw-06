import css from './SearchBox.module.css'

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        className={css.searchInput}
        value={filter}
        onChange={onFilter}
      />
    </div>
  );
};

export default SearchBox;
