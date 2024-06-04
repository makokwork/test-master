import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initFAQ, selectFAQ } from "../../../store/features/FAQ";
import { useEffect } from "react";
import { FAQ_API } from "../../../API";
import GetHelpItem from "./GetHelpItem";

function GetHelpList() {
  const dispatch = useDispatch();
  const FAQ = useSelector(selectFAQ);

  useEffect(() => {
    FAQ_API.getAll()
      .then(FAQ => dispatch(initFAQ({ FAQ })))
      .catch(err => console.error(err))
  }, [dispatch])

  return (
    <section className="section container-about">
      <header className="section__header">
        <h2 className="section__title">Получить помощь</h2>
        <h3 className="section__description">Ответы на наиболее часто задаваемые вопросы </h3>
      </header>
      <div className="section-main-gethelp container">
        <div className="section-main-gethelp__body">
          <div className="gethelp">
            <ul className="gethelp__list">
              {FAQ.map(item => (
                <GetHelpItem key={item.id} FAQ={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetHelpList;
