import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {

  tarefaForm!: FormGroup;
  params$!: Subscription;
  tarefaId!: any;
  tarefa!: Tarefa;

  constructor(private route: ActivatedRoute,
              private tarefaService: TarefaService,
              private router: Router) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.params$ = this.route.paramMap.subscribe({
      next: response => {
        this.tarefaId = response.get('id');
        this.getTarefaById();
      }
    })
  }

  getTarefaById() {
    this.tarefaService.getTarefaById(Number(this.tarefaId)).subscribe({
      next: response => {
        this.tarefa = response;
        this.inicializaForm();
      }
    })
  }

  inicializaForm() {
    debugger
    this.tarefaForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      titulo: new FormControl(null, Validators.required),
      descricao: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      dataCriacao: new FormControl(null, Validators.required),
      dataAtualizacao: new FormControl(null, Validators.required),
      idUsuario: new FormControl(null, Validators.required)
    });
    if (this.tarefa !== undefined){
      this.tarefaForm.controls['id'].setValue(this.tarefaId);
      this.tarefaForm.controls['titulo'].setValue(this.tarefa.titulo);
      this.tarefaForm.controls['descricao'].setValue(this.tarefa.descricao);
      this.tarefaForm.controls['status'].setValue(this.tarefa.status);
      this.tarefaForm.controls['dataCriacao'].setValue(this.tarefa.dataCriacao);
      this.tarefa.dataAtualizacao === null
      ? this.tarefaForm.controls['dataAtualizacao'].setValue('--/--/----')
      : this.tarefaForm.controls['dataAtualizacao'].setValue(this.tarefa.dataAtualizacao);
      this.tarefaForm.controls['idUsuario'].setValue(Number(this.tarefa.idUsuario));
    }
  }

  updateTarefa() {
    //let date = new Date;
    let form = this.tarefaForm.value;
    let model: Tarefa = {
      id: form.id,
      titulo: form.titulo,
      descricao: form.descricao,
      status: Number(form.status),
      dataAtualizacao: new Date,
      idUsuario: form.idUsuario
    }
    this.tarefaService.updateTarefa(model).subscribe({
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
