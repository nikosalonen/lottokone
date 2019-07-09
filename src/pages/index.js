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
    <h2>Historia</h2>
    <p>
      Lotto on Italiassa kehitetty onnenpeli, jossa pelaaja yrittää arvata oikein mahdollisimman
      monta arvottavaa numeroa.

    </p>
    <p>
      Suomessa Veikkaus aloitti loton myynnin joulukuussa 1970, ja ensimmäinen lottoarvonta
      televisioitiin 3. tammikuuta 1971. Lottoarvonta täytti 40 vuotta 3. tammikuuta 2011, ja
      tuohon mennessä arvonta on suoritettu 2 126 kertaa.

    </p>
    <p>
      Siitä lähtien lotossa on pelattu yksi kierros arvontoineen joka viikko. Loton peliaika
      päättyy yleensä lauantaina kello 21.45, ja arvonta suoritetaan yleensä lauantaina kello
      22.15. Suuret lauantaille osuvat juhlapyhät saattavat siirtää arvonnan sunnuntaille.
      Lottoarvonnalla on kaksi virallista valvojaa. 3.1.1971–29.9.2013 lottoarvonta on televisioitu
      Yle TV1:llä. Lokakuussa 2013 Loton arvonnat siirrettiin MTV3:llä näytettäväksi kymmenen
      iltauutisten jälkeen, koska Viestintäviraston mukaan Veikkauksen ja Ylen
      sponsorointiyhteistyö oli lainvastaista.

    </p>
    <p>
      Nykyisessä Suomessa pelattavassa lotossa pelaaja valitsee seitsemän numeroa väliltä 1–40
      (alkujaan, syksyyn 1980 saakka valittiin kuusi numeroa väliltä 1–40, sen jälkeen muutaman
      vuoden ajan seitsemän numeroa väliltä 1–37 ja sittemmin seitsemän numeroa väliltä 1–39).
      Arvonnassa arvotaan seitsemän numeroa ja yksi (aikaisemmin kolme ja sittemmin kaksi)
      lisänumero; rivihinta on 1 euro. Voittoluokkia muutettiin muun muassa vuoden 2011
      kierroksesta 41 lähtien. Päävoiton sai tuolloin 7 oikein -tuloksella ja pienimmän voiton
      kolmella varsinaisella ja yhdellä lisänumerolla, joiden määrä pieneni kolmesta kahteen.
      Loton palautusprosentti on 41,1.

    </p>

    <h2>Todennäköisyys</h2>
    <table>
      <thead>
        <tr>
          <th>Voittoluokka</th>
          <th>Täytettäviä ruudukoita</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>7 oikein</td>
          <td>18 643 560</td>
        </tr>
        <tr>
          <td>6+1 oikein</td>
          <td>noin 2 663 366</td>
        </tr>
        <tr>
          <td>6 oikein</td>
          <td>noin 80 708</td>
        </tr>
        <tr>
          <td>5 oikein</td>
          <td>noin 1 681</td>
        </tr>
        <tr>
          <td>4 oikein</td>
          <td>noin 98</td>
        </tr>
        <tr>
          <td>3+1 oikein</td>
          <td>noin 107</td>
        </tr>
        <tr>
          <td>3 oikein</td>
          <td>noin 13</td>
        </tr>
      </tbody>

    </table>
  </Layout>
);

export default IndexPage;
