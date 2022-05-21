import {Component, OnInit} from '@angular/core';
import {ServiceUserService} from "../../../service/user/service-user.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  dataSource: any[] = [];
  currentUser = "";
  constructor(
    private _ServiceUserService: ServiceUserService,
    public dialogRef: MatDialogRef<SelectUserComponent>
  ) {
  }

  ngOnInit(): void {
    this.listAllUser()
  }

  listAllUser() {
    this._ServiceUserService.listAllUser().subscribe(response => {
      this.dataSource = response
    });
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  changeUser(data: string) {
    this.currentUser = data;
    this._ServiceUserService.addPersonId(data)
    this.closeDialog()
  }
}
