import { Dispatch } from 'redux';
import { ActionTypes, MenuState, RouteChange } from './actionTypes';
import FolioRoutes from '@/routes';

export const toggleMenu = () => {
	return (dispatch: Dispatch<MenuState>) => {
		dispatch({
			type: ActionTypes.ToggleMenu,
		});
	};
};

export const routeState = () => {
	return (dispatch: Dispatch<RouteChange>, route: FolioRoutes) => {
		dispatch({
			type: ActionTypes.RouteChange,
			route,
		});
	};
};