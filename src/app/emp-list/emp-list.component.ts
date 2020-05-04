import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public Employees=[
    {"id":1,"name":"venkat","fname":"venkatReddy"},
    {"id":2,"name":"ravi","fname":"raviKrishna"},
    {"id":3,"name":"shiva","fname":"shivaKrishna"}
]
  constructor(private router:Router,private route:ActivatedRoute) { }
   public selectId;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
        let id=parseInt(params.get('id'))
        this.selectId=id;
    })
  }
  add(department){
   //this.router.navigate(['emp-list',department.id])
   this.router.navigate([department.id],{relativeTo:this.route})

  }
 
  isSelected(department){
    if(department.id===this.selectId){
      return true;
    }

  }
}
