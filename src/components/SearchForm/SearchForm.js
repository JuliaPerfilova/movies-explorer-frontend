import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";
import {useEffect, useState} from "react";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

function SearchForm({onSearchClick, onCheckBoxChange, shortMoviesChecked, searchedKeyword, saveAndValidateKeyword, inputRequired}) {

  const {values, setValues, handleInputChange } = useFormWithValidation();

  const [searchError, setIsSearchError] = useState('');

  useEffect(() => {
    const temp = values;
    if (temp.keyword !== searchedKeyword) {
      setValues({...temp, keyword: searchedKeyword});
    }
  }, [searchedKeyword])

  const handleCheckBoxChange = (e) => {
    const isChecked = e.target.checked;
    onCheckBoxChange(isChecked, searchedKeyword);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const validationResult = saveAndValidateKeyword(values.keyword);
    if (!validationResult.isValid) {
      setIsSearchError(validationResult.message);
    } else {
      setIsSearchError('');
      onSearchClick(values.keyword, shortMoviesChecked ? shortMoviesChecked : false);
    }
  }

  // handle
  return (
    <section className="search-form">
      <form onSubmit={handleSearch} className="search-form__form" noValidate={true}>
        <label className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            name="keyword"
            value={values.keyword || ''}
            onChange={handleInputChange}
            required={inputRequired}
            placeholder="Фильм"
          />
          <ClickableElement
            type={LINK_TYPES.BUTTON}
            className="search-form__button"
            isButtonSubmit={true}>
            Поиск
          </ClickableElement>
        </label>
        <span className="search-form__input-error">
          {searchError}
        </span>
        <label className="search-form__filter-container">
          <input name="isShortMovies" type="checkbox" checked={shortMoviesChecked} onChange={handleCheckBoxChange}
            className={`search-form__checkbox${shortMoviesChecked ? ' search-form__checkbox_checked' : ''}`}></input>
          <p className="search-form__filter-name">Короткометражки</p>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
