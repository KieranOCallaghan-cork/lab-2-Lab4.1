//importaed react 
import React from 'react';
// my list of content and what i want it to say 
const Content = () => {
  return (
    // this is where i want the time and location to be 
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
// to have it exported 
export default Content;