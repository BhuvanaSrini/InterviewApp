import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';

@Component({
  selector: 'app-result-comp',
  templateUrl: './result-comp.component.html',
  styleUrls: ['./result-comp.component.css']
})
export class ResultCompComponent implements OnInit {
public result:any;
public resultDetail;
public showLabel:string;
public showResultDetail:boolean=true;
public finalResult;

 constructor(private _myService: MyNewServiceService) { }


  onClick(item): void {
    debugger
    this._myService.removeShowDetail(item.id);
   if (item.showDetail==false){
   item.showDetail=true;
    item.Label="Show Detail";
  }
  else{
   
       item.showDetail=false;
     item.Label="Hide Detail";
     this.resultDetail=this._myService.getResultDetail(item.id);
  }
  }
  ngOnInit() {
  debugger
    this.showLabel="Show Detail";
    this.result=this._myService.getResult();
    this.finalResult=this._myService.finalResult;
  }

}
