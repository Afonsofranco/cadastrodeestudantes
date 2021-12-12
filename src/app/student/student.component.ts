import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from '../mock-student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = STUDENTS
  selectedStudent?: Student;
  student: Student[] = [];
  constructor(private studentService: StudentService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getStudent();
  }
  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.messageService.add(`HeroesComponent: Selected hero id=${student.id}`);}
  getStudent(): void {
    this.studentService.getStudent()
        .subscribe(student => this.student = student);
  }
}
