import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]> ;
  //cursos: Curso[] = [];
  displayedColumns = ['name', 'categoria', 'actions'];

  //CursosService: CursosService;

  constructor(
    public dialog: MatDialog,
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    this.cursos$ = this.cursosService.lista()
    .pipe(
      catchError(error => {
        this.onError('Erro ao Carregar cursos');
        return of([])
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onExclui() {

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
