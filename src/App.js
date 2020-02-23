import React, { Component } from "react";
import ImageCard from "./components/Image Card";
import Wrapper from "./components/Wrapper";
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
import images from "./images.json";
import './App.css';

let score = 0;
let topScore = 0;
let clickMessage = "Click an image to begin!";

class App extends Component {
  state = {
    images,
    score,
    topScore,
    clickMessage,
    isGuessCorrect: true
  };


handleSaveClick = id => {
  // Variable to hold the tiles state.
  const images = this.state.images;
  // Search through character tiles to find the one that matches the clicked id.
  const imageClicked = images.filter(image => image.id === id);

  // If the tile isn't clicked...
  if (!imageClicked[0].clicked) {
    // ...set it to now be clicked
    imageClicked[0].clicked = true;
    // ...call this function to register the correct guess
    this.handleCorrectClick();
    // ... randomize character tiles
    this.randomize(images);

    this.setState({ images });
  } else {
    this.handleIncorrectClick();
  }
};

// Function to randomize the characters
randomize = randomArr => {
  randomArr.sort((a, b) => {
    return 0.5 - Math.random();
  });
};

// Handler for correct guesses/clicks
handleCorrectClick = () => {
  this.setState({ isGuessCorrect: true });
  if (this.state.score + 1 > this.state.topScore) {
    this.setState({ topScore: this.state.topScore + 1 });
  }
  if (this.state.score + 1 >= this.state.maxScore) {
    this.setState({
      score: this.state.score + 1,
      clickMessage: "CONGRATS! YOU WIN!"
    });
  } else {
    this.setState({
      score: this.state.score + 1,
      clickMessage: "YOU GUESSED CORRECTLY!"
    });
  }
};

// Handler for incorrect guesses/clicks
handleIncorrectClick = () => {
  this.setState({
    clickMessage: "INCORRECT. PLAY AGAIN?",
    isGuessCorrect: false
  });
  // this.toggleIncorrectAnimation();
  this.resetGame();
};

// Resets the game
resetGame = id => {
  const images = this.state.images;
  for (let i = 0; i < images.length; i++) {
    images[i].clicked = false;
  }
  this.setState({ score: 0 });
};


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    
    return (
      <Wrapper>
        <Navbar
        clickMessage={this.state.clickMessage}
        score = {this.state.score}
        topScore = {this.state.topScore}
        />
        <Banner/>
        {images.map(({id, name, image, clicked }) => (
          <ImageCard
          key={id}
          id={id}
          name={name}
          image={image}
          clicked={clicked}
          clickHandler={this.handleSaveClick}
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;
