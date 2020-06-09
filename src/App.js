import React from 'react';

function Food({ favorite }) {
  return (
      <h3>I Love {favorite}.</h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="samgioupsal" />
      <Food favorite="jjajangmyeon" />
      <Food favorite="croissant" />
    </div>
  );
}

export default App;