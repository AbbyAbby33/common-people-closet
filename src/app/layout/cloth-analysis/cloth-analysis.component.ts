import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpc-cloth-analysis',
  templateUrl: './cloth-analysis.component.html',
  styleUrls: ['./cloth-analysis.component.scss']
})
export class ClothAnalysisComponent implements OnInit {

  displayedColumns: string[] = ['index', 'name', 'material', 'dressing-frequency', 'story', 'type', 'login-date'];

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA = [
  {index: 1, name: 'Hydrogen', material: 1.0079, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 2, name: 'Helium', material: 4.0026, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 3, name: 'Lithium', material: 6.941, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 4, name: 'Beryllium', material: 9.0122, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 5, name: 'Boron', material: 10.811, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 6, name: 'Carbon', material: 12.0107, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 7, name: 'Nitrogen', material: 14.0067, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 8, name: 'Oxygen', material: 15.9994, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 9, name: 'Fluorine', material: 18.9984, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
  {index: 10, name: 'Neon', material: 20.1797, dressingFrequency: 5, story: '', type: '衣服', loginDate: '2020-02-18'},
];
