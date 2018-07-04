import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public DataTable = [{name:'xyz1',phonenumber:3847583,price:1000},
	{name:'xyz2',phonenumber:3423183,price:200},
	{name:'xyz3',phonenumber:384757683,price:39580},
	{name:'xyz4',phonenumber:3897583,price:10},
	{name:'xyz5',phonenumber:3847589,price:103800},
	{name:'xyz6',phonenumber:55647583,price:10089},
	{name:'xyz7',phonenumber:9089783,price:10004},{name:'xyz8',phonenumber:87644212,price:1007}]
  constructor() { }

  ngOnInit() {
  }

  displayLowToHigh(value, DataTab) {
  	if(value) {
  		if(DataTab !== undefined) {
  			this. DataTable = _.sortBy(DataTab, [function(o) { return o.price; }]);
  			//this. DataTable = _.sortBy(DataTab, [DataTab.name, DataTab.phonenumber, DataTab.price]);
  			console.log('sorted table si',this.DataTable);
  		}
  	}
  }

}
