import { Dispatch } from 'redux';

export enum ActionTypes {
	ToggleMenu = 'TOGGLE_MENU',
}

export type GlobalAction = {
	type: ActionTypes;
};

export const toggleMenu = () => {
	return (dispatch: Dispatch<GlobalAction>) => {
		dispatch({
			type: ActionTypes.ToggleMenu,
		});
	};
};
