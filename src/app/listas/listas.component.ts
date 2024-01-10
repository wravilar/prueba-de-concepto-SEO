import { Component } from '@angular/core';
import { ListasServicio } from './listas.servicio'; // Asegúrate de importar tu servicio
import { CommonModule } from '@angular/common';




@Component({
  selector: 'listas-app',
  templateUrl: './listas.component.html',
  standalone: true,
  imports:[TuComponente, CommonModule],
  styleUrls: ['./listas.component.css']
})
export class TuComponente {
  data: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  listasServicio: any;

  constructor(private tuServicio: ListasServicio) {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.listasServicio.obtenerDatosDeAPI().subscribe(
      (data: any[]) => {
        this.data = data.map(item => ({
          title: item.title.rendered,
          description: item.meta['subtitulo-lista']
        }));
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  get paginatedData(): any[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }
}
