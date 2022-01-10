import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localEsCo from '@angular/common/locales/es-CO'
import localEsFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localEsCo)
registerLocaleData(localEsFr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CO' //NUMEROS MONEDA, LENGUAJE AL PAIS DE IMPORTACION
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
