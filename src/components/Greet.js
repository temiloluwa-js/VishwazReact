import React from "react";

const Greet = (props) => {
  const {name, heroName} = props
  
    return (
    <div>
      <h1>
        Hello {name} also known as {heroName}
      </h1>

    </div>
  );
};

export default Greet;
