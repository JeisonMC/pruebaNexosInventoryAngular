import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceInventoryLogsService} from "../../../service/inventorylog/service-inventory-logs.service";

@Component({
  selector: 'app-details-inventory',
  templateUrl: './details-inventory.component.html',
  styleUrls: ['./details-inventory.component.css']
})
export class DetailsInventoryComponent implements OnInit {
  dataSource: any[] = [];
  constructor(
    private _ServiceInventoryLogService: ServiceInventoryLogsService,
    public dialogRef: MatDialogRef<DetailsInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.listAllInventoryLog()
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  listAllInventoryLog() {
    const requestData = {
      inventory_id : this.data
    }
    console.log(requestData)
    this._ServiceInventoryLogService.listAllInventory(requestData).subscribe(response => {
      this.dataSource = response;
      console.log(response)
    });
  }
}
