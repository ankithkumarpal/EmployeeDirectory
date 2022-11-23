import './App.css';
import Home from './Home';
import Contextstate from './contexts/contextState';
const App = ()=> {
return (
    <>
     <Contextstate>
        <div className="App">
            <Home/>
        </div>
    </Contextstate>
    </>
  );
}

export default App;
