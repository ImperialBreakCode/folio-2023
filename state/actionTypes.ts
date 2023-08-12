import FolioRoutes from "@/routes";

export enum ActionTypes {
	ToggleMenu = 'TOGGLE_MENU',
    RouteChange = 'ROUTE_CHANGE'
}

export interface MenuState {
    type: ActionTypes.ToggleMenu;
}

export interface RouteChange {
    type: ActionTypes.RouteChange,
    route: FolioRoutes;
}

export type GlobalAction = MenuState | RouteChange;