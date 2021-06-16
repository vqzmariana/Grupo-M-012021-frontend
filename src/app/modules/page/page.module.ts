import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../ui/material.module";
import { UiModule } from "../ui/ui.module";
import { PageComponent } from "./page.component";

export const pageRoutes: Routes = [
    {
      path:      '',
      component: PageComponent
    },
    
  ];

@NgModule({
    declarations: [PageComponent],
    imports: [RouterModule.forChild(pageRoutes), HttpClientModule, UiModule, MaterialModule],
    exports: [PageComponent]
}) export class PageModule {}