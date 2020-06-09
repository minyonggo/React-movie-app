import React from 'react';

function Food({ name, image }) {
  return (
    <div>
      <h3>I Love {name}.</h3>
      <img src={image} alt={"image of " + name} />
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : "hamburger",
    image : "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001010/img/basic/a0001010_main.jpg?20200317173246&q=80&rw=750&rh=536"
  },
  {
    id : 2,
    name : "donggas",
    image : "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F09%2Ftonkatsu-mania-pork-cutlet-seoul-restaurant-top-1.jpg?q=75&w=800&cbr=1&fit=max"
  }
];

const FoodList = foodILike.map(Element => <Food key={Element.id} name={Element.name} image={Element.image} />);

function App() {
  return (
    <div>
      {FoodList}
    </div>
  );
}

export default App;