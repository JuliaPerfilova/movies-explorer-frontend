function Profile() {

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Юлия!</h2>
        <form className="profile__form">
          <label className="profile__inputs">Имя
            <input
              type="text"
              className="profile__input"
              name='name'
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <label className="profile__inputs">E-mail
            <input
              type="email"
              className="profile__input"
              name="email"
              minLength="2"
              maxLength="30"
              required
            />
          </label>
            <button
              className="profile__button"
            >
              Редактировать
            </button>
            <button
              className="profile__logout-button"
            >
              Выйти из аккаунта
            </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;