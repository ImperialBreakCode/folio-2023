import { ActionTypes, GlobalAction } from '../actionTypes';

const menuToggle = (isOpen: boolean = false, action: GlobalAction) => {
	switch (action.type) {
		case ActionTypes.ToggleMenu:
			return !isOpen;

		default:
			return isOpen;
	}
};

export default menuToggle;
