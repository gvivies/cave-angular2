import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BottleComponent } from './bottle/bottle.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BottlesComponent } from './bottles/bottles.component';
import { HttpModule }  from '@angular/http';
import { SessionService } from './shared/services/session.service';
import { RouterModule }   from '@angular/router';
import { routing } from './app.routes';
import { CrudService } from './shared/services/crud.service';
import { ToolsService } from './shared/services/tools.service';

@NgModule({
  declarations: [
    AppComponent,
    BottleComponent,
    WelcomeComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    BottlesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SessionService, RouterModule, CrudService, ToolsService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
