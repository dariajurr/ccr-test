import { Component, Input } from '@angular/core';
import { IResource } from 'src/app/models/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {
  @Input() resource:IResource
}
