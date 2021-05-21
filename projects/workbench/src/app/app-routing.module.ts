import { AppComponent } from './app.component';
// import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyComponent } from '@worktile/planet';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'workbench',
    component: AppComponent,
    // children: [
    //   { path: '', component: EmptyComponent },
    //   { path: '**', redirectTo: '', pathMatch: 'full' }
    // ]
  },
  { path: '**', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/workbench' },
  ]

})
export class AppRoutingModule { }
