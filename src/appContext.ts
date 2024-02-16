import { createContext } from "react";
import { ContextProps } from "./types";

export const AppContext = createContext<ContextProps>({
	timing: 45,
	setTiming: () => { },
	ingame: false,
	setIngame: () => { },
	offline: false,
	setOffline: () => { },
});