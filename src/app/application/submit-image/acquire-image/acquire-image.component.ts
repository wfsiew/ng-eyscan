import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-acquire-img',
  standalone: false,
  
  templateUrl: './acquire-image.component.html',
  styleUrl: './acquire-image.component.css'
})
export class AcquireImageComponent implements OnInit {

  public onClose!: Subject<any>;

  listx = {
    image_bb: true,
    image_bm: false,
    image_bo: false,
    image_lm: false,
    image_lo: false,
    image_rm: false,
    image_ro: false
  };

  list: string[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
  }

  onYes() {
    const keys = Object.keys(this.listx);
    keys.forEach((k) => {
      const b = this.listx[k as keyof typeof this.listx];
      if (b) {
        this.list.push(k);
      }
    });
    this.onClose.next({ result: true, list: this.list });
    this.bsModalRef.hide();
  }

  onHide() {
    this.onClose.next({ result: false });
    this.bsModalRef.hide();
  }

  get isEmpty() {
    const b = Object.values(this.listx).every(x => x === false);
    return b;
  }
}
