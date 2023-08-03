import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchItem:string=''
  constructor(private route:ActivatedRoute, private router:Router){}
  ngOnInit(){
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem=params['searchItem']
    })
  }
  search(){
    if(this.searchItem)
    this.router.navigateByUrl('/search/'+this.searchItem)
  }
}
