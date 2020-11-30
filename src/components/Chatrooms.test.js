import React from "react";
import ReactDOM from "react-dom";
import Chatrooms from "./Chatrooms";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Chatrooms />, div);
});
