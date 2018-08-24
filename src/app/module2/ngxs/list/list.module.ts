import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { ListState } from "./list.state";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";

export const routes: Routes = [
  {
    path: "",
    component: ListComponent
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
  declarations: [ListComponent]
})
export class ListModule {}
