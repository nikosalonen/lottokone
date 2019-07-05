import React from 'react';

import chunk from 'lodash/chunk';
import random from 'lodash/random';
import findLastIndex from 'lodash/findLastIndex';
import map from 'lodash/map';
import shuffle from 'lodash/shuffle';
import includes from 'lodash/includes';

import Layout from '../components/layout';
import SEO from '../components/seo';


let numbers = chunk(shuffle(map(Array(40), (e, i) => i + 1)), 7);

const lastRow = findLastIndex(numbers);
while (numbers[lastRow].length < 7) {
  const num = random(1, 40);
  if (!includes(numbers[lastRow], num)) {
    numbers[lastRow].push(num);
  }
}
numbers = map(numbers, row => row.sort((a, b) => a - b));
const balls = map(numbers, (row, i) => `<span class="row">Rivi ${i + 1}:  ${map(row, num => `<span class="number">${num}</span>`).join('')}</span>`).join('');
const IndexPage = () => (
  <Layout>
    <SEO title="Lottokone" keywords={['lotto', 'voitto', 'lottokone']} />
    <p>
      Suurin todennäköisyys voittaa lotossa on varmistaa, että kaikki numerot esiintyvät
      tositteella.

    </p>
    <p>
      Tätä voi ajatella kuin hedelmäpeliä. Tarvitsee vain odotella, että numerot
      loksahtavat oikeaan järjestykseen riville.
    </p>
    <p>
Koska 40 ei ole jaollinen seitsemällä, lisätään viimeiseen riviin kolme satunnaista numeroa. Eikö
      numerot miellytä? Lataa sivu uudelleen!
    </p>
    <p>
Voittorivisi on:

    </p>
    <div id="rowContainer" dangerouslySetInnerHTML={{ __html: balls }} />
  </Layout>
);

export default IndexPage;
