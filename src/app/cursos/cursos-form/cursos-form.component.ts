import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit() {
    this.service.save(this.formulario.value)
    .subscribe(result => console.log(result),
    error=> this.onError());
  }

  onCancel() {

  }
  private onError() {
    this.snackBar.open('Erro ao salvar Curso.', '', {duration: 3000});
  }

  ngOnInit(): void {
  }

}
