import React from "react";

import "./Summary.css";

export const Summary = ({userInput, populationAge, yearsToMars, futureExpectations}) => {
  return (
      <>
    <h2 className="summary-heading">Your answers:</h2>
    <div className="summary">
      <div>
        Your own words about the future: <q>{userInput}</q> /Genius
      </div>
      <div>
        And you believe that in 50 years {populationAge}% of all humans
        will live to be over 150 years old! Compare that with your estimation
        that it will take {yearsToMars} for us humans to settle on Mars.
      </div>
      <div>
        The thing you most look forward to experience though, is {futureExpectations}!
      </div>
    </div>
    </>
  );
};
