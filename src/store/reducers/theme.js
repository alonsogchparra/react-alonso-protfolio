import * as actionTypes from '../actions/actionTypes';
import lotus from '../../media/images/icons/lotus.svg';
import coinLotus from '../../media/images/icons/white_lotus.svg';
import lotusSound from '../../media/audio/lotus_sound.mp3';

const initState = {
  currentTheme: 'lotus',
  themes: {
    water: {
      // General
      bg: '#b3e9ff',
      'p-divider': '#0200496b',
      // Navbar
      'nav-bg': '#174e98',
      'nav-items': '#ffffff',
      'nav-btn': '#ffffff',
      // Dashboard
      'dash-title': '#202020',
      'dash-name': '#1a7cff',
      'dash-skill': '#202020',
      'dash-icon': '#174e98',
      'dash-icon-hover': '#3189ff',
      // About Me
      'about-title': '#202020',
      'about-code': '#992626',
      'about-text': '#202020',
      // Projects
      'projects-title': '#202020',
      'projects-page-item': '#174e98',
      'projects-page-color': '#202020',
      'projects-radio-button-hover': '#184f9821',
      // Project
      'project-title': '#ffffff',
      'project-description': '#ffffff',
      'project-content': '#0f2347',
      'project-option': '#b3e9ff',
      'project-divider': '#ffffff5e',
      // Project Detatils
      'details-title': '#202020',
      'details-text': '#202020',
      'details-dev-bg': '#fafafa',
      'details-dev-color': '#174e98',
      'details-link': '#992626',
      // Resume
      'resume-title': '#202020',
      'resume-icon': '#174e98',
      'resume-icon-hover': '#3189ff',
      'resume-education': '#202020',
      'resume-college': '#202020',
      'resume-college-time': '#202020',
    },
    earth: {
      // General
      bg: '#effc93',
      'p-divider': '#0668398c',
      // Navbar
      'nav-bg': '#066839',
      'nav-items': '#fafafa',
      'nav-btn': '#fafafa',
      // Dashboard
      'dash-title': '#202020',
      'dash-name': '#066839',
      'dash-skill': '#202020',
      'dash-icon': '#066839',
      'dash-icon-hover': '#62e2a5',
      // About Me
      'about-title': '#202020',
      'about-code': '#8f009c',
      'about-text': '#202020',
      // Projects
      'projects-title': '#202020',
      'projects-page-item': '#066839',
      'projects-page-color': '#202020',
      'projects-radio-button-hover': '#07693921',
      // Project
      'project-title': '#ffffff',
      'project-description': '#ffffff',
      'project-content': '#213a27',
      'project-option': '#ffffff',
      'project-divider': '#ffffff69',
      // Project Detatils
      'details-title': '#202020',
      'details-text': '#202020',
      'details-dev-bg': '#066839',
      'details-dev-color': '#ffffff',
      'details-link': '#8f009c',
      // Resume
      'resume-title': '#202020',
      'resume-icon': '#066839',
      'resume-icon-hover': '#62e2a5',
      'resume-education': '#202020',
      'resume-college': '#202020',
      'resume-college-time': '#202020',
    },
    fire: {
      // General
      bg: '#1f1f1f',
      'p-divider': '#ecb102',
      // Navbar
      'nav-bg': '#a10000',
      'nav-items': '#fafafa',
      'nav-btn': '#fafafa',
      // Dashboard
      'dash-title': '#fafafa',
      'dash-name': '#ff2c3f',
      'dash-skill': '#fafafa',
      'dash-icon': '#bf1e2d',
      'dash-icon-hover': '#f94758',
      // About Me
      'about-title': '#fafafa',
      'about-code': '#ecb102',
      'about-text': '#fafafa',
      // Projects
      'projects-title': '#fafafa',
      'projects-page-item': '#a10000',
      'projects-page-color': '#fafafa',
      'projects-radio-button-hover': '#a0000021',
      // Project
      'project-title': '#fafafa',
      'project-description': '#fafafa',
      'project-content': '#560b00',
      'project-option': '#fafafa',
      'project-divider': '#ecb102',
      // Project Detatils
      'details-title': '#fafafa',
      'details-text': '#fafafa',
      'details-dev-bg': '#a10000',
      'details-dev-color': '#ffffff',
      'details-link': '#ecb102',
      // Resume
      'resume-title': '#fafafa',
      'resume-icon': '#bf1e2d',
      'resume-icon-hover': '#f94758',
      'resume-education': '#fafafa',
      'resume-college': '#fafafa',
      'resume-college-time': '#fafafa',
    },
    air: {
      // General
      bg: '#5c3027',
      'p-divider': '#ff841f',
      // Navbar
      'nav-bg': '#ff841f',
      'nav-items': '#202020',
      'nav-btn': '#202020',
      // Dashboard
      'dash-title': '#fafafa',
      'dash-name': '#ffb400',
      'dash-skill': '#fafafa',
      'dash-icon': '#ffb400',
      'dash-icon-hover': '#ffedc3',
      // About Me
      'about-title': '#fafafa',
      'about-code': '#ffb400',
      'about-text': '#fafafa',
      // Projects
      'projects-title': '#fafafa',
      'projects-page-item': '#ff841f',
      'projects-page-color': '#fafafa',
      'projects-radio-button-hover': '#fe841f21',
      // Project
      'project-title': '#202020',
      'project-description': '#202020',
      'project-content': '#fcdc7b',
      'project-option': '#202020',
      'project-divider': '#0000001f',
      // Project Detatils
      'details-title': '#fafafa',
      'details-text': '#fafafa',
      'details-dev-bg': '#ff841f',
      'details-dev-color': '#202020',
      'details-link': '#ffb400',
      // Resume
      'resume-title': '#fafafa',
      'resume-icon': '#ffb400',
      'resume-icon-hover': '#ffedc3',
      'resume-education': '#fafafa',
      'resume-college': '#fafafa',
      'resume-college-time': '#fafafa',
    },
    lotus: {
      // General
      bg: '#fafafa',
      'p-divider': '#0000001f',
      // Navbar
      'nav-bg': '#193b5e',
      'nav-items': '#ffffff',
      'nav-btn': '#ffffff',
      // Dashboard
      'dash-title': '#202020',
      'dash-name': '#193b5e',
      'dash-skill': '#202020',
      'dash-icon': '#193b5e',
      'dash-icon-hover': '#7d94ab',
      // About Me
      'about-title': '#202020',
      'about-code': '#0d0fff',
      'about-text': '#202020',
      // Projects
      'projects-title': '#202020',
      'projects-page-item': '#193b5e',
      'projects-page-color': '#202020',
      'projects-radio-button-hover': '#1a3c5f21',
      // Project
      'project-title': '#193b5e',
      'project-description': '#202020',
      'project-content': '#ffffff',
      'project-option': '#193b5e',
      'project-divider': '#0000001f',
      // Project Detatils
      'details-title': '#202020',
      'details-text': '#202020',
      'details-dev-bg': '#193b5e',
      'details-dev-color': '#ffffff',
      'details-link': '#0d0fff',
      // Resume
      'resume-title': '#202020',
      'resume-icon': '#193b5e',
      'resume-icon-hover': '#7d94ab',
      'resume-education': '#202020',
      'resume-college': '#202020',
      'resume-college-time': '#202020',
    },
  },
  navImage: lotus,
  coinImage: coinLotus,
  soundEffect: lotusSound,
  isButtonPressed: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME: {
      return {
        ...state,
        currentTheme: action.nextTheme,
        navImage: action.navImage,
        coinImage: action.coinImage,
        soundEffect: action.sound,
      };
    }

    case actionTypes.TURN_ON_SOUND: {
      return {
        ...state,
        isButtonPressed: action.isButtonPressed,
      };
    }

    case actionTypes.TURN_OFF_SOUND: {
      return {
        ...state,
        isButtonPressed: action.isButtonPressed,
      };
    }

    default:
      return state;
  }
};
