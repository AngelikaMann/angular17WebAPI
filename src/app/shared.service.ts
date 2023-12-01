import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private httpClient = inject(HttpClient);
  readonly APIUrl = 'http://localhost:54974/api';
  readonly PhotoUrl = 'http://localhost:54974/Photos/';

  constructor(private http: HttpClient) {}
  getDepList(): Observable<any[]> {
    return this.httpClient.get<any>(this.APIUrl + '/department');
  }

  addDepartment(val: any) {
    return this.http.post(this.APIUrl + '/Department', val);
  }

  updateDepartment(val: any) {
    return this.http.put(this.APIUrl + '/Department', val);
  }

  deleteDepartment(val: any) {
    return this.http.delete(this.APIUrl + '/Department/' + val);
  }

  getDepEmplList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee');
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/Employee', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + '/Employee', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.APIUrl + '/Employee/' + val);
  }
  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }
  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(
      this.APIUrl + '/Employee/GetAllDepartmentNames'
    );
  }
}
