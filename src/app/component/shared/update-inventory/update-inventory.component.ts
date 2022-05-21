import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceInventoryService} from "../../../service/inventory/service-inventory.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ServiceUserService} from "../../../service/user/service-user.service";

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  newDate:string = "";
  updateInventoryForm : FormGroup ;
  constructor(
    private _ServiceInventoryService: ServiceInventoryService,
    private _ServiceUserService: ServiceUserService,
    public dialogRef: MatDialogRef<UpdateInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.formaterDate()
    this.updateInventoryForm = this.fb.group({
      name: new FormControl(this.data.name),
      quantity: new FormControl(this.data.quantity),
      date: new FormControl(this.newDate)
    })
  }

  ngOnInit(): void {
    this.formaterDate()
  }
  findDate() {
    let date = new Date();
    let output = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    return output
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  formaterDate(){
    let date = this.data.admissionDate.split('-')
    this.newDate = date[2]+"-"+date[1]+"-"+date[0]
  }

  updateInventory() {
    const data = {
      name: this.updateInventoryForm.value.name,
      quantity: this.updateInventoryForm.value.quantity,
      admission_date: this.updateInventoryForm.value.date,
      person_id: this._ServiceUserService.personId
    }
    this._ServiceInventoryService.updateInventory(data, this.data.id).subscribe(response => {});
  }
}
