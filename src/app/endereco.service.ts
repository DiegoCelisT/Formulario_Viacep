import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http_CEP: HttpClient) { }

  getEndereco (CEP) {
    return this.http_CEP.get ('https://viacep.com.br/ws/'+CEP+'/json/');
  }

}
