'use strict';

// Added rest of cards and their info to tradingCardData
const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Chef Leo",
    skill: "gourmet vegan chef",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seeds",
    skill: "roller coaster tester",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Skittles the Cat",
    skill: "rock climbing",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "short order cook",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "singing Broadway hits",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];

// There is only 1 TradingCard definition because it's using templating to pass in the values for each card
// Each card is an instance of TradingCard
// The props for each card are: name, imgUrl, skill
// We can get the value of a prop at props.nameOfProp (like how they are used in the TradingCard React component below)

// define TradingCard component
   // render one trading card
function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>   
    </div>
  );
}

// define TradingCardContainer component

  // loop over each data point
  // and make a TradingCard component
  // return all those TradingCard's we made

  // Think of your for-loop as instantiating a TradingCard component for each data point.
function TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
        />
    );
  }
  
  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}

// mount just ONE thing onto the page:
// one TradingCardContainer component
ReactDOM.render(<TradingCardContainer />, document.querySelector("#all-cards"));


// By using ReactDOM.render() each trading card is mounted into the DOM
// document.querySelector is used to select elements for each card by id
// The props are being rendered onto the page by being passed in through the TradingCard React component