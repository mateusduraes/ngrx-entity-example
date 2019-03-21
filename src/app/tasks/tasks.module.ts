import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [TasksPageComponent, TaskFormComponent, TaskListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
  ],
})
export class TasksModule { }
