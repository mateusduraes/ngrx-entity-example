import { Task } from 'src/app/models/task';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface TasksState extends EntityState<Task> {}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
 selectId: task => task.id,
});

export const tasksInitialState: TasksState = adapter.getInitialState(

);
