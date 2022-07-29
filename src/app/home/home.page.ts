import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado"

  public alcool:number;

  public gasolina:number;

  calcular(){

    if ( this.alcool && this.gasolina){
          var pAlcool = this.alcool
          var pGasolina = this.gasolina
          var res = pAlcool / pGasolina

          if (res >= 0.7){
            this.resultado = "Melhor ultilizar Gasolina"
          }else{
            this.resultado = "Melhor ultilizar Álcool"
          }


    }else{
      this.resultado = "Preencha corretamente o campo"
    }
  }

}
