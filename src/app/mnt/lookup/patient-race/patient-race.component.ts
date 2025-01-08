import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-race',
  standalone: false,
  
  templateUrl: './patient-race.component.html',
  styleUrl: './patient-race.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PatientRaceComponent {

  constructor(private router: Router) {
    
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}
