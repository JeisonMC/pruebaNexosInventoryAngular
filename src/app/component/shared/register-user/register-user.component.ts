import {Component, OnInit} from '@angular/core';
import {ServiceUserService} from "../../../service/user/service-user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {ServiceRoleService} from "../../../service/role/service-role.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  dataSource: any[] = [];
  constructor(
    private _ServiceUserService: ServiceUserService,
    private _ServiceRoleService: ServiceRoleService,
    public dialogRef: MatDialogRef<RegisterUserComponent>
  ) {
  }

  ngOnInit(): void {
    this.listAllRole()
  }

  createUserForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  createUser() {
    const data = {
      name: this.createUserForm.value.name,
      age: this.createUserForm.value.age,
      role: this.createUserForm.value.role,
      email: this.createUserForm.value.email,
      password: this.createUserForm.value.password
    }
    this._ServiceUserService.createUser(data).subscribe(response => {
      console.log(response);
    });
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  listAllRole() {
    this._ServiceRoleService.listAllRole().subscribe(response => {
      this.dataSource = response;
      console.log(this.dataSource)
    });
  }
}
