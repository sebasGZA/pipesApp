import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana'
  genero: string = 'femenino'
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona(): void {
    this.nombre = this.nombre == 'Susana' ? 'Sebatian' : 'Susana'
    this.genero = this.genero == 'masculino' ? 'femenino' : 'masculino'
  }

  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Juan']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  borrarCliente(): void {
    this.clientes.pop()
  }

  //KeyValuePipe

  persona = {
    nombre: 'Sebastian',
    edad: 26,
    direccion: 'Bello,Colombia'
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Async pipe
  miObservable = interval(1000) //0,1,2,3,4,5,6
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  })
}
