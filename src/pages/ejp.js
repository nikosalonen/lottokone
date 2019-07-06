import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Balls from '../components/balls';
import Share from '../components/share';

const EJP = () => (
  <Layout>
    <SEO title="Eurojackpot -kone" keywords={['Eurojackpot', 'voitto', 'lottokone', 'lottonumerot']} />
    <h1>Arvo Eurojackpot numerot</h1>
    <p>
      Eurojackpot on lottojen kuningas! Potti voi kasvaa aina 90 miljoonaan euroon asti.
      Numeroita on 1-50 ja tämän lisäksi kaksi tähtinumeroa väliltä 1-10. Tässä rivit ilman
      tähtinumeroita.
    </p>
    <p>
      Voit myös arpoa
      {' '}
      <Link to="/">Lotto-</Link>
      {' '}
      ja
      {' '}
      <Link to="/viking">Vikinglottonumerot</Link>
    </p>
    <Balls pick={5} nums={50} />
    <Share />
    <Link to="/">Takaisin etusivulle</Link>
  </Layout>
);

export default EJP;
