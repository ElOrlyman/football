import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loading: boolean;

  constructor(public loadingCtrl: LoadingController) {}

  async on() {
    this.loading = true;
    return await this.loadingCtrl
      .create({
        spinner: null,
        message: `<div class="spinner-container">
                  <img id="logo" src="./../../../assets/imgs/logo.png" />
                </div>
                <span">Loading</span>`,
      })
      .then((a) => {
        a.present().then(() => {
          // console.log("presented");
          if (!this.loading) {
            a.dismiss(); //.then(() => console.log("abort presenting"));
          }
        });
      });
  }

  async off() {
    this.loading = false;
    return await this.loadingCtrl.dismiss(); //.then(() => console.log("dismissed"));
  }
}
