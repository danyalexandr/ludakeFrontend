import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL} from '@angular/fire/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
//import { environment } from 'src/environments/environment';

//firebase.initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url:string = "";

  storageRef = firebase.app().storage().ref();

  constructor(private storage:Storage) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  async subirImagen(nombre:string, imgBase64:any){

    try {
      let respuesta = await this.storageRef.child("images/" + nombre)
      .putString(imgBase64, "data_url");
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getImages(){
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
    .then(async response => {
    for (let item of response.items) {
    this.url = await getDownloadURL(item);
    //console.log("ESTAS LEYENDO ESTO" + " " + this.url);
    }
    })
    .catch(error => console.log(error));
  }
}