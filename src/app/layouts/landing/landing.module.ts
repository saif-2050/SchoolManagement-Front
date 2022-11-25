import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

@NgModule({
  declarations: [LandingLayoutComponent],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
