'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
  },
];

// There is only 1 TradingCard definition because it's using templating to pass in the values for each card
// Each card is an instance of TradingCard
// The props for each card are: name, imgUrl, skill
// We can get the value of a prop at props.nameOfProp (like how they are used in the TradingCard React component below)
function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>   
    </div>
  );
}

// By using ReactDOM.render() each trading card is mounted into the DOM (see code below)
// document.querySelector is used to select elements for each card by id
// The props are being rendered onto the page by being passed in through the TradingCard React component
ReactDOM.render(
  <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
  document.querySelector('#balloonicorn'),
);

ReactDOM.render(
  <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
  document.querySelector('#float'),
);

ReactDOM.render(
  <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
  document.querySelector('#llambda'),
);

ReactDOM.render(
  <TradingCard name="Merge" skill="singing Broadway hits" imgUrl="/static/img/merge.png" />,
  document.querySelector('#merge'),
);

ReactDOM.render(
  <TradingCard name="Chef Leo" skill="gourmet vegan chef" imgUrl="/static/img/off-by-one.jpeg" />,
  document.querySelector('#leo'),
);

ReactDOM.render(
  <TradingCard name="Seeds" skill="roller coaster tester" imgUrl="/static/img/seedpy.jpeg" />,
  document.querySelector('#seeds'),
);

ReactDOM.render(
  <TradingCard name="Skittles the Cat" skill="rock climbing" imgUrl="/static/img/polymorphism.jpeg" />,
  document.querySelector('#skittles'),
);

ReactDOM.render(
  <TradingCard name="Short Stack" skill="short order cook" imgUrl="/static/img/shortstack-overflow.jpeg" />,
  document.querySelector('#short-stack'),
);