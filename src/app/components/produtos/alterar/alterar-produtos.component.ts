import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-alterar-produtos.component',
  templateUrl: './alterar-produtos.component.html'
})
export class AlterarProdutosComponent implements OnInit {

  protected title='Alterar Produto';

  protected form: any;

  protected produtoSelecionado:Produto = new Produto();

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private mensagensService: MensagensService,
    private router: Router,
    ) {
    this.produtoSelecionado = produtosService.getProdutoSelecionado();
  }

  ngOnInit(): void {
    this.setAlimentarCamposFormulario(this.formBuilder);
  }

  put(){
    let produto:Produto = this.form.value;
    this.produtosService.put(produto).subscribe((response:any)=>{
      if(response.success==true){
        this.mensagensService.setMsgSuccess(response.message);
        this.router.navigateByUrl('/listar-produtos');
      }
    }, error => {
      this.mensagensService.setMsgErrors(error.error.message);
      this.router.navigate(['/listar-produtos']);
    });
  }

  setAlimentarCamposFormulario(formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      id: [this.produtoSelecionado.id, [Validators.required]],
      nome: [this.produtoSelecionado.nome, [Validators.required,Validators.minLength(50),Validators.maxLength(100)]],
      descricao: [this.produtoSelecionado.descricao, [Validators.required,Validators.minLength(80),Validators.maxLength(700)]],
      tensao: [this.produtoSelecionado.tensao, [Validators.required,Validators.minLength(4),Validators.maxLength(4)]],
      marca: [this.produtoSelecionado.marca, [Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    });
  }
}
