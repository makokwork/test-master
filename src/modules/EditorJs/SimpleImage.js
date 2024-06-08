class SimpleImage {
  /**
   * Our tool should be placed at the Toolbox, so describe an icon and title
   */
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"/></svg>',
    };
  }

  /**
   * Allow render Image Blocks by pasting HTML tags, files and URLs
   * @see {@link https://editorjs.io/paste-substitutions}
   * @return {{tags: string[], files: {mimeTypes: string[], extensions: string[]}, patterns: {image: RegExp}}}
   */
  static get pasteConfig() {
    return {
      tags: ['IMG'],
      files: {
        mimeTypes: ['image/*'],
        extensions: ['gif', 'jpg', 'png'], // You can specify extensions instead of mime-types
      },
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
      },
    };
  }

  /**
   * Automatic sanitize config
   * @see {@link https://editorjs.io/sanitize-saved-data}
   */
  static get sanitize() {
    return {
      url: {},
      caption: {
        b: true,
        a: {
          href: true,
        },
        i: true,
      },
    };
  }

  /**
   * Tool class constructor
   * @param {ImageToolData} data — previously saved data
   * @param {object} api — Editor.js Core API {@link  https://editorjs.io/api}
   * @param {ImageToolConfig} config — custom config that we provide to our tool's user
   */
  constructor({ data, api, config }) {
    this.api = api;
    this.config = config || {};
    this.data = {
      url: data.url || '',
      caption: data.caption || '',
      withBorder: data.withBorder !== undefined ? data.withBorder : false,
      withBackground: data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false,
    };

    this.wrapper = undefined;
    this.settings = [
      {
        name: 'withBorder',
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`,
      },
      {
        name: 'stretched',
        icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`,
      },
      {
        name: 'withBackground',
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`,
      },
    ];
  }

  /**
   * Return a Tool's UI
   * @return {HTMLElement}
   */
  render() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('simple-image');

    if (this.data && this.data.url) {
      this._createImage(this.data.url, this.data.caption);
      return this.wrapper;
    }

    const input = document.createElement('input');

    input.placeholder = this.config.placeholder || 'Paste an image URL...';
    input.addEventListener('paste', (event) => {
      this._createImage(event.clipboardData.getData('text'));
    });

    this.wrapper.appendChild(input);

    return this.wrapper;
  }

  /**
   * @private
   * Create image with caption field
   * @param {string} url — image source
   * @param {string} captionText — caption value
   */
  _createImage(url, captionText) {
    const image = document.createElement('img');
    const caption = document.createElement('div');

    image.src = url;
    caption.contentEditable = true;
    caption.innerHTML = captionText || '';

    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(image);
    this.wrapper.appendChild(caption);

    this._acceptTuneView();
  }

  /**
   * Extract data from the UI
   * @param {HTMLElement} blockContent — element returned by render method
   * @return {SimpleImageData}
   */
  save(blockContent) {
    const image = blockContent.querySelector('img');
    const caption = blockContent.querySelector('[contenteditable]');

    return Object.assign(this.data, {
      url: image.src,
      caption: caption.innerHTML || '',
    });
  }

  /**
   * Skip empty blocks
   * @see {@link https://editorjs.io/saved-data-validation}
   * @param {ImageToolConfig} savedData
   * @return {boolean}
   */
  validate(savedData) {
    if (!savedData.url.trim()) {
      return false;
    }

    return true;
  }

  /**
   * Making a Block settings: 'add border', 'add background', 'stretch to full width'
   * @see https://editorjs.io/making-a-block-settings — tutorial
   * @see https://editorjs.io/tools-api#rendersettings - API method description
   * @return {HTMLDivElement}
   */
  renderSettings() {
    const wrapper = document.createElement('div');

    this.settings.forEach((tune) => {
      let button = document.createElement('div');

      button.classList.add(this.api.styles.settingsButton);
      button.classList.toggle(this.api.styles.settingsButtonActive, this.data[tune.name]);
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      button.addEventListener('click', () => {
        this._toggleTune(tune.name);
        button.classList.toggle(this.api.styles.settingsButtonActive);
      });
    });

    return wrapper;
  }

  /**
   * @private
   * Click on the Settings Button
   * @param {string} tune — tune name from this.settings
   */
  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    this._acceptTuneView();
  }

  /**
   * Add specified class corresponds with activated tunes
   * @private
   */
  _acceptTuneView() {
    this.settings.forEach((tune) => {
      this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);

      if (tune.name === 'stretched') {
        this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.stretched);
      }
    });
  }

  /**
   * Handle paste event
   * @see https://editorjs.io/tools-api#onpaste - API description
   * @param {CustomEvent }event
   */
  onPaste(event) {
    switch (event.type) {
      case 'tag':
        const imgTag = event.detail.data;
        this._createImage(imgTag.src);
        break;
      case 'file':
        /* We need to read file here as base64 string */
        const file = event.detail.file;
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
          this._createImage(loadEvent.target.result);
        };

        reader.readAsDataURL(file);
        break;
      case 'pattern':
        const src = event.detail.data;

        this._createImage(src);
        break;
    }
  }
}

export default SimpleImage;
