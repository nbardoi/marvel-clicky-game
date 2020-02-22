import React, { Component } from "react";
import ImageCard from "./components/Image Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import './App.css';

let correctGuesses = 0;
let topScore = 0;
let clickMessage = "Click on a movie poster to gain points! Click on the same one twice and you lose!";

class App extends Component {
  state = {
    images,
    correctGuesses,
    topScore,
    clickMessage
  };

  setClicked = id => {
    // Make a copy of the state matches array to work with
        const images = this.state.images;

        // Filter for the clicked match
        const clickedImage = images.filter(image => image.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickedImage[0].clicked){

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Top Score: " + topScore);

            correctGuesses = 0;
            clickMessage = "Bummer! You already clicked on this one."

            for (let i = 0 ; i < images.length ; i++){
                images[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({correctGuesses});
            this.setState({images});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else {
          // Set its value to true
          clickedImage[0].clicked = true;

          // restart the guess counter
          correctGuesses = 0;

          // Egg on the user to play again
          clickMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
          topScore = 12;
          this.setState({topScore});
          
          for (let i = 0 ; i < images.length ; i++){
              images[i].clicked = false;
          }

          // Shuffle the array to be rendered in a random order
          images.sort(function(a, b){return 0.5 - Math.random()});

          // Set this.state.matches equal to the new matches array
          this.setState({images});
          this.setState({correctGuesses});
          this.setState({clickMessage});
        }
};


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    
    return (
      <Wrapper>
        <Title>Marvel Clicky Game!</Title>
        {/* <h3 className="scoreSummary">
            {this.state.clickMessage}
        </h3>
                
        <h3 className="scoreSummary card-header">
          Correct Guesses: {this.state.correctGuesses} 
            <br />
          Top Score: {this.state.topScore} 
          </h3> */}
        {this.state.images.map( image => (
          <ImageCard
            setClicked={this.setClicked}
            id={image.id}
            key={image.id}
            image={image.image}
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;
