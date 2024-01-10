import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.Service';

@Component({
  selector: 'app-example-services',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  listas: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.loadListas();
  }

  loadListas(): void {
    this.listaService.getListas().subscribe((data: any[]) => {
      this.listas = data;
    });
  }

  getPageItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.listas.slice(startIndex, startIndex + this.itemsPerPage);
  }

}
