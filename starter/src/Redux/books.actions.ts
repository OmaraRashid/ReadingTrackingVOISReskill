import { Action, ActionCreator } from "redux";

export const SELECT_SHELF = "SELECT_SHELF";
export type SELECT_SHELF = typeof SELECT_SHELF;

export interface SelectShelfAction extends Action {
  type: SELECT_SHELF;
  payload: string;
}

export const selectShelf: ActionCreator<SelectShelfAction> = (shelf: string) => ({
  type: SELECT_SHELF,
  payload: shelf
});

export const MOVE_TO_SHELF = "MOVE_TO_SHELF";
export type MOVE_TO_SHELF = typeof MOVE_TO_SHELF;

export interface MoveToShelfAction extends Action {
  type: MOVE_TO_SHELF;
  payload: { bookId: string; shelf: string };
}

export const moveToShelf: ActionCreator<MoveToShelfAction> = (bookId: string, shelf: string) => ({
  type: MOVE_TO_SHELF,
  payload: { bookId, shelf }
});

