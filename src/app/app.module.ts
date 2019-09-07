import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {reducer,selectNodeReducer} from './root.reducer';
import {FormsModule} from "@angular/forms";
import { NodedetailComponent } from './nodedetail/nodedetail.component';
import { FilterPipe } from './filter.pipe';
import {ShowandhideService} from './showandhide.service';
@NgModule({
  declarations: [
    AppComponent,
    NodedetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({nodes:reducer, selectedNode:selectNodeReducer})
  ],
  providers: [ShowandhideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
