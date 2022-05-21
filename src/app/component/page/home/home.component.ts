import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterUserComponent} from "../../shared/register-user/register-user.component";
import {SelectUserComponent} from "../../shared/select-user/select-user.component";
import {RegisterRoleComponent} from "../../shared/register-role/register-role.component";
import {RegisterInventoryComponent} from "../../shared/register-inventory/register-inventory.component";
import {ServiceInventoryService} from "../../../service/inventory/service-inventory.service";
import {UpdateInventoryComponent} from "../../shared/update-inventory/update-inventory.component";
import {DetailsInventoryComponent} from "../../shared/details-inventory/details-inventory.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dataSource: any[] = [];

  constructor(
    private resgisterUserDialog: MatDialog,
    private _ServiceInventoryService: ServiceInventoryService
  ) {
  }

  ngOnInit(): void {
    this.listAllInventory()
    this.openDialogSelect()
  }

  openDialogRegister(): void {
    this.resgisterUserDialog.open(RegisterUserComponent)
  }

  openDialogSelect(): void {
    this.resgisterUserDialog.open(SelectUserComponent)
  }

  openDialogRole(): void {
    this.resgisterUserDialog.open(RegisterRoleComponent)
  }

  openDialogInventory(): void {
    this.resgisterUserDialog.open(RegisterInventoryComponent)
  }

  openDialogUpdateInventory(dataInventory: any): void {
    console.log(dataInventory)
    this.resgisterUserDialog.open(UpdateInventoryComponent, {data: dataInventory})
  }

  openDialogDetailsInventory(dataDetails: any): void {
    this.resgisterUserDialog.open(DetailsInventoryComponent, {data: dataDetails})
  }

  listAllInventory() {
    this._ServiceInventoryService.listAllInventory().subscribe(response => {
      this.dataSource = response;
    });
  }

  deleteInventory(id: any) {
    this._ServiceInventoryService.deleteInventory(id).subscribe(response => {
      console.log(response);
    });
  }
}

