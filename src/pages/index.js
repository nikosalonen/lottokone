import React from 'react';


import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Balls from '../components/balls';
import Share from '../components/share';


const IndexPage = () => (
  <Layout>
    <SEO title="Lottokone" keywords={['lotto', 'voitto', 'lottokone', 'lottonumerot']} />
    <h1>Arvo lottonumerot</h1>
    <p>
      Suurin todennäköisyys voittaa lotossa on varmistamalla, että kaikki numerot esiintyvät
      vähintään kerran.
    </p>
    <p>
      Tätä voi ajatella kuin hedelmäpeliä. Tarvitsee vain odotella, että numerot
      loksahtavat oikeaan järjestykseen riville.
    </p>
    <p>
Koska 40 ei ole jaollinen seitsemällä, lisätään viimeiseen riviin kolme satunnaista numeroa.
    </p>
    <p>
Haluatko mielummin
      {' '}
      <Link to="/viking">Viking Loton</Link>
      {' '}
tai
      {' '}
      <Link to="/ejp">Eurojackpotin</Link>
      {' '}
numerot?
    </p>

    <p>
Voittorivisi on:

    </p>
    <Balls pick={7} nums={40} />
    <Share />
  </Layout>
);

export default IndexPage;
