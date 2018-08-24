import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtsComponent } from './components/arts/arts.component';
import { VlogComponent } from './components/vlog/vlog.component';
import { InspirationsComponent } from './components/inspirations/inspirations.component';
import { HealthComponent } from './components/health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtsComponent,
    VlogComponent,
    InspirationsComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
