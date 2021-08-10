import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  arrUsers: Array<IUser> = [];
  isEdit = false;
  toogle = true;
  editIndex!: number;
  checkoutForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'password': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
  });
  button: any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index: number): void {
    this.arrUsers.splice(index, 1);
  }

  editUser(index: number): void {
    this.checkoutForm.setValue({
      login: this.arrUsers[index].login,
      password: this.arrUsers[index].password,
      email: this.arrUsers[index].email
    });

    this.editIndex = index;
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm);
      let login = this.checkoutForm.value['login'];
      let password = this.checkoutForm.value['password'];
      let email = this.checkoutForm.value['email'];

      if (this.isEdit) {
        this.arrUsers[this.editIndex].login = login;
        this.arrUsers[this.editIndex].password = password;
        this.arrUsers[this.editIndex].email = email;
        this.isEdit = false;
      }
      else {
        let obj = new User(login, password, email);
        this.arrUsers.push(obj);
      }
      this.checkoutForm.reset();
    } else {
      console.log(this.checkoutForm.errors)
    }
  }
}

export interface IUser {
  login: string,
  password: string,
  email: string
}

export class User implements IUser {
  constructor(
    public login: string,
    public password: string,
    public email: string
  ) { }
}
