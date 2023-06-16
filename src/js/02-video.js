import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(time => {
      localStorage.setItem('videoplayer-current-time', time);
    });
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}