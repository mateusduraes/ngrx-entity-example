import { Action } from '@ngrx/store';
import { Task } from 'src/app/models/task';

export enum TasksActionTypes {
  add = '[Tasks] Add',
  remove = '[Tasks] Remove',
  toggleChecked = '[Tasks] Toggle Checked',
  load = '[Tasks] Load',
}

export class AddTaskAction implements Action {
  readonly type = TasksActionTypes.add;
  constructor (private payload: { task: Task }) {}
}
export class RemoveTaskAction implements Action {
  readonly type = TasksActionTypes.remove;
  constructor (private payload: { task: Task }) {}
}
export class ToggleCheckedTaskAction implements Action {
  readonly type = TasksActionTypes.toggleChecked;
  constructor (private payload: { task: Task }) {}
}
export class LoadTasksAction implements Action {
  readonly type = TasksActionTypes.load;
  constructor () {}
}

export type TasksActions =
  | AddTaskAction
  | RemoveTaskAction
  | ToggleCheckedTaskAction
  | LoadTasksAction;
