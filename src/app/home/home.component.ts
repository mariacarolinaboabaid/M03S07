import { Component, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UsuarioModelList } from '../shared/models/UsuarioModel';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  listaUsuarios: UsuarioModelList[] = []
  usuarioEspecifico: UsuarioModelList | undefined
  estadoBtnAtualizar: boolean = true
  estadoBtnDelete: boolean = true
  estadoNameField: boolean = false
  estadoEmailField: boolean = false
  estadoDataNascimentoField: boolean = false
  textoConfirmacaoExclusao = true

  @ViewChild('modalComponent', { static: true }) modalComponent: TemplateRef<any> | undefined;
  modalUploadRef: NgbModalRef | undefined;


  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.userService.listUsers()
      .subscribe((result) => {
        console.log(result)
        this.listaUsuarios = result;
      })
  }


  getUser(id: number) {
    this.modalUploadRef = this.modalService.open(this.modalComponent);
    this.userService.listSpecificUser(id)
      .subscribe((result) => {
        this.usuarioEspecifico = result
      })
  }

  updateUser(id: number) {
    this.getUser(id);
    this.estadoBtnAtualizar = false;
    this.estadoNameField = true;
  }

  deleteUser(id: number) {
    this.getUser(id);
    this.estadoBtnDelete = false;
    this.estadoNameField = true;
    this.estadoEmailField = true;
    this.estadoDataNascimentoField = true;
    this.textoConfirmacaoExclusao = false;
    this.estadoBtnAtualizar = true;
  }

  closeModal(atualizaTela: boolean) {
    this.modalUploadRef?.close();

    if (atualizaTela) {
      this.listUsers();
    }

  }


}
