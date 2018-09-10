import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes, CanDeactivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { NgxsModule } from "@ngxs/store";
import { ListState } from "./list.state";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ListComponent> {
  canDeactivate(
    component: ListComponent
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.toSave();
  }
}

const routes: Routes = [
  {
    path: "",
    component: ListComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxsFormPluginModule,
    NgxsModule.forFeature([ListState])
  ],
  declarations: [ListComponent],
  providers:[CanDeactivateGuard]
})
export class ListModule {}
