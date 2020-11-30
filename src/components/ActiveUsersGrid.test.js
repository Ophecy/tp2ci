import React from "react";
import ReactDOM from "react-dom";
import ActiveUsersGrid from "./ActiveUsersGrid";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ActiveUsersGrid />, div);
});
