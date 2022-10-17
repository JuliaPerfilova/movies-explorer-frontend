import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";
import {useState} from "react";

function SearchForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searching...');
  }

  const handleChecked = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="search-form">
      <form className="search-form__form">
        <label className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            required
            placeholder="Фильм"
          />
          <ClickableElement
            type={LINK_TYPES.BUTTON}
            buttonClick={handleSearch}
            className="search-form__button">
            Поиск
          </ClickableElement>
        </label>
        <label className="search-form__filter-container">
          <input type="checkbox" onClick={handleChecked} className={`search-form__checkbox${isChecked ? ' search-form__checkbox_checked' : ''}`}></input>
          <p className="search-form__filter-name">Короткометражки</p>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
