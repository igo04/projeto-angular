import { Component, Input } from "@angular/core";


//Decorator é o cara  que determina a função
@Component({
    selector: 'app-adv',
    templateUrl: './adv.component.html',
    styleUrls: ['./adv.component.css']
})
export class AdvComponent{

    /**
     * Inbound Property

        O inbound property permiti que uma varivel receba um valor externo
        Permite que um compnente receba infromações de outros componentes
         @Input() é p inbound property
     */

    //A função desse componete é criar responsividade nas imagens
     @Input() imagen = "";
}