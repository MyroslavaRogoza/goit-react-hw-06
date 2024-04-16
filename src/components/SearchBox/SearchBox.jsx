import css from './SearchBox.module.css'

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        className={css.searchInput}
        value={filter}
        onChange={(evt) => {
          return onFilter(evt.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
