import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceInventoryLogsService {

  private appUrl = "/inventory-ms/inventoryLog"

  constructor(private http: HttpClient) {
  }

  public listAllInventory(data: any): Observable<any> {
    return this.http.post<any>(`${this.appUrl}`+"/", data)
  }
}
