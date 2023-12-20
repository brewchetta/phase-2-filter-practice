import MoonsContainer from "./MoonsContainer"
import StarsContainer from "./StarsContainer"
import PlanetsContainer from "./PlanetsContainer"
import spaceShuttle from '../assets/space-shuttle.png'

function App() {
  return (
    <div className="App">

      <img className="absolute fly-in" src={spaceShuttle} alt="space shuttle" />

      <MoonsContainer />
      <StarsContainer />
      <PlanetsContainer />

    </div>
  );
}

export default App;
