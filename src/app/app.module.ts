import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdicionarProdutosComponent } from './components/produtos/adicionar/adicionar-produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar/listar-produtos.component';
import { AlterarProdutosComponent } from './components/produtos/alterar/alterar-produtos.component';

import { ProdutosService } from './services/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListarProdutosComponent,
    AdicionarProdutosComponent,
    AlterarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
