import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = ['name', 'categoria', 'acoes'];

  //CursosService: CursosService;

  constructor(
    public dialog: MatDialog,
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    //this.cursos();
    //this.CursosService = new CursosService();
    this.cursos$ = this.cursosService.lista()
    .pipe(
      catchError(error => {
        this.onError('Erro ao Carregar cursos');
        return of([])
      })
    );
    //this.cursosService.lista().subscribe(cursos => this.cursos = cursos);
  }

  exclui(){

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
