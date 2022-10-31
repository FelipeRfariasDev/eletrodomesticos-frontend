import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-adicionar-produtos.component',
  templateUrl: './adicionar-produtos.component.html'
})
export class AdicionarProdutosComponent implements OnInit {

  title='Adicionar Produto';

  form: any;

  produto = new Produto();

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private mensagensService: MensagensService,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.carregarFormulario(this.formBuilder);
  }

  post(){
    this.produto = this.form.value;
    this.produtosService.post(this.produto).subscribe((response: any) => {
      if(response.success==true){
        this.mensagensService.setMsgSuccess(response.message);
        this.router.navigate(['/listar-produtos']);
      }
    }, error => {
      this.mensagensService.setMsgErrors(error.error.message);
      this.router.navigate(['/listar-produtos']);
    });
  }

  carregarFormulario(formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nome: [this.produto.nome, [Validators.required,Validators.minLength(50),Validators.maxLength(100)]],
      descricao: [this.produto.descricao, [Validators.required,Validators.minLength(80),Validators.maxLength(700)]],
      tensao: [this.produto.tensao, [Validators.required,Validators.minLength(4),Validators.maxLength(4)]],
      marca: [this.produto.marca, [Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    });
  }
}
