import './App.css';
import Navbar from './components/Navbar'
import ActiveUsers from './components/ActiveUsers'
import Chatrooms from './components/Chatrooms'
import TotalUsers from './components/TotalUsers'
import ActiveUsersGrid from "./components/ActiveUsersGrid";
import ChatroomsGrid from "./components/ChatroomsGrid";

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
      <ActiveUsersGrid />
      <ChatroomsGrid />

      </div>
      
      
    </div>
  );
}

export default App;
