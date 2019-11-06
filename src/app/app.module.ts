import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusCardComponent } from './bus-card/bus-card.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BusCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
  VgControlsModule,
  VgOverlayPlayModule,
  VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
