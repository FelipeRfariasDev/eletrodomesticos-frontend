import { Component,OnInit } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { Produto } from '../../../model/produto';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-listar-produtos.component',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit {

  protected title='Listar Produtos';

  protected produtos: Produto[] = [];

  protected msgSuccess:string='';
  protected msgErrors:string='';

  protected exibirConfirmacaoExcluir:boolean = false;

  constructor(
    private produtosService: ProdutosService,
    private mensagensService: MensagensService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.getAll();
    this.msgSuccess = this.mensagensService.getMsgSuccess();
    this.msgErrors = this.mensagensService.getMsgErrors();
  }

  getAll(){
    this.produtosService.getAll().subscribe((response: any) => {
      this.produtos = (response.produtos);
    }, error => {
      this.msgErrors = (error.error.message);
    });
  }

  alterar(produto:Produto){
    this.produtosService.setProdutoSelecionado(produto);
    this.router.navigate(['/alterar-produtos']);
  }

  excluir(){
    let produtoSelecionado = this.produtosService.getProdutoSelecionado();
    this.produtosService.delete(produtoSelecionado.id).subscribe((response: any) => {
      if(response.success==true){
        this.msgSuccess = response.message;
        this.exibirConfirmacaoExcluir = false;
        this.getAll();
      }
    }, error => {
      this.msgErrors = (error.error.message);
    });
  }

  confirmacaoExcluir(produto:any){
    this.produtosService.setProdutoSelecionado(produto);
    this.exibirConfirmacaoExcluir = true;
  }

}
