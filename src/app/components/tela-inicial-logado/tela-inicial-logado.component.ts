import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { User, UserData } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tela-inicial-logado',
  templateUrl: './tela-inicial-logado.component.html',
  styleUrls: ['./tela-inicial-logado.component.scss']
})
export class TelaInicialLogadoComponent implements OnInit {

  listaTarefas!: Tarefa[];
  listaTarefasCompleta = new Array<any>();

  status!: any;
  userData!: UserData;
  userId!: any;
  userSession!: User;
  filter!: string;
  selectedValue: string = '';

  statusForm = new FormControl<Tarefa | null>(null);

  constructor(private tarefaService: TarefaService,
              private account: AccountService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    let session = localStorage.getItem('user');
    this.userSession = JSON.parse(session!);
    this.getListaTrefas();
    this.getUsuario();
  }



  getListaTrefas() {
    this.account.getUserByName(this.userSession.userName).subscribe({
      next: response => {
        this.userId = response.id;

        this.tarefaService.getListaTarefasByUserId(this.userId).subscribe({
          next: response => {
            this.listaTarefas = response;
            this.transformStatus();
          }
        })
      }
    })
  }

  deleteTarefa(id?: number) {
    this.tarefaService.removeTarefa(id!).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error: error => {
        alert("Não foi possível excluir a tarefa! Por favor, recarregue a pagina e tente novamente.")
      }
    })
  }

  getUsuario() {
    let session = localStorage.getItem('user');
    let user = JSON.parse(session!);
    this.account.getUserByName(user.userName).subscribe({
      next: response => {
        this.userData = response;
      }
    })
  }

  transformStatus(){
    for(let item of this.listaTarefas){
      if(item.status === 1){
        this.status ='To do';
      }else if (item.status === 2){
        this.status = 'In progress';
      }else {
        this.status = 'Done';
      }

      let lista: Tarefa = {
        id: item.id,
        titulo: item.titulo,
        descricao: item.descricao,
        status: this.status,
        dataCriacao: item.dataCriacao,
        dataAtualizacao: item.dataAtualizacao,
        idUsuario: item.idUsuario
      }

      this.listaTarefasCompleta.push(lista);
    }
  }

  searchTask(event: any) {
    debugger
    this.transformStatus();
      let filteredValue = this.listaTarefasCompleta.filter(item =>
        this.listaTarefasCompleta == null ? this.listaTarefasCompleta : item.status === event);

        this.listaTarefasCompleta = filteredValue;
  }

  cleanFilter(){
    window.location.reload();
  }

}
