import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
text ="employeedetails"
updateValue(e){
  console.log(e.target.value)
}
  constructor() { }

  ngOnInit() {
  }
  employees =[
    {name:"Sabelo", organisation:"CodeTribe", cell:"0848749690", email:"sabeloprofesor3@gmail"}, 
    {name:"Boineelo", organisation:"Ekasi", cell:"0739648021", email:"boineelophale@gmail.com"},
    {name:"Tebogo", organisation:"Baragwanath", cell:"0746605961", email:"tebohokubheka@gmail.com"},
    {name:"REFILWE", organisation:"CH BARAGWANATH HOSPITAL", cell:"0662943325", email:"......."},
    ];
    model:any={};
    model2:any={};
    msg:any="";
    AddEmployee(){
      this.employees.push(this.model);
      this.model = {};
      this.msg="Record is successfully Added.....";
    }
    DeleteEmployee(i){
      this.employees.splice(i,1);
      this.msg="Record is successfully Deleted.....";
      
    }
    myValue;
    EditEmployee(k){
      this.model2.name = this.employees[k].name;
      this.model2.organisation = this.employees[k].organisation;
      this.model2.cell= this.employees[k].cell;
      this.model2.email = this.employees[k].email;
       this.myValue = k;
    }
    UpdateEmployee(){
      console.log("hello")
      let k= this.myValue;
      for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]=this.model2;
        this.model2 = {};
        this.msg="Record is successfully Updated.....";
      } 
      }
    }
    clickMe(){
      this.msg="";
    }

}
 