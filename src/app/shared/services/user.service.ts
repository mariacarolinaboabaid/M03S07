import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModelList, UsuarioModelUpdate } from '../models/UsuarioModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  listUsers(){
    return this.httpClient.get<UsuarioModelList[]>(`${environment.dbUrl}/api/Ficha`)
  }

  listSpecificUser(id: number){
    return this.httpClient.get<UsuarioModelList>(`${environment.dbUrl}/api/Ficha/${id}`)
  }

  updateUser(id: number, data: UsuarioModelUpdate){
    return this.httpClient.put(`${environment.dbUrl}/api/Ficha/${id}`, data)
  }

  deleteUser(id: number){
    return this.httpClient.delete(`${environment.dbUrl}/api/Ficha/${id}`)
  }
}
