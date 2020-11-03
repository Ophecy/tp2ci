import "./App.css";
import Navbar from "./components/Navbar";
import ActiveUsers from "./components/ActiveUsers";
import Chatrooms from "./components/Chatrooms";
import TotalUsers from "./components/TotalUsers";
import ActiveUsersGrid from "./components/ActiveUsersGrid";
import ChatroomsGrid from "./components/ChatroomsGrid";
/* eslint-disable */

function App() {
	return (
		<div className="App">
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 p-0" style={{backgroundColor: "#d5d9dd"}}>
						<nav className="navbar">
							<button type="button" className="btn ml-auto">
								<svg
									width="1.3em"
									height="1.3em"
									viewBox="0 0 16 16"
									className="bi bi-arrow-bar-left"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
									/>
								</svg>
							</button>
						</nav>
						<ul className="nav flex-column">
							<li className="nav-item">
								<a className="nav-link d-inline-flex text-dark" href="#">
									<svg
										width="1.3em"
										height="1.3em"
										viewBox="0 0 16 16"
										className="bi bi-person-lines-fill mr-2"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
										/>
									</svg>
									<p>Users</p>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link d-inline-flex text-dark" href="#">
									<svg
										width="1.3em"
										height="1.3em"
										viewBox="0 0 16 16"
										className="bi bi-chat-fill mr-2"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
									</svg>
									<p>Chatrooms</p>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-10 p-0">
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
				</div>
			</div>
		</div>
	);
}

export default App;
