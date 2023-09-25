import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-comentarios',
  templateUrl: './agregar-editar-comentarios.component.html',
  styleUrls: ['./agregar-editar-comentarios.component.css'],
})
export class AgregarEditarComentariosComponent {
  agregarComentario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _ComentarioService: ComentarioService,
    private router: Router
  ) {
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }

  agregar() {
    const comentario: Comentario = {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date(),
    };
    this._ComentarioService.saveComentario(comentario).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
