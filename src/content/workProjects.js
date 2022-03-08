import translate from '../i18n/translate';
import { descAsaiEng } from '../i18n/messages/alt-US';
import { descAsaiSpa } from '../i18n/messages/alt-VE';
import { DASHBOARD, FLAGS, PROFILE_TEAM, RESUMEN } from '../constants/Links';

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
    link: 'https://alonsogchparra.github.io/autocorrector-react/',
    projectLink: 'asaigas',
    githubLink: 'https://github.com/alonsogchparra/autocorrector-react',
    video: null,
    id: 1,
    workplaceName: 'Arkusnexus',
    workplaceLogo:
      'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/experiences%2Farkus.png?alt=media&token=c76103e8-4427-4668-acc4-901e9bdbd414',
    devTools: ['Raspberry', 'React-Native', 'C#', 'Expo', 'Mysql', 'Python'],
    teams: [
      {
        position: 'Asai 1.0',
        members: [
          {
            name: 'Rossana',
            profile: PROFILE_TEAM.ROSSANA,
            role: 'Data Scientist',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
          {
            name: 'José Zermeño',
            profile: PROFILE_TEAM.ZERMENO,
            role: 'Developer',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
        ],
      },
      {
        position: 'Asai 2.0',
        members: [
          {
            name: 'Alonso Parra',
            profile: RESUMEN.PROFILE_PHOTO,
            role: 'Frontend Developer',
            links: [DASHBOARD.GITHUB, DASHBOARD.LINKEDIN, DASHBOARD.TWITTER],
            country: FLAGS.VENEZUELA,
          },
          {
            name: 'Fernanda Cerezo',
            profile: PROFILE_TEAM.FERNANDA,
            role: 'Frontend Developer',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
          {
            name: 'Ricardo Sanchez',
            profile: PROFILE_TEAM.CHALCHI,
            role: 'Frontend Developer',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
          {
            name: 'Emmanuel Moran',
            profile: PROFILE_TEAM.EMMA,
            role: 'Frontend Developer',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
          {
            name: 'Ruben Garrido Becerril',
            profile: PROFILE_TEAM.RUBEN,
            role: 'Backend Developer',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
        ],
      },
      {
        position: 'UI/UX',
        members: [
          {
            name: 'Elba Echevarría Ornelas',
            profile: PROFILE_TEAM.ELBA,
            role: 'UI/UX',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
        ],
      },
      {
        position: 'Scrum Master',
        members: [
          {
            name: 'Ricardo Enriquez',
            profile: null,
            role: 'Scrum Master',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
        ],
      },
      {
        position: 'Product Owner',
        members: [
          {
            name: 'Diana Felipe Martinez',
            profile: PROFILE_TEAM.DIANA,
            role: 'Product Owner',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
        ],
      },
      {
        position: 'QA',
        members: [
          {
            name: 'Micaela Illescas Cruz',
            profile: PROFILE_TEAM.MICAELA,
            role: 'QA',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
          {
            name: 'Enrique de la Cruz',
            profile: null,
            role: 'QA',
            links: [null, null, null],
            country: FLAGS.MEXICO,
          },
        ],
      },
    ],
  },
];
