import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CreditCardValidators, CreditCard } from 'angular-cc-library';
import { defer } from 'rxjs/observable/defer';
import { map } from 'rxjs/operators';
import { Values } from '../../providers/service/values';
import { VirtualCardAdminPage } from '../virtual-card-admin/virtual-card-admin';

/**
 * Generated class for the NewCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-new-card',
  templateUrl: 'new-card.html',
})
export class NewCardPage implements OnInit {
    public demoForm: FormGroup;
    public submitted = false;
    cards
    card: any = [];

    public type$ = defer(() => this.demoForm.get('creditCard').valueChanges)
      .pipe(map((num: string) => CreditCard.cardType(num)));

    constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public values:Values, public alertController: AlertController) {}

    public ngOnInit() {
      this.demoForm = this.fb.group({
        creditCard: ['', [CreditCardValidators.validateCCNumber]],
        expDate: ['', [CreditCardValidators.validateExpDate]],
        cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      });
    }

    public goToNextField(controlName: string, nextField: HTMLInputElement) {
      if (this.demoForm.get(controlName).valid) {
        nextField.focus();
      }
    }

    async onSubmit(demoForm: FormGroup) {
      this.submitted = true;

      let convertStringToArray = demoForm.value.creditCard.split(" ");
      let latestNumberCreditCard = convertStringToArray[convertStringToArray.length -1];
      let EditCreditCard = `**** ${latestNumberCreditCard}`

      let data = JSON.parse(localStorage.getItem("cardData"));
 
      if(data != null && data.length > 0){

        let cardExist = await data.filter(res => res.creditCard === demoForm.value.creditCard )
        if(cardExist.length == 0){
          data.push({creditCard:demoForm.value.creditCard, expDate:demoForm.value.expDate, cvc: demoForm.value.cvc, creditCardMask:EditCreditCard, default:0})
          localStorage.setItem('cardData',JSON.stringify(data));
          this.presentAlert("Agregado correctamente");
          this.navCtrl.setRoot(VirtualCardAdminPage);
        }else{
          this.presentAlert("Ya has agregado esta tarjeta de crédito")
        }
      }else{
        this.card.push({creditCard:demoForm.value.creditCard, expDate:demoForm.value.expDate, cvc: demoForm.value.cvc, creditCardMask:EditCreditCard, default:1})
        localStorage.setItem('cardData',JSON.stringify(this.card));
        this.presentAlert("Agregado correctamente");
        this.navCtrl.setRoot(VirtualCardAdminPage);
      }
    }

    async presentAlert(message) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: message,
        buttons: ['OK']
      });

      await alert.present();
    }


}
