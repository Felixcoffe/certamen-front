import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ColeccionComponent } from './pages/coleccion/coleccion.component';
import { MazosComponent } from './pages/mazos/mazos.component';
import { MicoleccionComponent } from './pages/micoleccion/micoleccion.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
{   path:'',
    component:HomeComponent
},{
    path: 'coleccion',
    component:ColeccionComponent
},{
    path:'mazos',
    component:MazosComponent
},{
    path:'micoleccion',
    component:MicoleccionComponent
},{
    path:'coleccion/:id',
    component:DetalleComponent
}

];
