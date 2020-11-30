import React from "react";
import ReactDOM from "react-dom";
import TotalUsers from "./TotalUsers";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TotalUsers />, div);
});
