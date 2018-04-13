import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

let name_key = "config";

@Injectable()

export class ConfigProvider {

  

  // private config = {
  //   showSlide: false,
  //   name: "",
  //   username: ""
  // }

  constructor() {
    
  }

  //recupera dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(name_key);
  }

  //seta os dados no localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }
    //localstorage seta o objeto config na forma json
    localStorage.setItem(name_key, JSON.stringify(config)); 
  }

}