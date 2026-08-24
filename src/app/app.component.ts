import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
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
    // Ocultamos el import dinámico del analizador de Vite usando una función constructora
    const dynamicImport = (moduleName: string) => new Function('moduleName', 'return import(moduleName)')(moduleName);

    // 1. Registrar la aplicación
    registerApplication({
      name: "mfe1-rutinas",
      app: () => dynamicImport('mfe1-rutinas'),
      activeWhen: '/configuracion-rutinas'
    });


    // 2. Iniciar el motor de single-spa
    start();
  }
}
