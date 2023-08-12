import FolioRoutes from '@/routes';
import { ActionTypes, GlobalAction } from '../actionTypes';

const changeRoutes = (currentRoute: FolioRoutes = FolioRoutes.Home, action: GlobalAction) => {
	switch (action.type) {
		case ActionTypes.RouteChange:
			return action.route;

		default:
			return currentRoute;
	}
};

export default changeRoutes;
