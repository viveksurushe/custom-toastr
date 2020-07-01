import { Component } from '@angular/core';
import { ToastrService } from './service/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toastrId: any;

  constructor(private toastrService: ToastrService) {
  }

  showToastr(type: string) {
    this.toastrService.show(type, 'this is dummy content', 'Title')
  }

  openToastr(type: string) {
    this.toastrId = this.toastrService.open(type, 'this is dummy content', 'Title')
  }

  closeToastr() {
    this.toastrService.close(this.toastrId);
  }
}
