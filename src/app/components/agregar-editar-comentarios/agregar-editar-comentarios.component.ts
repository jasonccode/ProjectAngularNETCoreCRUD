import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../interfaces/Comentario';

@Component({
  selector: 'app-agregar-editar-comentarios',
  templateUrl: './agregar-editar-comentarios.component.html',
  styleUrls: ['./agregar-editar-comentarios.component.css'],
})
export class AgregarEditarComentariosComponent {
  agregarComentario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }

  agregar() {
    console.log(this.agregarComentario);

    const comentario: Comentario = {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date(),
    };
    console.log(comentario);
  }
}
