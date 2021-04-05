import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  contributions: any[] = [
    {
      text: 'Issue tracking system'
    },
    {
      text: 'Contributing guide'
    },
    {
      text: 'Template repos / what actions are involved'
    },
    {
      text: 'Recommended flow (version flow etc)'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
