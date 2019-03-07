import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { stringify } from '@angular/core/src/util';
import { element } from 'protractor';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = 'Alert';
  constructor(public _alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this._alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
          {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
            text: 'ok',
            handler: (blah) => {
              console.log('Boton Ok');
            }
          }
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this._alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.nombre;
          }
        }
      ]
    });

    await alert.present();
  }

}
