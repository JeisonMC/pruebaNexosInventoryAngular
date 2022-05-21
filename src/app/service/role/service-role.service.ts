import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceRoleService {

  private appUrl = "/inventory-ms/role"
  constructor(private http: HttpClient) { }

  public listAllRole(): Observable<any> {
    return this.http.get<any>( `${this.appUrl}`)
  }

  public createRole(data : any): Observable<any> {
    return this.http.post<any>( `${this.appUrl}`,data)
  }
}
