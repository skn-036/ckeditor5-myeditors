import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

class CkSimpleBalloonEditor extends BalloonEditor {}

// Plugins to include in the build.
CkSimpleBalloonEditor.builtinPlugins = [
    Autoformat,
    Base64UploadAdapter,
    BlockQuote,
    Bold,
    CloudServices,
    Essentials,
    FontBackgroundColor,
    FontColor,
    ImageBlock,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageUpload,
    Indent,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    TextTransformation,
    Underline,
];

// Editor configuration.
CkSimpleBalloonEditor.defaultConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'underline',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'fontColor',
            'fontBackgroundColor',
            'outdent',
            'indent',
            '|',
            'imageInsert',
            'blockQuote',
            'mediaEmbed',
            'undo',
            'redo',
        ],
    },
    language: 'en',
};

export default CkSimpleBalloonEditor;
