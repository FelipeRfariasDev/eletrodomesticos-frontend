import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-adicionar-produtos.component',
  templateUrl: './adicionar-produtos.component.html'
})
export class AdicionarProdutosComponent {

  title='Adicionar Produto';

  form: any;

  produto = new Produto();

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private router: Router,
    ) {
    this.carregarFormulario(formBuilder);
  }

  post(){
    this.produto = this.form.value;
    this.produtosService.post(this.produto).subscribe((response: any) => {
      if(response.success==true){
        this.router.navigate(['/listar-produtos']);
      }
    }, error => {
      console.log(error);
    });
  }

  carregarFormulario(formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nome: [this.produto.nome, [Validators.required,Validators.minLength(20),Validators.maxLength(60)]],
      descricao: [this.produto.descricao, [Validators.required,Validators.minLength(98),Validators.maxLength(300)]],
      tensao: [this.produto.tensao, [Validators.required,Validators.minLength(4),Validators.maxLength(4)]],
      marca: [this.produto.marca, [Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    });
  }
}
