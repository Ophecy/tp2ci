import './App.css';
import Navbar from './components/Navbar'
import ActiveUsers from './components/ActiveUsers'
import Chatrooms from './components/Chatrooms'
import TotalUsers from './components/TotalUsers'

function App() {

  return (
    <div className="App">
      
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <ActiveUsers />
          <Chatrooms />
          <TotalUsers />
        </div>
      </div>
      
    </div>
  );
}

export default App;
