import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

import './polyfills';
import { AquilaModule } from './app/aquila-module';
import { AccordionStandaloneExampleComponent } from './app/accordion-standalone-example';

@NgModule({
  bootstrap: [AccordionStandaloneExampleComponent],
  declarations: [AccordionStandaloneExampleComponent],
  entryComponents: [AccordionStandaloneExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AquilaModule,
  ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright APOSIN 2021 */