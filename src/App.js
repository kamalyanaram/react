import './App.css';
import logo from './logo.svg';
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
import Stylesheet from './components/Stylesheet.js';
import Inline from './components/Inline.js';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form.js';
import LifecycleA from './components/LifecycleA.js';
import FragmentDemo from './components/FragmentDemo.js';
import Table from './components/Table.js';
import PureComp from './components/PureComp.js';
import ParentComp from './components/ParentComp.js';
import RefsDemo from './components/RefsDemo.js';
import FocusInput from './components/FocusInput.js';
import FRParentInput from './components/FRParentInput.js';

function App() {
  return (
      <div className="App">
        <FRParentInput/>
        {/* <FocusInput></FocusInput> */}
        {/* <RefsDemo/> */}
        {/*
        <ParentComp/>
        <Table></Table>
        <FragmentDemo></FragmentDemo>
        <LifecycleA></LifecycleA>
        <Form></Form>

        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Inline></Inline>
        <Stylesheet primary={true}></Stylesheet>
        <NameList></NameList>
        <UserGreeting />

        <ParentComponent></ParentComponent>
        <EventBind></EventBind>0
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>

        <Counter />
        <Message />

        <Greet name="Aram">
          <p>This is children props</p>
        </Greet>
        <Greet name="Roba"/>
        <Greet name="Miqo"/>

        <Welcome name="Aram">
          <button type="button">Lyavs TU?</button>
        </Welcome>
        <Welcome name="Roba" />
        <Welcome name="Miqo" />
        <Hello />

        <Greet name="Aram" heroName="Barmen" />
        */}
        </div>
  );
}

export default App;


