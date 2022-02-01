import logo from './logo.svg';
import './App.css';
import Composition from './components/2-4.props/Composition';
import Extraction from './components/2-4.props/Extraction/Extraction';
import ClassComponent from './components/2-5.state/ClassComponent';
import FunctionalComponent from './components/2-5.state/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent/>
      <Extraction/>
      <Composition/>
    </div>
  );
}

export default App;
