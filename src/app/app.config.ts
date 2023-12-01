import { ApplicationConfig } from '@angular/core';
import { provideRouter,Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { provideHttpClient } from '@angular/common/http';

export const appRoutes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideClientHydration()]
};
