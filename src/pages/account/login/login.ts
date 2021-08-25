import { Component } from '@angular/core'
import { NavController, Platform, AlertController } from 'ionic-angular'
import { Service } from '../../../providers/service/service'
import { Functions } from '../../../providers/service/functions'
import { Values } from '../../../providers/service/values'
import { AccountForgotten } from '../forgotten/forgotten'
import { OneSignal } from '@ionic-native/onesignal'

import { TabsPage } from '../../tabs/tabs'

@Component({
  templateUrl: 'login.html',
})
export class AccountLogin {
  loginData: any
  loadLogin: any
  status: any
  error: any
  nonce: any
  nonceResendKey: any
  public disableSubmit: boolean = false
  buttonText: any
  countries: any
  isActiveToggleTextPassword: Boolean = true

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    public nav: NavController,
    public service: Service,
    public functions: Functions,
    public values: Values,
    public platform: Platform,
    private oneSignal: OneSignal,
    public alert: AlertController,
  ) {
    this.loginData = {}
    this.buttonText = 'Login'
    this.service.getNonce().then(results => (this.nonce = results))
    this.countries = {}

  }

  gohome(){
    this.nav.parent.select(0);
  }

  login() {
    if (this.validateForm()) {
      this.disableSubmit = true
      this.buttonText = 'Logging In...'
      this.service
        .login(this.loginData)
        .then(results => this.handleResults(results))
    }
  }
  validateForm() {    
    if (this.loginData.username == undefined || this.loginData.username == '') {
      return false
    }
    if (this.loginData.password == undefined || this.loginData.password == '') {
      return false
    }else {
      return true
    }
  }

  
  



  handleResults(results) {
    this.disableSubmit = false
    this.buttonText = 'Login'
    if (!results.errors) {
      if (this.platform.is('cordova'))
        this.oneSignal.getIds().then((data: any) => {
          this.service.subscribeNotification(data)
        })
      this.nav.setRoot(TabsPage)
    }
    else if (results.errors) {
      if(results.errors.invalid_email)
        this.functions.showAlert('Correo', results.errors.invalid_email)
      else if(results.errors.invalid_username)
        this.functions.showAlert('Usuario', results.errors.invalid_username)
      else if(results.errors.incorrect_password)
        this.showAlertForgotPass('Contraseña', '<strong>ERROR</strong>: La contraseña que ingresó para la dirección de correo electrónico  <strong>'+this.loginData.username+'</strong> es incorrecta.')
      else if(results.errors.az_confirmation_error)
      this.showAlertResendKey('Correo de confirmación', '<strong>ERROR:</strong> Verifique su cuenta antes de iniciar sesión.')
      else
        this.functions.showAlert('error', 'usuario/contraseña inválido')
    }
  }
  forgotten() {
    this.nav.push(AccountForgotten)
  }
  showAlertForgotPass(title, text) {
    let alert = this.alert.create({
        title: title,
        subTitle: text,
        buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
            },
            {
              text: '¿Perdiste tu contraseña?',
              handler: data => {
                 this.forgotten();
              }
            }
          ],
    });
    alert.present();
  }
  showAlertResendKey(title, text) {
    let alert = this.alert.create({
        title: title,
        subTitle: text,
        buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
            },
            {
              text: 'Se ha reenviado link de verificación?',
              handler: data => {
                this.service.getNonceResendKey(this.loginData.username).then((results) => this.handleResultsNonce(results));

              }
            }]
    });
    alert.present();
  }
  handleResultsNonce(results) {
    this.countries = results;
    this.service.resendKey(this.loginData.username, this.countries.resend_key_nonce);
  }

  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}

hideShowPassword() {
  this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

}
