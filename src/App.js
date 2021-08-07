import  {Route} from 'react-router-dom';
import React from 'react'
import './App.css';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
function App() {
  return (
    <>
      <Route exact path="/">
        <Contact />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
    </>
  );
}

export default App;
