import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Balls from '../components/balls';
import Share from '../components/share';

const Vikinglotto = () => (
  <Layout>
    <SEO title="Vikinglotto -kone" keywords={['vikinglotto', 'voitto', 'lottokone', 'lottonumerot']} />
    <h1>Arvo Vikingloton numerot</h1>
    <p>
      Vikinglotossa arvotaan kuusi numeroa 48:sta. Koska peli on kaikkein suosituin Norjassa, on
      voittaja yleensä norjalainen. Päävoittoon tarvitaan 6 oikein JA vikingnumero (1-8).
      Todennäköisyys voittaa on suurinpiirtein sama kuin Eurojackpotissa. Potin kokoon nähden
      {' '}
      <Link to="/ejp">Eurojackpot</Link>
      {' '}
      on parempi vaihtoehto.
    </p>
    <Balls pick={6} nums={48} />
    <Share />
    <Link to="/">Takaisin etusivulle</Link>
  </Layout>
);

export default Vikinglotto;
