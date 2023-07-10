import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import suffixNumber from './suffix.js';

const showTime = () => {
  const now = DateTime.now().setLocale('en');
  const month = now.toFormat('LLLL');
  const day = now.toFormat('d');
  const suffix = suffixNumber(day);
  const year = now.toFormat('y');
  const time = now.toLocaleString(DateTime.TIME_WITH_SECONDS).toLowerCase();
  document.querySelector('.date').innerHTML = `${month} ${day}${suffix} ${year}, ${time}`;
};

setInterval(showTime, 1000);

export default showTime;