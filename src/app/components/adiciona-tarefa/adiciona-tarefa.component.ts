import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-adiciona-tarefa',
  templateUrl: './adiciona-tarefa.component.html',
  styleUrls: ['./adiciona-tarefa.component.scss']
})
export class AdicionaTarefaComponent implements OnInit{

  tarefaForm!: FormGroup;
  params$!: Subscription;
  userId!: any;
  isAutorized: boolean = false;

  constructor(private tarefaService: TarefaService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.params$ = this.route.paramMap.subscribe({
      next: response => {
        this.userId = response.get('id');
        if (this.userId !== null && this.userId !== undefined){
          this.inicializaForm();
          this.isAutorized = true;
        }
      }
    })
  }

  inicializaForm() {
    this.tarefaForm = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descricao: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      dataCriacao: new FormControl(null, Validators.required),
      idUsuario: new FormControl(null, Validators.required)
    });

    let date = new Date;
    this.tarefaForm.controls['dataCriacao'].setValue(date);
    this.tarefaForm.controls['idUsuario'].setValue(Number(this.userId));
  }

  postTarefa() {
    let form = this.tarefaForm.value;
    let model: Tarefa = {
      titulo: form.titulo,
      descricao: form.descricao,
      status: Number(form.status),
      dataCriacao: form.dataCriacao,
      idUsuario: form.idUsuario
    }
    this.tarefaService.postTarefa(model).subscribe({
      next: () => {
        this.tarefaForm.reset();
        this.router.navigateByUrl('tela-inicial');
      },
      error: error => {
        alert('Não foi possivel cadastrar a tarefa. Por favor recarregue a página');
      }
    });
  }

}
