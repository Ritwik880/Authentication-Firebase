import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import  SignIn  from './components/SignIn';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>

      <Route path="/signin">
        <SignIn/>
      </Route>

    </>

  )
}

export default App;
