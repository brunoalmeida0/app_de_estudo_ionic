import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http"; //Importando o módulo HTTP
import { FeedPageModule } from '../pages/feed/feed.module'; //Importando o módulo do feed 
import { IntroPageModule } from '../pages/intro/intro.module'; //Importando o módulo da página de introdução
import { MoovieProvider } from '../providers/movie/movie'; //Importando o Provedor para requisição da API
import { ConfigProvider } from '../providers/config/config';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmedetalhesPageModule } from '../pages/filmedetalhes/filmedetalhes.module';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule, //Importando o módulo do feed 
    IntroPageModule, //Importando o módulo da página de introdução
    HttpModule, //Importando o módulo HTTP
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmedetalhesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider, //importando o provider moovie
    ConfigProvider, //importando o provider config
    Camera
  ]
})
export class AppModule {}
