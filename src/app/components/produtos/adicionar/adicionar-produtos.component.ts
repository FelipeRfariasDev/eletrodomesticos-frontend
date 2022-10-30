import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-produtos.component',
  templateUrl: './adicionar-produtos.component.html'
})
export class AdicionarProdutosComponent {

  title='Adicionar Produto';

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    tensao: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required)
  });
}
