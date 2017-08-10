import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MyNewServiceService } from './my-new-service.service';
import { AppComponent } from './app.component';
import { SkillCompComponent } from './skill-comp/skill-comp.component';
import { QuestionCompComponent } from './question-comp/question-comp.component';
import { ResultCompComponent } from './result-comp/result-comp.component';

const routes: Routes = [{
  path: 'skill',
  component: SkillCompComponent
},
{
  path: 'question',
  component: QuestionCompComponent
},
{
  path: 'result',
  component: ResultCompComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    SkillCompComponent,
    QuestionCompComponent,
    ResultCompComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
   
  ],
   providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
