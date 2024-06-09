import { createElement } from "react";

const ContentBlock = ({ block }) => {
  console.log(block);

  switch(block.type) {
    case "paragraph": 
      return <p dangerouslySetInnerHTML={{
        __html: block.data.text
      }}></p>
    
    case "link":
      return <a href={`${block.data.link}`}>{block.data.link}</a>

    case "header":
      return createElement(
        `h${block.data.level}`,
        {},
        block.data.text
      );

    case "list":
      switch(block.data.style) {
        case "ordered": 
          return (
            <ol>
              {block.data.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )

        case "unordered":
          return (
            <ul>
              {block.data.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )

        default: 
          return <ol></ol>
      }      
    
    default:
      return <p></p>
  }
};

export default ContentBlock;