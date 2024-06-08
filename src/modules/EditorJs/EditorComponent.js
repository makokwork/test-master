import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Link from '@editorjs/link';
import AttachesTool from '@editorjs/attaches';

const EditorComponent = ({ editorRef }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        if (editorRef) {
          editorRef.current = editor;
        }
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
        image: ImageTool,
        link: Link,
        attaches: {
          class: AttachesTool,
          config: {
            endpoint: 'http://localhost:8008/uploadFile',
          },
        },
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
            Image: 'Изображение',
            Attachment: 'Файл',
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

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
        console.log('Editor destroyed');
      }
    };
  }, [editorRef]);

  return <div id="editorjs"></div>;
};

export default EditorComponent;
