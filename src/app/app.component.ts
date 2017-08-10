import { Component,OnInit,Input,Output ,EventEmitter } from '@angular/core';
import { MyNewServiceService } from './my-new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _myService: MyNewServiceService) { }

  public TotalExperience:any[];
  public RelevantExperience:any[];
  public selectedTotalExp;
  public selectedRelevantExp;
  public Roles:any[];
  public selectedRoles;
  public profile:any;
  public btnName;
  public TodayDate:Date;
 onChange(newValue) {
  debugger
  this.profile=this._myService.getProfile();
  this.profile.name='ll';
   if(this.selectedRoles!=undefined)
  this.profile.Role=this.selectedRoles.id;
  if(this.selectedTotalExp!=undefined)
  this.profile.TotalExperience=this.selectedTotalExp.id;
  if(this.selectedRelevantExp!=undefined)
  this.profile.RelevantExp=this.selectedRelevantExp.id;
  this._myService.setProfile(this.profile);
   }

  ngOnInit() {
    debugger
      this.TodayDate= new Date();
     this.TotalExperience=this._myService.getYears();
     this.RelevantExperience=this._myService.getYears();
     this.Roles=this._myService.getRoles();
     this.btnName="Submit";
     this.profile=this._myService.getProfile();
     
     

     
  }
}
