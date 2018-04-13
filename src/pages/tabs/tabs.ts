import { Component } from '@angular/core';

import { HomePage } from '../home/home'; //Importando módulo da página home
import { FeedPage } from '../feed/feed'; //Importando módulo da página feed
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage; //
  tab4Root = FeedPage; //
  tab5Root = ConfiguracoesPage
  

  constructor() {

  }
}
