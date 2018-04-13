import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/movie/movie';
import { FilmedetalhesPage } from '../filmedetalhes/filmedetalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider //declaração do provedor
  ]
})

export class FeedPage {

  public objeto_feed = { //método para alterar os dados no feed
    titulo: "Bruno Almeida",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>(); //lista_filmes é um array de qualquer coisa
  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  public page = 1;
  public infinitScroll;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams , 
    private movieProvider : MoovieProvider,
    public loadingCtrl: LoadingController) {}

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }


  ionViewDidEnter() { //Quando a página carrega
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmedetalhesPage, {id: filme.id});
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infinitScroll = infiniteScroll;
    
    this.carregarFilmes(true);     
  }


  carregarFilmes(newpage: boolean = false){
    this.abreCarregando();

    this.movieProvider.getLatestMovies(this.page).subscribe( //Chama o getLatestMovies do movie.ts, subscrive mostrar o q foi retornado
      // => cria um função em uma mesma linha
      data=>{
        const response = (data as any); //Transforma a resposta em um obj de qualquer tipo
        const objeto_retorno = JSON.parse(response._body); //Transforma o objeto q seria um texto em JSON 
        

        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infinitScroll.complete();
        } else {
          this.lista_filmes = objeto_retorno.results; //a lista_filmes vai receber os retults do objeto_retorno
        }
        
        console.log(objeto_retorno);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, //se sair tudo certo, exibirá no console os dados 
      error=> {
        console.log(error); 
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      } //se acontecer um erro, exibirá um erro no console
    )
  }

}
