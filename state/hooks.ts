import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { Dispatch } from "redux";
import { GlobalAction } from "./actions";

export const useAppDispatch: () => Dispatch<GlobalAction> = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;