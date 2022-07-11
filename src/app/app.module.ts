import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaconsultaComponent } from './telaconsulta/telaconsulta.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{path: 'edicao/:id', component: },
  {path: 'consulta', component: TelaconsultaComponent},
  //{path: 'cadastro', component: },
  //{path: 'account', component: },
  //{path: 'email', component: },
  //{path: '', component: },
]
@NgModule({
  declarations: [
    AppComponent,
    TelaconsultaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
