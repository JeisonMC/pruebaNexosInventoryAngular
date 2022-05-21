import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
  private _personId: string = "";
  private appUrl = "/inventory-ms/person"

  constructor(private http: HttpClient) {
  }

  get personId(): string {
    return this._personId;
  }

  addPersonId(id: string) {
    this._personId = id;
  }

  public listAllUser(): Observable<any> {
    return this.http.get<any>(`${this.appUrl}`)
  }

  public createUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.appUrl}`, data)
  }
}
