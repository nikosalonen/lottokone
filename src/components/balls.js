import React, { useState } from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import random from 'lodash/random';
import findLastIndex from 'lodash/findLastIndex';
import map from 'lodash/map';
import shuffle from 'lodash/shuffle';
import includes from 'lodash/includes';


const getBalls = (pick, nums) => {
  if (typeof window !== 'undefined' && window.ga) {
    window.ga('send', 'event', 'Balls', 'Shuffle');
  }
  let numbers = chunk(shuffle(map(Array(nums), (e, i) => i + 1)), 7);

  const lastRow = findLastIndex(numbers);
  while (numbers[lastRow].length < pick) {
    const num = random(1, nums);
    if (!includes(numbers[lastRow], num)) {
      numbers[lastRow].push(num);
    }
  }
  numbers = map(numbers, row => row.sort((a, b) => a - b));
  return map(numbers, (row, i) => `<span class="row">Rivi ${i + 1}:  ${map(row, num => `<span class="number">${num}</span>`).join('')}</span>`).join('');
};
const Balls = (props) => {
  const { pick, nums } = props;
  const [balls, setBalls] = useState(getBalls(pick, nums));
  return (
    <>

      <button type="button" onClick={() => setBalls(getBalls(pick, nums))}>Arvo uudet numerot</button>

      <div id="rowContainer" dangerouslySetInnerHTML={{ __html: balls }} />

    </>
  );
};

Balls.propTypes = {
  pick: PropTypes.number.isRequired,
  nums: PropTypes.number.isRequired,
};
export default Balls;
