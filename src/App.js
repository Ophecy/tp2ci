import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import ActiveUsersGrid from "./components/ActiveUsersGrid";
import ChatroomsGrid from "./components/ChatroomsGrid";

function App() {
  return (
    <div className="App">
      <ActiveUsers />
      <ActiveUsersGrid />
      <ChatroomsGrid />
    </div>
  );
}

export default App;
