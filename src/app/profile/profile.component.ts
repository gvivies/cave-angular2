import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/services/session.service';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  sessionService: SessionService;
  router: Router;

  constructor(sessionService: SessionService, router: Router) {
    this.sessionService = sessionService;
    this.router = router;
  }

  ngOnInit() {
    this.sessionService.getConnectedUser().subscribe(user => {
      this.user = user;
    });
  }

  onDisconnect() {
    this.sessionService.setConnectedUser(null);
    this.router.navigate(['/']);
  }

}
