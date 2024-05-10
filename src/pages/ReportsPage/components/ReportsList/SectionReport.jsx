import React from 'react';

const SectionReport = ({ report }) => {
  return (
    <div className="reports__accordion-body">
      <div className="reports__accordion-body-inner">
        <p>{report.title}</p>
        <button className="reports__button button" type="button">
          Посмотреть
        </button>
      </div>
    </div>
  );
};

export default SectionReport;