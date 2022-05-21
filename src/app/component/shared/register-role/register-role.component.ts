import { Component, OnInit } from '@angular/core';
import {ServiceRoleService} from "../../../service/role/service-role.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.css']
})
export class RegisterRoleComponent implements OnInit {

  constructor(
    private _ServiceRoleService: ServiceRoleService,
    public dialogRef: MatDialogRef<RegisterRoleComponent>
  ) { }

  ngOnInit(): void {
  }

  createRoleForm = new FormGroup({
    name: new FormControl('')
  });
  createRole() {
    const data = {
      name:this.createRoleForm.value.name
    }
    this._ServiceRoleService.createRole(data).subscribe(() => {
      this.closeDialog()
    });
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

}
