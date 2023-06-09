import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { Description, Producto, ResponseProducto } from './Interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod')
  }
  getAllPromise():Promise<ResponseProducto>{
    return lastValueFrom(this.http.get<ResponseProducto>('https://api.mercadolibre.com/sites/MLA/search?q=ipod'))
  }
  getAllPipe(){
    return lastValueFrom(this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod').pipe(map((value:any)=>value.results)))
  }
  create(payload:any){
    return this.http.post('https://api.mercadolibre.com/sites/MLA/search?q=ipod',payload)
  }
  update(payload:any){
    return this.http.put('https://api.mercadolibre.com/sites/MLA/search?q=ipod',payload)
  }
  delete(){
    return this.http.delete('https://api.mercadolibre.com/sites/MLA/search?q=ipod')
  }

  getById(id:string):Promise<Producto>{
    return lastValueFrom(this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}`))
  }
  getDescriptionById(id:string):Promise<Description>{
    return lastValueFrom(this.http.get<Description>(`https://api.mercadolibre.com/items/${id}/description`))
  }
}
