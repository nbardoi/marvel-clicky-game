import React from "react";
import "./style.css";


class Score extends React.Component {
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="card text-center">
          
          <div className="card-body">
            <p className="card-text">Click Count:</p>
            <button className="btn btn-primary" >
              Increment
            </button>
          </div>
        </div>
      );
    }
  }

export default Score;