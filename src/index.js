import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postsData = [
  { id: 1, likeCount: 42, lolCount: 15, heartCount: 21, sadCount: 0, angryCount: 5, message: 'Rusijos magnatas Olegas Deripaska, kuriam JAV taiko sankcijas, per nedidelį Latvijos banką pervedė daugiau kaip 3 mlrd. įtartinos kilmės JAV dolerių!' },
  {
    id: 2, likeCount: 5, lolCount: 87, heartCount: 0, sadCount: 0, angryCount: 125, message: `Daugiau nei 500.000 tibetiečių yra verčiami dirbti "perauklėjimo stovyklose". Viso tibete gyvena 3.18 milijono žmonių t.y. kas šeštas tibetietis yra įkalintas.
Apart šitų darbo stovyklų egzistuoja koncentracijos stovyklos, kur yra kalinami 2.000.000 + žmonių (pagrinde Uigūrų tautybės žmonės, bei kitos etninės / religinės mažumos). 
Australijos politikai reiškia susirūpinimą ir skatina boikotuoti Žiemos Olimpines žaidynes Kinijoje, kurios numatytos 2022 metais.`},
  { id: 3, likeCount: 5, lolCount: 2, heartCount: 0, sadCount: 0, angryCount: 5, message: `Sveiki. Parduodame “Teenage mutant ninja turtles: Change is constant” ir “Teenage mutant ninja turtles: City fall”. Plius, papildymas “Loner Ralph (kickstarter expansion)”. Lietuvoje šio žaidimo kol kas dar nėra pirkti:) Idealios būklės. 130€` },
];

const usersData = [
  { id: 1, name: 'Ramūnas', avatar: 'https://avatarfiles.alphacoders.com/115/115909.jpg' },
  { id: 2, name: 'Živilė', avatar: 'https://blog.orangecarton.com/wp-content/uploads/2013/05/mona_lisa_iphone.jpg' },
  { id: 3, name: 'Elzė', avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/HK/en/999/HP4312-NPHP00187_00-AVSMOBILET000623/1578121337000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
  { id: 4, name: 'Montmorency', avatar: 'https://nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-b72be8a/wp-content/uploads/2020/08/Fox-terrier.jpg' },
  { id: 5, name: 'Frodo', avatar: 'https://i.pinimg.com/736x/28/b9/8f/28b98f7cdce838278d683d3b809c8f1e.jpg' },
  { id: 6, name: 'Harry', avatar: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg' },
  { id: 7, name: 'Ron', avatar: 'https://imgix.bustle.com/rehost/2016/9/13/556a0b44-17b5-429c-8954-2dc926bfbc70.jpg' },
];

const messageData = [
  { id: 1, message: 'Kai dėl karantino šalys ėmė užsidarinėti, Domas ir Algirdas grįžo į Palangą manydami, kad tai tebus trumpos atostogos pas tėvus. Tačiau kelios savaitės tuščioje Palangoje jų nuomonę pakeitė.' },
  { id: 2, message: 'JAV vyriausybė Indianos universitetui skyrė milijoną dolerių, kad šios studentai galėtų studijuoti interneto memus.' },
  { id: 3, message: 'Džiugu kad dar yra grojančių ir dainuojančių tautiečių... jei kas neturit ir pamatysit, rekomenduoju p.s vinilai dėja tik pas perparduotojus jau' }
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData} 
      usersData={usersData}
      messageData={messageData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
