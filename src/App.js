import logo from './logo.svg';
import './App.css';
import WelcomeDialog from './components/3-5.Composition/WelcomeDialog';
import Dialog from './components/3-6.Composition2/Dialog';
import ThankyouDialog from './components/3-6.Composition2/ThankyouDialog';
import Input from './components/3-7.HOC/Input';
import Button from './components/3-7.HOC/Button';
// import List from './components/2-9.List/List';
// import Condition from './components/2-8.ConditionalRendering/Condition';
// import Event from './components/2-7.Event/Event';
// import Composition from './components/2-4.props/Composition';
// import Extraction from './components/2-4.props/Extraction/Extraction';
// import ClassComponent from './components/2-5.state/ClassComponent';
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
// import FunctionalComponent from './components/2-5.state/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <Input/>
      <br/>
      <br/>
      <Button/>
      {/* <ThankyouDialog/> */}
      {/* <Dialog/> */}
      {/* <WelcomeDialog /> */}
      {/* <Reducer/>
      <State/> */}
      {/* <UncontrolledComponent/>
      <ControlledComponent/> */}
      {/* <List/> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent/>
      <Extraction/>
      <Composition/> */}
    </div>
  );
}

export default App;
