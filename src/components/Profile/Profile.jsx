import './Profile.css';

function Profile() {
  return (
    <div>
      <form className="profile" noValidate>
        <h2 className="profile__greetings">Привет, Имя!</h2>
        <fieldset className="profile__user">
          <label className="profile__data">
            <p className="profile__data-field">Имя</p>
            <input
              id="profile__name"
              className="profile__input"
              type="text"
              name="name"
              placeholder="Виталий"
              minLength={2}
              maxLength={30}
              required
            />
          </label>
          <label className="profile__data">
            <p className="profile__data-field">E-mail</p>
            <input
              id="profile__email"
              className="profile__input"
              type="email"
              name="email"
              placeholder='pochta@yandex.ru'
              required
            />
          </label>
        </fieldset >
        <div className="profile__buttons">
          <button type="submit" className="profile__button profile__edit">Редактировать</button>
          <button type="button" className="profile__button profile__checkout">Выйти из аккаунта</button>
        </div>
      </form>
    </div>
  );
}

export default Profile