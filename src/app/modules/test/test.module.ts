import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test.component";

export const testRoutes: Routes = [
    {
      path:      'prueba',
      component: TestComponent
    },
    
  ];

@NgModule({
    declarations: [TestComponent],
    imports: [RouterModule.forChild(testRoutes)],
    exports: [TestComponent]
}) export class TestModule {}