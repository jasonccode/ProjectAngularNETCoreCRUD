import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-comentarios',
  templateUrl: './agregar-editar-comentarios.component.html',
  styleUrls: ['./agregar-editar-comentarios.component.css'],
})
export class AgregarEditarComentariosComponent implements OnInit {
  agregarComentario: FormGroup;
  accion = 'Agregar';
  id = 0;
  comentario: Comentario | undefined;

  constructor(
    private fb: FormBuilder,
    private _ComentarioService: ComentarioService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if (this.id !== 0) {
      this.accion = 'Editar';
      this._ComentarioService.getComentario(this.id).subscribe(
        (data) => {
          this.comentario = data;
          this.agregarComentario.patchValue({
            titulo: data.titulo,
            texto: data.texto,
            creador: data.creador,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  agregarEditarComentario() {
    if (this.comentario == undefined) {
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
    } else {
      const comentario: Comentario = {
        id: this.comentario.id,
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: this.comentario.fechaCreacion,
      };

      this._ComentarioService.updateComentario(this.id, comentario).subscribe(
        (data) => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
