import DocumentsItem from "./DocumentsItem";

const DocumentsList = ({ documents }) => {
  return (
    <>
      <ul className="documents__list">
        {documents.map((document) => (
          <DocumentsItem document={document} key={document.id} />
        ))}
      </ul>
    </>
  );
};

export default DocumentsList;
