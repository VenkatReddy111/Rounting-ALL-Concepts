import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dep-detail',
  templateUrl: './dep-detail.component.html',
  styleUrls: ['./dep-detail.component.css']
})
export class DepDetailComponent implements OnInit {
   public empId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //let id=parseInt(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.empId=id;
    })
   
  }
  goPrevious(){
      if(this.empId>1){
       this.router.navigate(['emp-list',this.empId-1])
      }
  }
  goNext(){
    if(this.empId<3)
    this.router.navigate(['emp-list',this.empId+1])
  }
  goBack(){
    this.router.navigate(['../',{id:this.empId}],{relativeTo:this.route})
  }

}
