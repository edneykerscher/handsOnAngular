import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  visualizaParametro: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    // const parametro = this.activatedRoute.snapshot.paramMap.get('parametro');
    // if (parametro) {
    //   this.visualizaParametro = parametro;
    // }
  }

  ngOnInit(): void {
  }

}
