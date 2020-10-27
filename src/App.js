import './App.css';
import Navbar from './components/Navbar'
import ActiveUsers from './components/ActiveUsers'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <ActiveUsers />
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
