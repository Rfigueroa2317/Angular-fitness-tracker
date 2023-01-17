import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TrainingService } from '../training.service';

import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.startorResumeTimer();
  }

  startorResumeTimer() {
    const step = this.trainingService.getRunningExercise().duration / .5; // setting the duration to .5 will make the timer go a reasonable pace
    // this.timer = setInterval(() => {
    //   this.progress = this.progress + 1;
    //   if (this.progress >= 100) {
    //     this.trainingService.completeExercise();
    //     clearInterval(this.timer);
    //   }
    // }, step);
  }a

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startorResumeTimer();
      }
    });
  }
}
