import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserData } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  loggedIn = false;
  user!: User;

  currentUser!: User | null;
  userData!: UserData;

  constructor(private AccountService: AccountService,
              private router: Router){}

  ngOnInit(): void {
    let session = localStorage.getItem('user');
    this.userData = JSON.parse(session!);
    this.getUserDataSession();

  }



  getUserDataSession() {
    debugger
    // let session = localStorage.getItem('user');
    // let userName = JSON.parse(session!);
    if (this.userData !== null) this.loggedIn = true;
  }

  getUsuario() {
    let session = localStorage.getItem('user');
    let user = JSON.parse(session!);
    this.AccountService.getUserByName(user.userName).subscribe({
      next: response => {
        this.router.navigateByUrl(`/adicina-tarefa/${response.id}`)
      }
    })
  }



  

    addNewItem(value: string) {

    }


}
