import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';


export default function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul className="router-area">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/layout/paw">Paw Layout</Link>
            </li>
            <li>
              <Link to="/cards">All Cards</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/layout/paw">
            <PawLayout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
  <div id="header-container">
    <header className="App-header">
      <h2>Welcome to the Realm of the Cat</h2>
    </header>
    <img id="cover-image" src={"https://cat-tarot-cards.herokuapp.com/static/images/cover.jpeg"} alt="cat"/>
  </div>
  )
}
  
function PawLayoutCard({card, index}) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const CardStyleFront = {
    border: "1px solid #292F36",
    padding: "20px",
    margin: "20px",
    width: "250px",
    height: "450px",
    justify_content: "center",
    align_content: "center",
    background_color: "#F5F3F5",
  };
  const CardStyleBack = {
    border: "1px solid #292F36",
    padding: "20px",
    margin: "20px",
    width: "250px",
    height: "400px",
    background_color: "#F5F3F5",
    justify_content: "center",
    align_content: "center"
  };
  return (
    <div className={"howard" + index}>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
    <div className='CardFront' style={CardStyleFront} onMouseEnter={()=>setIsFlipped((prev) => !prev)} id={index}>
      {card.card_name}<br/> {card.card_general}<br/>
      <img src={"https://cat-tarot-cards.herokuapp.com/" + card.card_image} alt="kitty!" />
    </div >
    <div style={CardStyleBack} onMouseLeave={() => setIsFlipped((prev) => !prev)}  className="CardBack">
    {card.card_upright} {card.card_reversed}
    </div>
  </ReactCardFlip>
</div>
  )
}


function PawLayout( ){
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/layout/paw`)
      .then(response => {
        setCardsData(response.data)
      })
      .catch((error) => {
        console.log('The value of error is:', error);
      })
  }, []);

  return (
    <div className="paw-layout">
        {cardsData.map((card, index)=>(
          <PawLayoutCard card={card} index={index}  />
        ))}
      </div>

  )
}


function Cards() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
      .then(response => {
        setCardsData(response.data)
      })
      .catch((error) => {
        console.log('The value of error is:', error);
      })
  }, []);

  return (
    <div>
      <div className='cards-layout'>
        <div className="card-box">   {cardsData.map((card, index) => (
          <div key={index} className="card">{card.card_name}
            <div>{card.card_general} </div>
            <img src={"https://cat-tarot-cards.herokuapp.com/" + card["image-location"]} alt="" /> </div>
        ))}
        </div>
      </div>
    </div>
  )
}