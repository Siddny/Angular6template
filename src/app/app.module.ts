import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';

//material imports
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//Routing
import { AppRoutingModule }     from './app.routing';

//Services
import { LoginService } from './services/login/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
	HttpClientModule,
	MatButtonModule,
  ],
  providers: [
  	LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
