/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BottlesComponent } from './bottles.component';

describe('Component: Bottles', () => {
  it('should create an instance', () => {
    let component = new BottlesComponent();
    expect(component).toBeTruthy();
  });
});
