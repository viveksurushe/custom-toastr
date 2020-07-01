import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../service/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  _notes: any[];

  constructor(private toastrService: ToastrService) {
    this._notes = new Array<any>();

    this.toastrService.noteAdded.subscribe(note => {
      this._notes.push(JSON.parse(JSON.stringify(note)));
      setTimeout(() => {
        this.hide.bind(this)(note.id);
      }, 5000);
    });

    this.toastrService.noteOpen.subscribe(note => {
      this._notes.push(note);
    });

    this.toastrService.noteClose.subscribe(note => {
      this.hide(JSON.parse(JSON.stringify(note)));
    });
  }

  ngOnInit(): void {}

  hide(noteId: any) {
    let index = this._notes.findIndex(ele => {
      return ele.id === noteId;
    });

    if (index >= 0) {
      this._notes.splice(index, 1);
    }
  }
}
