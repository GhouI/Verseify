import './App.css';
import { Navbar } from './components';
import {About, Search, Library, Recent, Home} from './containers'
function App() {
  return (
    <div className="App"> 
     <div className="gradient__bg">
      <Navbar />
     </div>
    </div>
  );
}

export default App;