import {
  ActionReducerMap,
} from '@ngrx/store';
import { TasksState } from './tasks/tasks.state';
import { tasksReducer } from './tasks/tasks.reducers';

export interface AppState {
  tasks: TasksState;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
};

