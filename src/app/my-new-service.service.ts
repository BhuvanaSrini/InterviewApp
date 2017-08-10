import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class MyNewServiceService {

constructor() { }
public Profile=[{Name:'Bhuvaneswari',Role:'1',TotalExperience:'1',RelevantExp:'1',CandID:'cad'}];
public counter=0;
public finalResult='Pass';
 public Subject=[
      {id:'1',name:'Angular2',severity:1,selected:false,count:{id:1,name:0}},
      {id:'2',name:'Angular 1.3',severity:1,selected:false,count:{id:1,name:0}},
      {id:'3',name:'MVC,ASP.Net',severity:1,selected:false,count:{id:1,name:0}},
      {id:'4',name:'HTML/CSS',severity:1,selected:false,count:{id:1,name:0}},
      {id:'5',name:'SQL Server/Mysql',severity:1,selected:false,count:{id:1,name:0}},
      {id:'6',name:'MongoDB',severity:1,selected:false,count:{id:1,name:0}},
      {id:'7',name:'PHP',severity:1,selected:false,count:{id:1,name:0}},
      {id:'8',name:'Knockout',severity:1,selected:false,count:{id:1,name:0}},
      {id:'9',name:'Entity Framework',severity:1,selected:false,count:{id:1,name:0}},
      {id:'10',name:'Linq',severity:1,selected:false,count:{id:1,name:0}}
    ];
      public   Years = [
      {id:'1',name:'1'},
      {id:'2',name:'2'},
      {id:'3',name:'3'},
      {id:'4',name:'4'},
      {id:'5',name:'5'},
      {id:'6',name:'6'},
      {id:'7',name:'7'},
      {id:'8',name:'8'},
      {id:'9',name:'9'},
      {id:'10',name:'10'}
    ];

  public Result=[{id:"1",subject:"Angular",score:70,showDetail:true,Label:"Show Detail"},{id:"4",subject:"HTML",score:20,showDetail:true,Label:"Show Detail"},{id:"3",subject:"MVC",score:50,showDetail:true,Label:"Show Detail"},{id:"4",subject:"Knockout",score:70,showDetail:true,Label:"Show Detail"}];
  public Role=[{id:'1',name:'Ui Developer'},{id:'2',name:'Developer'},{id:'1',name:'Technical Leader'}];
  Severity=[
      {id:'1',name:'Low'},
      {id:'2',name:'Medium'},
       {id:'3',name:'High'}
     ];
  QuestionCount=[
      {id:'1',name:1},
      {id:'2',name:2},
      {id:'3',name:3},
      {id:'4',name:4},
      {id:'5',name:5},
      {id:'6',name:6},
      {id:'7',name:7},
      {id:'8',name:8},
      {id:'9',name:9},
      {id:'10',name:10}
    ];
      QuestionBank=[{id:'1',Question:'What Are The Key Features Of AngularJS?',Answer:[{id:'1',description:'Data-binding – Handles synchronization of data across model, controllers, and view.'},{id:'2',description:'Scope – Object representing the model, acts as a glue layer between controller and view.'}],Correct:false,Remarks:"tst",updated:false,type:'1',count:1},
  {id:'2',Question:'What Are The Security Features Provided By AngularJS?',Answer:[{id:'3',description:'It prevents HTML injection attacks'},{id:'4',description:'It prevents XSRF protection for server side communication'}],Correct:false,Remarks:"tst",updated:false,type:'1',count:2},
  {id:'3',Question:'What Are Angular Prefixes $ And $$?',Answer:[{id:'5',description:'To prevent accidental name collisions within the code, AngularJS prefixes the names of public objects with $ '},{id:'6',description:'the names of private objects with $$'}],Correct:false,Remarks:"tst",updated:false,type:'1',count:3},
  {id:'4',Question:'What Is $Scope In AngularJS?',Answer:[{id:'7',description:'It provides observers to watch for all the model changes.'},{id:'8',description:'Scopes can be nested in such a way that they can isolate functionality and model properties'}],Correct:false,Remarks:"tst",updated:false,type:'1',count:4},
    {id:'5',Question:'What Is Ng-View In AngularJS?',Answer:[{id:'9',description:'The ng-view tag creates a placeholder where an HTML or ng-template view can be placed based on the configuration.'},{id:'8',description:'ng-view is the directive that works as a container for angularJS to switch between views'}],Correct:false,Remarks:"tst",updated:false,type:'1',count:5},
  {id:'6',Question:'What is the use of span tag? Give one example.',Answer:[{id:'10',description:'For adding color on text'},{id:'8',description:'For adding background on text'}],Correct:false,Remarks:"tst",updated:false,type:'4',count:1},
  {id:'7',Question:'Which video formats are supported by HTML5?',Answer:[{id:'17',description:'mp4'},{id:'8',description:'webm,ogg'}],Correct:false,Remarks:"tst",updated:false,type:'4',count:2},
  {id:'8',Question:'What are some of the common lists that can be used when designing a page?',Answer:[{id:'3',description:'ordered list, unordered list'},{id:'4',description:'definition list,menu list,directory list'}],Correct:false,Remarks:"tst",updated:false,type:'4',count:3},
  {id:'9',Question:'What are selectors in CSS?',Answer:[{id:'3',description:'Selectors help to select an element to which you want to apply a style.'},{id:'4',description:'CSS column layout helps you to divide your text in to columns'}],Correct:false,Remarks:"tst",updated:false,type:'4',count:4},
  {id:'10',Question:'What is WebSQL?',Answer:[{id:'3',description:'WebSQL is a structured relational database at the client browser side.'},{id:'4',description:'It’s a local RDBMS inside the browser on which you can fire SQL queries.'}],Correct:false,Remarks:"tst",updated:false,type:'4',count:5},
{id:'11',Question:'What is Traceur compiler?',Answer:[{id:'3',description:'Traceur compiler compiles ECMAScript Edition 6 (ES6) (including classes, generators and so on) code on the fly to regular Javascript'},{id:'4',description:'Traceur itself is written in ES6, compiled to ES5.'}],Correct:false,Remarks:"tst",updated:false,type:'2',count:1},
	 {id:'7',Question:'What are the main routing COMPONENTS?',Answer:[{id:'17',description:'Angular2 provides 3 different components for routing configuration'},{id:'8',description:'Routes ,RouterOutlet,RouterLink'}],Correct:false,Remarks:"tst",updated:false,type:'2',count:2},
  {id:'8',Question:'Briefly explain Angularjs 2 Directives?',Answer:[{id:'3',description:'Structural directives and Attribute Directive'},{id:'4',description:'Directives are used to change the behavior as well as layout of the DOM elements.'}],Correct:false,Remarks:"tst",updated:false,type:'2',count:3},
  {id:'9',Question:'What is lazy loading in Angular2',Answer:[{id:'3',description:'Eager Module loading  Loading module at application startup'},{id:'4',description:'Lazy loading  Loading Module only when required'}],Correct:false,Remarks:"tst",updated:false,type:'2',count:4},
  {id:'10',Question:'What is Advantages of Angular 2?',Answer:[{id:'3',description:'The Angular 2 has better performance.'},{id:'4',description:'The Angular 2 has more powerful template system'}],Correct:false,Remarks:"tst",updated:false,type:'2',count:5},
{id:'11',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'3',count:1},
{id:'12',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'3',count:2},
{id:'13',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'3',count:3},
{id:'14',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'3',count:4},
{id:'15',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'3',count:5},
{id:'16',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'5',count:1},
{id:'17',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'5',count:2},
{id:'18',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'5',count:3},
{id:'19',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'5',count:4},
{id:'20',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'5',count:5},
{id:'21',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'6',count:1},
{id:'22',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'6',count:2},
{id:'23',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'6',count:3},
{id:'24',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'6',count:4},
{id:'25',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'6',count:5},
{id:'26',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'7',count:1},
{id:'27',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'7',count:2},
{id:'28',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'7',count:3},
{id:'29',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'7',count:4},
{id:'30',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'7',count:5},
{id:'31',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'8',count:1},
{id:'32',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'8',count:2},
{id:'33',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'8',count:3},
{id:'34',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'8',count:4},
{id:'35',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'8',count:5},
{id:'36',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'9',count:1},
{id:'37',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'9',count:2},
{id:'38',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'9',count:3},
{id:'39',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'9',count:4},
{id:'40',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'9',count:5},
{id:'41',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'10',count:1},
{id:'42',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'10',count:2},
{id:'43',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'10',count:3},
{id:'44',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'10',count:4},
{id:'45',Question:'Question1',Answer:[{id:'3',description:'ans3'},{id:'4',description:'ans4'}],Correct:false,Remarks:"tst",updated:false,type:'10',count:5},


  ];



  Questions=[];
  
  public getSeverity(){
  return this.Severity;
  }
 public getCount(){
  return this.QuestionCount;
  }
 public getRoles(){
  return this.Role;
  }
 public getYears(){
  return this.Years;
  }
public getProfile(){
return this.Profile;
};
public setProfile(profile:any){
 this.Profile=profile;
};
  public getQuestions():any{
  return this.Questions[this.counter];
  }
  
  public getAllQuestions(){
    debugger
       var allQuestions=this.Subject.filter(x => x.selected==true && x.count.name!=0);
        var finalQuestion;
        var temp=[];
       allQuestions.forEach(element => {
        var temp1 =this.QuestionBank.filter(x => x.type==element.id &&  x.count<=element.count.name);
        if (temp.length==0)
        temp=temp1;
        else
          {
            if (temp1.length>0)
                     temp1.forEach(element => {

          temp.push(element);
                     });

          }
       });
        this.Questions=temp;
  }
 public setQuestions(result:boolean,remarks:string){
  this.Questions[this.counter].Correct=result;
   this.Questions[this.counter].Remarks=remarks;
  }
  public next(result: boolean,remarks: string){
      this.setQuestions(result,remarks);
   if ((this.Questions.length-1)> this.counter){
     this.counter++;
     return this.Questions[this.counter];
   }
    else{
     return null;
    }
  }
  public getSubject() {
    return this.Subject;
  }
    public getResult() {
      debugger
       this.Result=[];
       this.Questions.forEach(element => {
        if( this.Result.filter(x => x.id==element.type).length==0)
        {
        var trueCount =this.Questions.filter(x => x.type==element.type &&  x.Correct==true);
        var totalCount =this.Questions.filter(x => x.type==element.type);
        var totalScore=(trueCount.length/totalCount.length)*100;
        var subject1 =this.Subject.filter(x => x.id==element.type);
        if (this.Result.length==0){
        this.Result=[{id:element.type,subject:subject1[0].name,score:totalScore,showDetail:true,Label:"Show Detail"}];
         }
      else 
      this.Result.push({id:element.type,subject:subject1[0].name,score:totalScore,showDetail:true,Label:"Show Detail"});
        }
         trueCount =this.Result.filter(x => x.score>50);
          totalScore=(trueCount.length/this.Result.length)*100;
          if (totalScore>50)
            this.finalResult="PASS";
          else
             this.finalResult="FAIL";
       });
      return this.Result;
  }
  public getResultDetail(type:string){
    debugger
     var temp1 =this.Questions.filter(x => x.type==type);
     return temp1;
  }
  public removeShowDetail(type:string){
  this.Result.forEach(element => {
    if (element.id!=type)
       element.showDetail=true;
        element.Label="Show Detail"
  });
  }
    public setSubject(subject) {
    return this.Subject=subject;
  }
}
