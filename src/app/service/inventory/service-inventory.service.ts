import { Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const initInventory = {
  id:'',
  name:'',
  quantity:'',
  admissionDate:''
}

@Injectable({
  providedIn: 'root'
})
export class ServiceInventoryService {
  private _inventory: any[] = [];
  private initInventory$ = new BehaviorSubject<any>(initInventory);
  private appUrl = "/inventory-ms/inventory"

  constructor(private http: HttpClient) {
  }

  get inventory(): any[] {
    return this._inventory;
  }

  addInventory(inventory: any[]) {
    this._inventory = inventory;
  }

  get selectInventory$(): Observable<any> {
    return this.initInventory$.asObservable()
  }
  setInventory(initInventory:any):void{
    this.initInventory$.next(initInventory)
  }

  public listAllInventory(): Observable<any> {
    return this.http.get<any>(`${this.appUrl}`)
  }

  public createInventory(data: any): Observable<any> {
    return this.http.post<any>(`${this.appUrl}`, data)
  }

  public updateInventory(data: any, id: String): Observable<any> {
    return this.http.patch<any>(`${this.appUrl}` + "/" + id, data)
  }

  public deleteInventory(data: any): Observable<any> {
    return this.http.delete<any>(`${this.appUrl}` + "/" + data)
  }
}
