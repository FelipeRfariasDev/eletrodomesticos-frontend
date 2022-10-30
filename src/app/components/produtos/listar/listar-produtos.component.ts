import { Component,OnInit } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import {Produto} from "../../../model/produto";

@Component({
  selector: 'app-listar-produtos.component',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit {

  title='Listar Produtos';
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.produtosService.getAll().subscribe((response: any) => {
      this.produtos = (response.produtos);
    }, error => {
      console.log(error);
    });
  }

}
