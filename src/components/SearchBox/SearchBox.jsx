import css from './SearchBox.module.css'

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        className={css.searchInput}
        value={filter}
        onChange={setFilter}
      />
    </div>
  );
};

export default SearchBox;
