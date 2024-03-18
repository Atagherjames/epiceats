import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-home-reservation',
  templateUrl: './home-reservation.component.html',
  styleUrl: './home-reservation.component.css',
})
export class HomeReservationComponent {
  status: string = 'Submitted Sucessfully!!';
  error: boolean = false;
  isVisible: boolean = false;

  constructor(
    private reservation: ReservationService,
    private fb: FormBuilder
  ) {}

  reservationForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    time: ['', Validators.required],
    date: ['', Validators.required],
  });

  onSubmitReservation() {
    this.reservation.reserve(this.reservationForm.value).subscribe(
      (data) => this.sucess(),
      (err) => this.failure()
    );
  }

  // show submission state
  sucess() {
    this.isVisible = true;
    this.status = 'Submitted Sucessfully!!';
    this.error = false;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

  failure() {
    this.isVisible = true;
    this.status = 'Submission Failed!!';
    this.error = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}
