import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoundationModule } from '@leveraon/foundation';

@Component({
  selector: 'app-component-renderer',
  imports: [FoundationModule],
  templateUrl: './component-renderer.component.html',
  styleUrl: './component-renderer.component.scss',
})
export class ComponentRendererComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  componentTag!: string;

  constructor() {}

  ngOnInit() {
    this.componentTag = this.route.snapshot.paramMap.get('tag') || '';
  }
}
