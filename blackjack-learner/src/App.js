import "./App.css";
import { useState, useEffect } from "react";
import card from "./images/cardBack.png";
import clubs1 from "./images/1ofClubs.png";
import spades1 from "./images/1ofSpades.png";
import diamonds1 from "./images/1ofDiamonds.png";
import hearts1 from "./images/1ofHearts.png";
import clubs2 from "./images/2ofClubs.png";
import spades2 from "./images/2ofSpades.png";
import diamonds2 from "./images/2ofDiamonds.png";
import hearts2 from "./images/2ofHearts.png";
import clubs3 from "./images/3ofClubs.png";
import spades3 from "./images/3ofSpades.png";
import diamonds3 from "./images/3ofDiamonds.png";
import hearts3 from "./images/3ofHearts.png";
import clubs4 from "./images/4ofClubs.png";
import spades4 from "./images/4ofSpades.png";
import diamonds4 from "./images/4ofDiamonds.png";
import hearts4 from "./images/4ofHearts.png";
import clubs5 from "./images/5ofClubs.png";
import spades5 from "./images/5ofSpades.png";
import diamonds5 from "./images/5ofDiamonds.png";
import hearts5 from "./images/5ofHearts.png";
import clubs6 from "./images/6ofClubs.png";
import spades6 from "./images/6ofSpades.png";
import diamonds6 from "./images/6ofDiamonds.png";
import hearts6 from "./images/6ofHearts.png";
import clubs7 from "./images/7ofClubs.png";
import spades7 from "./images/7ofSpades.png";
import diamonds7 from "./images/7ofDiamonds.png";
import hearts7 from "./images/7ofHearts.png";
import clubs8 from "./images/8ofClubs.png";
import spades8 from "./images/8ofSpades.png";
import diamonds8 from "./images/8ofDiamonds.png";
import hearts8 from "./images/8ofHearts.png";
import clubs9 from "./images/9ofClubs.png";
import spades9 from "./images/9ofSpades.png";
import diamonds9 from "./images/9ofDiamonds.png";
import hearts9 from "./images/9ofHearts.png";
import clubs10 from "./images/10ofClubs.png";
import spades10 from "./images/10ofSpades.png";
import diamonds10 from "./images/10ofDiamonds.png";
import hearts10 from "./images/10ofHearts.png";
import clubs11 from "./images/11ofClubs.png";
import spades11 from "./images/11ofSpades.png";
import diamonds11 from "./images/11ofDiamonds.png";
import hearts11 from "./images/11ofHearts.png";
import clubs12 from "./images/12ofClubs.png";
import spades12 from "./images/12ofSpades.png";
import diamonds12 from "./images/12ofDiamonds.png";
import hearts12 from "./images/12ofHearts.png";
import clubs13 from "./images/13ofClubs.png";
import spades13 from "./images/13ofSpades.png";
import diamonds13 from "./images/13ofDiamonds.png";
import hearts13 from "./images/13ofHearts.png";

export default function App() {
  const [correctMoves, setCorrectMoves] = useState(0);
  const [incorrectMoves, setIncorrectMoves] = useState(0);
  const [usersCards, setUsersCards] = useState([]);
  const [dealersCards, setdealersCards] = useState([card, hearts1, diamonds10]);
  const [usersHand, setUsersHand] = useState(0);
  const [dealersHand, setDealersHand] = useState(0);
  const [selectedCard, setSelectedCard] = useState(card);

  const cards = [
    clubs1,
    spades1,
    hearts1,
    diamonds1,
    clubs2,
    spades2,
    hearts2,
    diamonds2,
    clubs3,
    spades3,
    hearts3,
    diamonds3,
    clubs4,
    spades4,
    hearts4,
    diamonds4,
    clubs5,
    spades5,
    hearts5,
    diamonds5,
    clubs6,
    spades6,
    hearts6,
    diamonds6,
    clubs7,
    spades7,
    hearts7,
    diamonds7,
    clubs8,
    spades8,
    hearts8,
    diamonds8,
    clubs9,
    spades9,
    hearts9,
    diamonds9,
    clubs10,
    spades10,
    hearts10,
    diamonds10,
    clubs11,
    spades11,
    hearts11,
    diamonds11,
    clubs12,
    spades12,
    hearts12,
    diamonds12,
    clubs13,
    spades13,
    hearts13,
    diamonds13,
  ];

  const drawRandom = () => {
    const card = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[card]);
    return cards[card];
  };

  const createDealerHand = () => {
    // alert("Ran");
    const card = Math.floor(Math.random() * cards.length);
    setdealersCards(...dealersCards, cards[card]);
  };

  // useEffect(() => {
  //   createDealerHand();
  // }, []);

  return (
    <div>
      <div className="stats">
        <div className="correct">Correct: {correctMoves}</div>
        <div className="incorrect">Incorrect: {incorrectMoves}</div>
        <img src={selectedCard} alt="Card" className="card"></img>
      </div>
      <div className="hands">
        <div className="dealers">
          {dealersCards.map((curr, index) => (
            <img
              key={index}
              src={curr}
              alt="Card"
              style={{ marginRight: "10px" }}
            />
          ))}
        </div>
        <div className="players">{usersCards}</div>
      </div>
      <div className="options">
        <button className="stand">STAND</button>
        <button className="hit" onClick={drawRandom}>
          HIT
        </button>
      </div>
    </div>
  );
}
