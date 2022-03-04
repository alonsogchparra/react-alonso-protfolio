import translate from '../i18n/translate';
import { descAsaiEng } from '../i18n/messages/alt-US';
import { descAsaiSpa } from '../i18n/messages/alt-VE';

export const workProjects = [
  {
    name: 'Asai Gas',
    descriptionEng: descAsaiEng,
    descriptionSpa: descAsaiSpa,
    previewMessage: translate('asaiPreview'),
    image:
      'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fwork%2Fasaigas_logo.png?alt=media&token=6223f1e4-517a-4cb9-93e6-5080265ee0b0',
    imageDetail:
      'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/projects%2Fwork%2Fasaigas_logo.png?alt=media&token=6223f1e4-517a-4cb9-93e6-5080265ee0b0',
    developed: ['React.js', 'Bootstrap 5', 'Animate.css', 'Github(Page)'],
    link: 'https://alonsogchparra.github.io/autocorrector-react/',
    projectLink: 'asaigas',
    githubLink: 'https://github.com/alonsogchparra/autocorrector-react',
    video: null,
    id: 1,
  },
];
