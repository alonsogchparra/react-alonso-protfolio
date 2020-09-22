import * as actionTypes from './actionTypes';
import navLotus from '../../media/images/icons/lotus.svg';
import navWater from '../../media/images/icons/water.svg';
import navEarth from '../../media/images/icons/earth.svg';
import navFire from '../../media/images/icons/fire.svg';
import navAir from '../../media/images/icons/air.svg';
import coinLotus from '../../media/images/icons/white_lotus.svg';
import coinWater from '../../media/images/icons/water_coin.svg';
import coinEarth from '../../media/images/icons/earth_coin.svg';
import coinFire from '../../media/images/icons/fire_coin.svg';
import coinAir from '../../media/images/icons/air_coin.svg';
import lotusSound from '../../media/audio/lotus_sound.mp3';
import waterSound from '../../media/audio/water_sound.mp3';
import earthSound from '../../media/audio/earth_sound.mp3';
import fireSound from '../../media/audio/fire_sound.mp3';
import airSound from '../../media/audio/air_sound.mp3';

const waterTheme = () => ({
  type: actionTypes.CHANGE_THEME,
  nextTheme: 'water',
  navImage: navWater,
  coinImage: coinWater,
  sound: waterSound,
});

const earthTheme = () => ({
  type: actionTypes.CHANGE_THEME,
  nextTheme: 'earth',
  navImage: navEarth,
  coinImage: coinEarth,
  sound: earthSound,
});

const fireTheme = () => ({
  type: actionTypes.CHANGE_THEME,
  nextTheme: 'fire',
  navImage: navFire,
  coinImage: coinFire,
  sound: fireSound,
});

const airTheme = () => ({
  type: actionTypes.CHANGE_THEME,
  nextTheme: 'air',
  navImage: navAir,
  coinImage: coinAir,
  sound: airSound,
});

const lotusTheme = () => ({
  type: actionTypes.CHANGE_THEME,
  nextTheme: 'lotus',
  navImage: navLotus,
  coinImage: coinLotus,
  sound: lotusSound,
});

export const turnOnSound = () => ({
  type: actionTypes.TURN_OFF_SOUND,
  isButtonPressed: true,
})
 export const turnOffSound = () => ({
  type: actionTypes.TURN_OFF_SOUND,
  isButtonPressed: false,
})



export const changeTheme = () => {
  
  return  (dispatch, getState) => {
    let theme = getState().theme.currentTheme;

    if(theme === 'lotus') {
      dispatch(waterTheme());
    } else if (theme === 'water') {
      dispatch(earthTheme());
    } else if (theme === 'earth') {
      dispatch(fireTheme());
    } else if (theme === 'fire') {
      dispatch(airTheme());
    } else if (theme === 'air') {
      dispatch(lotusTheme());
    }
  }

}