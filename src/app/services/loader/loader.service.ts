import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new Subject<boolean>();

  constructor(public loadingCtrl: LoadingController) {}

  async on() {
    await this.loadingCtrl
      .create({
        spinner: null,
        message: `<div class="spinner-container">
                <img id="logo" src="./../../../assets/imgs/logo.png" />
              </div>
              <span">Loading</span>`,
      })
      .then((a) => a.present());
    this.isLoading.next(true);
  }

  async off() {
    await this.loadingCtrl.dismiss();
    this.isLoading.next(false);
  }
}
