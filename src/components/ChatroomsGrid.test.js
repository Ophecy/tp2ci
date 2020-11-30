import React from "react";
import ReactDOM from "react-dom";
import ChatroomsGrid from "./ChatroomsGrid";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ChatroomsGrid />, div);
});
