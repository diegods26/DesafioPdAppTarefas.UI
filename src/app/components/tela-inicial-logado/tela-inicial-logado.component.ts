import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tela-inicial-logado',
  templateUrl: './tela-inicial-logado.component.html',
  styleUrls: ['./tela-inicial-logado.component.scss']
})
export class TelaInicialLogadoComponent implements OnInit {

  listaTarefas!: Tarefa[];
  status!: string;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.getListaTrefas();
  }

  getListaTrefas() {
    this.tarefaService.getListaTarefas().subscribe({
      next: response => {
        this.listaTarefas = response;
        this.transformStatus();
      }
    })
  }

  transformStatus(){
    debugger
    for(let item of this.listaTarefas){
      switch(item.status) {
        case 1:
          this.status = 'To do';
          break;
        case 2:
          this.status = 'In progess';
          break;
        case 3:
          this.status = 'Done';
          break;
        default:
          console.log('Status invalido!');
      }
    }
  }

}
