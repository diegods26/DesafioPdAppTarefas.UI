import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  user!: any;
  userName!: string;
  loginForm: FormGroup = new FormGroup({});
  currentUser!: User | null;

  constructor(private accountService: AccountService,
              private router: Router) {}

  ngOnInit(): void {
    this.inicializaForm();
    this.getUserLoggedIn();
  }

  get nome() {
    return this.loginForm.get('nome');
  }

  inicializaForm() {
    this.loginForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required)
    })
  }

  loginUser() {
    let login = this.loginForm.value;
    this.accountService.loginUser(login).subscribe({
      next: reponse => {
        if (reponse){
          localStorage.setItem('user', JSON.stringify(reponse));
          this.currentUser = reponse!
          this.getUserLoggedIn();
          this.sendUserName();
        }
      },
      error: erro => {
        alert('Erro! entre com um nome e senha válidos.')
      }
    })
  }

  sendUserName() {
    if (this.currentUser !== null && this.currentUser !== undefined){
      this.accountService.getUserName(this.currentUser!);
      this.router.navigateByUrl('tela-inicial');
      this.loginForm.reset();
    }
    }

  getUserLoggedIn() {
      let session = localStorage.getItem('user');
      this.user = JSON.parse(session!);
      if(this.user !== null && this.user !== undefined){
        this.userName = this.user.userName;
        this.isUserLoggedIn = true;
      }else{
        this.isUserLoggedIn = false;
        this.router.navigateByUrl("");
      }

  }

  logout() {
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
  }

}
