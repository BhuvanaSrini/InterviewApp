import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-comp',
  templateUrl: './question-comp.component.html',
  styleUrls: ['./question-comp.component.css']
})

export class QuestionCompComponent implements OnInit {
public currentQuestion;
public question:any;
public AnsYes:string;
public result :boolean;
public remarks :string;


constructor(private _myService: MyNewServiceService,private router:Router) { }
 onClick(): void {
debugger

  if (this.AnsYes=="true")
    this.result=true;
    if (this.AnsYes =="false")
    this.result=false;

   if (this.AnsYes!=null){
   if (this._myService.next(this.result,this.remarks)!=null)
    {
      this.AnsYes=null;
    this.question=this._myService.getQuestions()
    }
    else
  this.router.navigateByUrl('/result')
   }
  else{
    alert("Answer selection is required");
  }

}
  ngOnInit() {
    debugger
    this._myService.getAllQuestions();
      this.question=this._myService.getQuestions();
   //   this._myService.setQuestions(true,"test");
    //  this.question=this._myService.getQuestions();
    //  this.remarks=this.question.Remarks;
  }

}
