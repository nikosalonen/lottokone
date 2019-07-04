import React from 'react';

import chunk from 'lodash/chunk';
import random from 'lodash/random';
import findLastIndex from 'lodash/findLastIndex';
import map from 'lodash/map';
import shuffle from 'lodash/shuffle';
import includes from 'lodash/includes';

import Layout from '../components/layout';
import SEO from '../components/seo';


const numbers = chunk(shuffle(map(Array(40), (e, i) => i + 1)), 7);

const lastRow = findLastIndex(numbers);
while (numbers[lastRow].length < 7) {
  const num = random(1, 40);
  if (!includes(numbers[lastRow], num)) {
    numbers[lastRow].push(num);
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Lottokone" keywords={['lotto', 'voitto', 'kone']} />
    <h1>Lottokone</h1>
    <p>Voittorivisi on:</p>
    <div id="rowContainer" dangerouslySetInnerHTML={{ __html: map(numbers, row => row.sort((a, b) => a - b)).map(r => `<span class="row">${r}</span>`) }} />


  </Layout>
);

export default IndexPage;
