import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import ImageTool from '@editorjs/image';

import '../components/creation.scss';

function BlogCreation() {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: Header,
        list: List,
        embed: Embed,
        image: ImageTool,
      },
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
      <div className="content">
        <div className="admin-content">
          <div className="creation-title">
            <h2>Совершить публикацию на странице «Проекты»</h2>
          </div>
          <div className="creation">
            <div className="creation-content">
              <div id="editorjs"></div>
            </div>
          </div>
          <button className="button">Сохранить статью</button>
        </div>
      </div>
    </>
  );
}

export default BlogCreation;
