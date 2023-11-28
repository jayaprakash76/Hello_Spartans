import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{

  title='Services';
  constructor(private titleService:Title) {

  }
  ngOnInit(): void {
      this.titleService.setTitle(this.title);
  }

}
