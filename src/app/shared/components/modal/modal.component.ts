import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModelList } from '../../models/UsuarioModel';
import { DatePipe } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  @Output() closeModalComponent: EventEmitter<any> = new EventEmitter();
  @Input() dadosUsuario: UsuarioModelList | undefined
  @Input() estadoBtnAtualizar: boolean = true
  @Input() estadoBtnDelete: boolean = true
  @Input() estadoNameField: boolean = false
  @Input() estadoEmailField: boolean = false
  @Input() estadoDataNascimentoField: boolean = false
  @Input() textoConfirmacaoExclusao: boolean = true


  formulario: FormGroup

  constructor(private modal: NgbActiveModal, private datePipe: DatePipe, private userService: UserService) {

    this.formulario = new FormGroup(
      {
        'nome': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'dataNascimento': new FormControl('', Validators.required)
      }
    )
  }

  // Passando os valores do Usuário para o formulário
  ngOnInit(): void {
    // Formatação da data
    if (this.dadosUsuario !== null && this.dadosUsuario !== undefined) {
      this.dadosUsuario.dataNascimento = this.datePipe.transform(this.dadosUsuario.dataNascimento, 'yyyy-MM-dd')
        ?? ''
    }
    this.formulario.patchValue({
      'nome': this.dadosUsuario?.nome,
      'email': this.dadosUsuario?.email,
      'dataNascimento': this.dadosUsuario?.dataNascimento
    })
  }

  fecharModal(atualizaTela: boolean = false) {
    this.closeModalComponent?.emit(atualizaTela);
  }

  atualizar() {
    const updateData =
    {
      "email": this.formulario.get("email")?.value,
      "dataNascimento": this.formulario.get("dataNascimento")?.value
    }

    const id = this.dadosUsuario?.id;

    if (id !== undefined) {
      this.userService.updateUser(id, updateData)
        .subscribe((result) => {
          console.log(result)
          alert("Usuário atualizado com sucesso!")
          this.fecharModal(true);
        })
    }
  }

  deletar(){
    const id = this.dadosUsuario?.id;

    if (id !== undefined) {
      this.userService.deleteUser(id)
        .subscribe((result) => {
          console.log(result)
          alert("Usuário deletado com sucesso!")
          this.fecharModal(true);
        })
    }
  }
}
