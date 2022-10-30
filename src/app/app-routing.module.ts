import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdicionarProdutosComponent } from './components/produtos/adicionar/adicionar-produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar/listar-produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'listar-produtos', component: ListarProdutosComponent },
  { path: 'adicionar-produtos', component: AdicionarProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
