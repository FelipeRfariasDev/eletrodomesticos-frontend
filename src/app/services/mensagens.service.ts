import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MensagensService {

  private msgSuccess:string='';
  private msgErrors:string='';

  setMsgSuccess(mensagem:string){
    this.msgSuccess = mensagem;
    this.msgErrors='';
  }

  getMsgSuccess():string{
    return this.msgSuccess;
  }

  setMsgErrors(mensagem:string){
    this.msgErrors = mensagem;
    this.msgSuccess = '';
  }

  getMsgErrors(){
    return this.msgErrors;
  }
}
