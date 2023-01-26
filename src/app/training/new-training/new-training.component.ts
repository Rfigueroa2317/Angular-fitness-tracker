import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.exercises =
      this.db.collection<Exercise>('availableExercises')
        .snapshotChanges()
        // .pipe(
        //   map(actions => actions.map(a => {
        //     const data = a.payload.doc.data() as Exercise;
        //     const id = a.payload.doc.id;
        //     return {id, ...data};
        //   }))
        // );

  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
