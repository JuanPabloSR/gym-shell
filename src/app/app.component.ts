import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerApplication, start } from "single-spa";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gym-shell';

  ngOnInit(): void {
    // 1. Registrar la aplicación
    registerApplication({
      name: "mf1-rutinas",
      app: () => (window as any).System.import('mfe1-rutinas'), // Descarga el código desde el import map      
      activeWhen: '/configuracion-rutinas'

    });
    // 2. Iniciar el motor de single-spa
    start();
  }
}
