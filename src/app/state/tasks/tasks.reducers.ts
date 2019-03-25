import { TasksActions, TasksActionTypes } from './tasks.actions';
import { TasksState, tasksInitialState } from './tasks.state';

export function tasksReducer(state = tasksInitialState, action: TasksActions): TasksState {
  switch (action.type) {
    case TasksActionTypes.add:
      return { ...state };
    case TasksActionTypes.remove:
      return { ...state };
    case TasksActionTypes.toggleChecked:
      return { ...state };
    case TasksActionTypes.load:
      return { ...state };
  }
}
