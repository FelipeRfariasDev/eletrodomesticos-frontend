import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/produto';

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {

  private baseUrl : string = environment.baseUrl;
  private produtoSelecionado:Produto = new Produto();

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(this.baseUrl+'produtos');
  }

  post(produto:Produto){
    return this.http.post(this.baseUrl+'produtos',produto);
  }

  put(produto:Produto){
    return this.http.put(this.baseUrl+'produtos/'+produto.id,produto);
  }

  delete(id:any){
    return this.http.delete(this.baseUrl+'produtos/'+id);
  }

  setProdutoSelecionado(produto:Produto){
    this.produtoSelecionado = produto;
  }

  getProdutoSelecionado():Produto{
      return this.produtoSelecionado;
  }
}
