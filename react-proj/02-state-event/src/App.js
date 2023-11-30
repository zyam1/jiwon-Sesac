import './App.css';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';
import HWClassComponent from './components/HWClassComponent';
import HWFuncComponent from './components/HWFuncComponent';
import EventClass from './components/EventClass';
import EventFunc from './components/EventFunc';
import HandleEx from './components/ex/HandlerEx';
import TurnColor from './components/ex/TurnColor';
import Look from './components/ex/Look';
import Total from './components/ex/Total';
function App() {
  return (
    <div >
      <StateClass name="jiwon"/>
      <StateFunc />
      <HWClassComponent/>

      <HWFuncComponent />
      <EventClass />
      <EventFunc />
      <hr />
      <HandleEx />
      <hr />
      <TurnColor />
      <Look />
      <hr />
      <Total />
    </div>
  );
}

export default App;
