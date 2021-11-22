import React, { useEffect } from "react";
import { fetchAction } from "../reducers/moveSlice";

export const Move = () => {
	useEffect(() => {
		fetchAction();
	}, []);

	return <div>This is our move component</div>;
};
