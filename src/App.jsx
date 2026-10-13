import { useState } from 'react';
import Ogloszenie from "./components/Ogloszenie";
import './App.css';

const ogloszenia = [
  { id: 1, nazwa: "laptop Dell", cena: 3500, dostepny: true, kategoria: "komputer", opis: "Wydajny laptop do pracy i nauki." },
  { id: 2, nazwa: "Mysz bezprzewodowa", cena: 150, dostepny: true, kategoria: "akcesoria", opis: "Wygodna mysz optyczna z łącznością Bluetooth." },
  { id: 3, nazwa: "Monitor 27' cali", cena: 1500, dostepny: true, kategoria: "monitory", opis: "Monitor o wysokiej rozdzielczości z matrycą IPS." },
  { id: 4, nazwa: "podkladka pod mysz", cena: 35, dostepny: false, kategoria: "akcesoria", opis: "Antypoślizgowa podkładka pod mysz." },
  { id: 5, nazwa: "Klawiatura mechaniczna", cena: 300, dostepny: true, kategoria: "akcesoria", opis: "Klawiatura dla graczy z podświetleniem RGB." },
  { id: 6, nazwa: "Słuchawki bezprzewodowe", cena: 250, dostepny: false, kategoria: "audio", opis: "Wokółuszne słuchawki z aktywną redukcją szumów." },
  { id: 7, nazwa: "Dysk SSD 1TB", cena: 400, dostepny: true, kategoria: "komputer", opis: "Szybki dysk M.2 NVMe o dużej pojemności." },
  { id: 8, nazwa: "Kamera internetowa HD", cena: 180, dostepny: true, kategoria: "akcesoria", opis: "Kamera idealna do wideokonferencji i streamingu." }
];

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1>Portal ogłoszeniowy</h1>
    <p>kupuj i sprzedawaj</p>
    <p className="licznik-produktow">Liczba wszystkich produktów: <strong>{ogloszenia.length}</strong></p>

    <div className="lista-ogloszen">
      {ogloszenia.map((ogloszenie)=>(
        <Ogloszenie key={ogloszenie.id} ogloszenie={ogloszenie}/>
      ))}
    </div>
   </main>
  );
}

export default App;