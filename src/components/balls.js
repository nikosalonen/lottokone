import React, { useState } from 'react';
import chunk from 'lodash/chunk';
import random from 'lodash/random';
import findLastIndex from 'lodash/findLastIndex';
import map from 'lodash/map';
import shuffle from 'lodash/shuffle';
import includes from 'lodash/includes';

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,

} from 'react-share';


const getBalls = () => {
  if (typeof window !== 'undefined' && window.ga) {
    window.ga('send', 'event', 'Balls', 'Shuffle');
  }
  let numbers = chunk(shuffle(map(Array(40), (e, i) => i + 1)), 7);

  const lastRow = findLastIndex(numbers);
  while (numbers[lastRow].length < 7) {
    const num = random(1, 40);
    if (!includes(numbers[lastRow], num)) {
      numbers[lastRow].push(num);
    }
  }
  numbers = map(numbers, row => row.sort((a, b) => a - b));
  return map(numbers, (row, i) => `<span class="row">Rivi ${i + 1}:  ${map(row, num => `<span class="number">${num}</span>`).join('')}</span>`).join('');
};
const Balls = () => {
  const [balls, setBalls] = useState(getBalls());
  return (
    <>

      <button type="button" onClick={() => setBalls(getBalls())}>Arvo uudet numerot</button>

      <div id="rowContainer" dangerouslySetInnerHTML={{ __html: balls }} />

      <FacebookShareButton url="https://lottokone.fi?utm_source=facebook&utm_medium=share_buttons&utm_campaign=siteshare" />
      <TwitterShareButton url="https://lottokone.fi?utm_source=twitter&utm_medium=share_buttons&utm_campaign=siteshare" />
      <TelegramShareButton url="https://lottokone.fi?utm_source=telegram&utm_medium=share_buttons&utm_campaign=siteshare" />
      <WhatsappShareButton url="https://lottokone.fi?utm_source=whatsapp&utm_medium=share_buttons&utm_campaign=siteshare" />
    </>
  );
};
export default Balls;
