import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';
import ParentComponent from './components/ParentComponent.js';
import UserGreeting from './components/UserGreeting.js';
import NameList from './components/NameList.js';

function App() {
  return (
    <div className="App">
      <NameList></NameList>
      {/* <UserGreeting /> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Aram"> 
      <p>This is children props</p>
     </Greet>
     <Greet name="Roba"/>
     <Greet name="Miqo"/>
    */}
      {/* <Welcome name="Aram">
      <button type="button">Lyavs TU?</button>
     </Welcome> */}
     
      {/*<Welcome name="Roba" />
      <Welcome name="Miqo" /> */}
      {/* <Hello /> */}
      {/* <Greet name="Aram" heroName="Barmen" /> */}
    </div>
  );
}

export default App;
