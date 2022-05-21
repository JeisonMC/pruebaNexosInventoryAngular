import {Component, OnInit, Output} from '@angular/core';
import {ServiceInventoryService} from "../../../service/inventory/service-inventory.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {ServiceUserService} from "../../../service/user/service-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-inventory',
  templateUrl: './register-inventory.component.html',
  styleUrls: ['./register-inventory.component.css']
})
export class RegisterInventoryComponent implements OnInit {

  constructor(
    private _ServiceInventoryService: ServiceInventoryService,
    public dialogRef: MatDialogRef<RegisterInventoryComponent>,
    private _ServiceUserService: ServiceUserService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
  }

  findDate() {
    let date = new Date();
    let output = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    return output
  }

  registerForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    date: new FormControl(''),
  });

  createInventory() {
    const data = {
      name: this.registerForm.value.name,
      quantity: this.registerForm.value.quantity,
      admission_date: this.registerForm.value.date,
      person_id:this._ServiceUserService.personId
    }
    this._ServiceInventoryService.createInventory(data).subscribe((response)=>{
      console.log(response)
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['inventory']);
      })
      this.closeDialog()
    });
  }
  closeDialog(): void {
    this.dialogRef.close(null);
  }

}
