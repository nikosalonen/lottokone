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
      Eurojackpot on lottojen kuningas! Eurojackpot toimii 18 Euroopan maassa. Viikoittainen
      päävoitto on 10–90 miljoonaa euroa. Yksi lottorivi maksaa Suomessa kaksi euroa. Arvonta
      suoritetaan perjantai-iltaisin Helsingissä. Suomen lisäksi Eurojackpot-lottoon voi osallistua
      Saksassa, Alankomaissa, Italiassa, Espanjassa, Tanskassa, Virossa, Sloveniassa, Norjassa,
      Ruotsissa, Islannissa, Latviassa, Liettuassa, Kroatiassa, Puolassa, Tšekeissä, Unkarissa ja
      Slovakiassa. Suomessa loton tuotto käytetään suomalaisten edunsaajien hyväksi.
    </p>
    <p>
      Eurojackpotin ensimmäinen arvonta suoritettiin 23. maaliskuuta 2012. Arvonnassa ei löytynyt
      yhtään täysosumaa. Arvonta tapahtuu kahdessa osassa. Ensin arvotaan viisi päänumeroa
    </p>
    <p>
      Voittoluokkia on 12 kappaletta. Minimivoittoon riittää, kun vähintään kaksi päänumeroa ja
      yksi tähtinumero on oikein tai yksi päänumero ja kaksi tähtinumeroa on oikein.
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
    <h2>Todennäköisyydet</h2>
    <table>
      <thead>
        <tr>
          <th>Voittoluokka</th>
          <th>Todennäköisyys</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5+2</td>
          <td>1 : 95 344 200</td>
        </tr>
        <tr>
          <td>5+1</td>
          <td>1 : 5 959 013</td>
        </tr>
        <tr>
          <td>5</td>
          <td>1 : 3 405 150</td>
        </tr>
        <tr>
          <td>4+2</td>
          <td>1 : 423 752</td>
        </tr>
        <tr>
          <td>4+1</td>
          <td>1 : 26 485</td>
        </tr>
        <tr>
          <td>4</td>
          <td>1 : 15 134</td>
        </tr>
        <tr>
          <td>3+2</td>
          <td>1 : 9 631</td>
        </tr>
        <tr>
          <td>2+2</td>
          <td>1 : 672</td>
        </tr>
        <tr>
          <td>3+1</td>
          <td>1 : 602</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1 : 344</td>
        </tr>
        <tr>
          <td>1+2</td>
          <td>1 : 128</td>
        </tr>
        <tr>
          <td>2+1</td>
          <td>1 : 42</td>
        </tr>
      </tbody>

    </table>
    <Link to="/">Takaisin etusivulle</Link>
  </Layout>
);

export default EJP;
