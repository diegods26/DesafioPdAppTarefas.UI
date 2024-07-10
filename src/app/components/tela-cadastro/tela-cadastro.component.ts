import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUser } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private accountService: AccountService,
              private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    })
  }

  addUser() {
    debugger
    let model = this.userForm.value;
    this.accountService.addNewUser(model).subscribe({
      next: () => {
        this.userForm.reset();
        this.router.navigateByUrl("/");
      },
      error: erro => {
        alert(`Não foi possivel, concluir o cadastro! Por favor, recarregue a página e tente novamente.`)
      }
    });
  }

}
