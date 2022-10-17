function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__descriptions">
        <div className="about-project__description">
          <p className="about-project__description-title">Дипломный проект включал 5 этапов</p>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <p className="about-project__description-title">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__grid">
        <p className="about-project__grid-item about-project__grid-item_background_green">1 неделя</p>
        <p className="about-project__grid-item about-project__grid-item_background_grey">4 недели</p>
        <p className="about-project__grid-item about-project__grid-item_background_transparent">Back-end</p>
        <p className="about-project__grid-item about-project__grid-item_background_transparent">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
