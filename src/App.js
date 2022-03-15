import logo from './logo.svg';
import './App.css';

const name = 'Noman';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}, Welcome to <span className='title'>My react App</span></h1>
        <p className='para'>This is cool!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* new component add here */}
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>My New friend</h3>
      <Friend></Friend>
      <Friend></Friend>

      <h3>Props are using here</h3>
      {/* props using here */}
      <NewPerson name="Abdullah Al Noman" phone="01811191228"></NewPerson>
      <NewPerson name="Sharif Osman" phone="01521109642"></NewPerson>
    </div>
  );
}

const Person = () => {
  return (
    <div className='person'>
      <h2>Name: Shakib Al Hasan</h2>
      <p>Profession: Cricketer</p>
    </div>
  )
}

function Friend() {
  return (
    <div className='friend'>
      <h2>Name: Sharif Osman</h2>
      <p>Profession: Romeo</p>
    </div>
  )
}

// props 
const NewPerson = props => {
  console.log(props);
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
export default App;
