const DocumentsItem = ({ document }) => {
    return (
      <li className="documentsitem documents-page">
        <h4 className="documentsaccordion-title">
          {document.name}
        </h4>
        <a href={document.file}>Скачать</a>
      </li>
    );
};

export default DocumentsItem;
