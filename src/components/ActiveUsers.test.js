import React from "react";
import ReactDOM from "react-dom";
import ActiveUsers from "./ActiveUsers";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ActiveUsers />, div);
});
