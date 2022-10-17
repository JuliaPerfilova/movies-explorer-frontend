import ClickableElement from "../ClickableElement/ClickableElement";
import profilePhoto from '../../images/profile-photo.jpg';
import {LINK_TYPES} from "../../utils/Constants";

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__student">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Юлия</h3>
          <p className="about-me__brief">Фронтенд-разработчик, 41 год</p>
          <p className="about-me__description">Меня зовут Юлия Перфилова. Мне 41 год, замужем, есть сын 1,2 года. По образованию я экономист. Однако,
            мне интересна тема веб-разработки, поэтому я выбрала соответствующий курс от Яндекс-Практикума. Представляю вам свою дипломную работу по
            окончании курса.</p>
          <ClickableElement
            to='https://github.com/JuliaPerfilova/'
            className='about-me__git-link'
            type={LINK_TYPES.LINK}
            isExternal={true}>Github</ClickableElement>
        </div>
        <img src={profilePhoto} alt="Фото Профиля" className="about-me__image"/>
      </div>
    </section>
  );
}

export default AboutMe;
