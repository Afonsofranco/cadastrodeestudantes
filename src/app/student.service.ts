import { Injectable } from '@angular/core';
import { Student} from './student/student';
import { STUDENTS } from './mock-student';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudent(): Observable<Student[]> {
    const student = of(STUDENTS);
    this.messageService.add('StudentService: fetched student');
    return student;
  } 

}
