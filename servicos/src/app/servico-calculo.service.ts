import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculoService {

  constructor() { }

  somaDoisNumeros(A: number, B: number): number {
    return A + B;
  }

  multiplicaDoisNumeros(A: number, B: number): number {
    return A * B;
  }

}
