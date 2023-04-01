import { Component, OnInit } from '@angular/core';
import { IResource } from 'src/app/models/resource';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.scss']
})
export class ResourcePageComponent implements OnInit {
  resources:IResource[] = [];

  constructor(
    private resourceService: ResourceService
    ) {

  }

  ngOnInit(): void {
    this.resourceService.getAll().subscribe(resource => {
      this.resources = resource['data']
    });
  }
}
