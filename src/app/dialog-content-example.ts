import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogProgress, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      alert(result);
    });

    setTimeout(() => {
      dialogRef.close(true);
    }, 3000);
  }
}

@Component({
  selector: 'dialog-progress',
  templateUrl: 'dialog-progress.html',
})
export class DialogProgress {}
