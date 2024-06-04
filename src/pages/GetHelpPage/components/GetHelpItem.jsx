const GetHelpItem = ({ FAQ }) => {
  return (
    <li className="gethelp__item">
      <details className="gethelp__accordion">
        <summary className="gethelp__accordion-header">
          <h4 className="gethelp__accordion-title">{FAQ.question}</h4>
          <span className="gethelp__accordion-indicator"></span>
        </summary>
        <div className="gethelp__accordion-body">
          <p>
            {FAQ.answer}
          </p>
        </div>
      </details>
    </li>
  );
};

export default GetHelpItem;