import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';

@NgModule({
  imports: [ // import modules
    BrowserModule,
    FormsModule
  ],
  declarations: [ // import components & directive
    AppComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  bootstrap: [ AppComponent ] // start app
})
export class AppModule {}