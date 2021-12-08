import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = {
  
    id: 12,
    age: 21,
    name: "James",
    sex: "Male",
    course: "Biology"
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
