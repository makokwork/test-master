import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/simple-image';
import Link from '@editorjs/link';

const EditorComponent = () => {
  const ejInstance = useRef(null);

  const initEditor = () => {
    console.log('Initializing Editor');
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        ejInstance.current = editor;
        console.log('Editor is ready');
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        header: Header,
        list: List,
        image: SimpleImage,
        link: Link,
      },
      i18n: {
        messages: {
          ui: {
            blockTunes: {
              toggler: {
                'Click to tune': 'Нажмите, чтобы настроить',
                'or drag to move': 'или перетащите',
              },
            },
            inlineToolbar: {
              converter: {
                'Convert to': 'Конвертировать в',
              },
            },
            toolbar: {
              toolbox: {
                Add: 'Добавить',
              },
            },
          },
          toolNames: {
            Text: 'Параграф',
            Heading: 'Заголовок',
            List: 'Список',
            Link: 'Ссылка',
            Bold: 'Полужирный',
            Italic: 'Курсив',
            InlineCode: 'Моноширинный',
          },
          tools: {
            warning: {
              Title: 'Название',
              Message: 'Сообщение',
            },
            link: {
              'Add a link': 'Вставьте ссылку',
            },
            stub: {
              'The block can not be displayed correctly.': 'Блок не может быть отображен',
            },
          },
          blockTunes: {
            delete: {
              Delete: 'Удалить',
            },
            moveUp: {
              'Move up': 'Переместить вверх',
            },
            moveDown: {
              'Move down': 'Переместить вниз',
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
        console.log('Editor destroyed');
      }
    };
  }, []);

  return <div id="editorjs"></div>;
};

export default EditorComponent;
