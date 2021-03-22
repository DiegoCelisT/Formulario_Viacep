import { Component } from '@angular/core';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  endereco: any = {};
  tem_endereco: boolean = false;

  constructor (private Service_End: EnderecoService){}

  onSubmit (formulario){
    if (formulario.form.status == 'INVALID')
    {
      alert ('O formulario deve ser preenchido corretamente! Dados incorretos!');
    }
    else{
      // console.log (formulario.form.value);

      //eliminar os trazos caso o usuario escreva os CEPs dessa maneira:
      // let zipcode = formulario.form.value.zipcode.replace ('-','');

      this.Service_End.getEndereco(formulario.form.value.zipcode)
        .subscribe(endereco => {
          this.endereco = endereco;
          this.tem_endereco = true;
          }, //se liga na virgula e que tudo está dentro do parentesis do subscribe
        () => alert  ('CEP incorreto, corrija por favor')// Os parentesis podem se substituir por uma variavel chamada por exemplo "ermac"
      )
    }
  }

  //segundo botão:
  limpar (){
    this.endereco = [];
    this.tem_endereco = false;
  }
}