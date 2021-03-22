import { Component } from '@angular/core';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  endereco: any = {};
  tem_endereco: boolean = false;  //new

  constructor (private Service_End: EnderecoService){}

  onSubmit (formulario){
    if (formulario.form.status == 'INVALID')
    {
      alert ('O formulario deve ser preenchido corretamente! Dados incorretos!');
    }
    else{
      // console.log (formulario.form.value);

      this.Service_End.getEndereco(formulario.form.value.zipcode).subscribe(endereco => this.endereco = endereco);

      this.tem_endereco = true; //new
    }
  }

  //segundo botão (new):
  limpar (){
    this.endereco = [];
    this.tem_endereco = false;
  }
}