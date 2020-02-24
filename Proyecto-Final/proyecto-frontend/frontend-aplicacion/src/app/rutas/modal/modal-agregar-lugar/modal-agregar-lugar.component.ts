import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregar-lugar',
  templateUrl: './modal-agregar-lugar.component.html',
  styleUrls: ['./modal-agregar-lugar.component.css']
})
export class ModalAgregarLugarComponent implements OnInit {
identificador = '';
nombreLugar = '';
color = 'Rojo';

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarLugarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }
  aceptar() {
    this.dialogRef.close({
      identificador: this.identificador,
      nombreLugar: this.nombreLugar,
      color: this.color
    });
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }

}
