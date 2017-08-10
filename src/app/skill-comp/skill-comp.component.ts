import { Component,  OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-comp',
  templateUrl: './skill-comp.component.html',
  styleUrls: ['./skill-comp.component.css']
})
export class SkillCompComponent implements OnInit {
 
constructor(private _myService: MyNewServiceService,private router:Router) { }
public Severity:any[];
public Subject:any[];
public QuestionCount:any[];

 onChange(newValue) {
  debugger
  var dd=newValue;
   }

 onClick(): void {
   debugger
   var sub=this.Subject.filter(x => x.count.name!==0);
   if (sub.length>0)
    {
  this._myService.setSubject(this.Subject);
  this.router.navigateByUrl('/question')
    }
    else
      alert("Question count is required");
}
ngOnInit() {
     this.Subject=this._myService.Subject;
     this.QuestionCount=this._myService.QuestionCount;
     this.Severity=this._myService.Severity;
  }

}
