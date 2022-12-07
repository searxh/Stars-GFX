import { Dispatch } from "react";

export interface OrderType {
	id: number;
	created_at: string;
	discord: string;
	status: string;
	title: string;
}
interface GlobalStateKeys {
	[key: string]: any;
}
export interface GlobalStateType extends GlobalStateKeys {
	name: string;
}

export interface ActionType {
	type: string;
	field?: string | Array<string>;
	payload: any;
}

export interface GlobalContextType {
	global_state: GlobalStateType;
	dispatch: Dispatch<ActionType>;
}
