import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

/**
 * @title Configurable progress spinner
 */
@Component({
  selector: 'progress-spinner',
  templateUrl: 'progress-spinner.html',
  styleUrls: ['progress-spinner.css'],
})
export class ProgressSpinner {
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
}
