import { Component, OnInit, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { GuideComponent } from './guide/guide.component';
import { AcquireImageComponent } from './acquire-image/acquire-image.component';
import { CustomRender } from 'src/app/shared/classes/custom-render';

interface DiseaseType {
  desc: string;
  cd: string;
}

@Component({
  selector: 'app-submit-image',
  standalone: false,
  
  templateUrl: './submit-image.component.html',
  styleUrl: './submit-image.component.css'
})
export class SubmitImageComponent extends CustomRender implements OnInit, OnDestroy {

  isCollapseSelena = true;
  isCollapseckd = true;
  isCollapse = true;
  date_of_image: any = new Date();
  selectedDiseaseList: DiseaseType[] = [];
  selectedFileRight1: File | null = null;
  imageNameRight1: any = null;
  imagePreviewRight1: any = null;
  selectedFileRight2: File | null = null;
  imageNameRight2: any = null;
  imagePreviewRight2: any = null;
  selectedFileLeft1: File | null = null;
  imageNameLeft1: any = null;
  imagePreviewLeft1: any = null;
  selectedFileLeft2: File | null = null;
  imageNameLeft2: any = null;
  imagePreviewLeft2: any = null;
  nhxMessageTitle = '';
  nhxMessageBody = '';
  bsModalRef?: BsModalRef;
  @ViewChild('nhxMessageBox', { static: false }) nhxMessageBox?: ModalDirective;

  constructor(
    private router: Router,
    protected renderer2: Renderer2,
    private modalService: BsModalService
  ) {
    super(renderer2);
  }

  ngOnInit() {
    this.selectedDiseaseList = [
      {
        desc: 'Diabetic Retinopathy',
        cd: 'DR'
      },
      {
        desc: 'Chronic Kidney Disease',
        cd: 'CKD'
      }
    ];
  }

  ngOnDestroy() {
    super.destroy();
  }

  onFileDropRight1(ev: DragEvent) {
    ev.preventDefault();
    const file = ev.dataTransfer?.files[0] as File | null;
    this.uploadFileRight1(file);
  }

  onFileDropRight2(ev: DragEvent) {
    ev.preventDefault();
    const file = ev.dataTransfer?.files[0] as File | null;
    this.uploadFileRight2(file);
  }

  onFileDropLeft1(ev: DragEvent) {
    ev.preventDefault();
    const file = ev.dataTransfer?.files[0] as File | null;
    this.uploadFileLeft1(file);
  }

  onFileDropLeft2(ev: DragEvent) {
    ev.preventDefault();
    const file = ev.dataTransfer?.files[0] as File | null;
    this.uploadFileLeft2(file);
  }

  onDragOverRight1(ev: DragEvent) {
    ev.preventDefault();
  }

  onDragOverRight2(ev: DragEvent) {
    ev.preventDefault();
  }

  onDragOverLeft1(ev: DragEvent) {
    ev.preventDefault();
  }

  onDragOverLeft2(ev: DragEvent) {
    ev.preventDefault();
  }
 
  showMaxFile() {
    this.nhxMessageTitle = 'Information';
    this.nhxMessageBody = 
    `
    <div class="container">
      <div class="row pt-3 d-flex">
        <div class="col-2 justify-content-center "><img src="assets/img/eyris_logo.png" class="nhxlogo"></div>
        <div class="col-10 nhxmsg">SYS-00001:<br>Maximum screening images allowed for uploading is 2 per eye, only first 2 valid images will be used.</div>
      </div>
    </div>
    `
    this.nhxMessageBox?.show();
  }

  onFileChangeRight1(ev: any) {
    if (ev.target.files.length > 2) {
      this.showMaxFile();
      return;
    }

    if (ev.target.files.length > 1) {
      const file1 = ev.target.files[0] as File | null;
      const file2 = ev.target.files[1] as File | null;
      this.uploadFileRight1(file1);
      this.uploadFileRight2(file2);
    }

    else {
      const file = ev.target.files[0] as File | null;
      this.uploadFileRight1(file);
    }
  }

  onFileChangeRight2(ev: any) {
    if (ev.target.files.length > 2) {
      this.showMaxFile();
      return;
    }

    if (ev.target.files.length > 1) {
      const file1 = ev.target.files[0] as File | null;
      const file2 = ev.target.files[1] as File | null;
      this.uploadFileRight1(file1);
      this.uploadFileRight2(file2);
    }

    else {
      const file = ev.target.files[0] as File | null;
      this.uploadFileRight2(file);
    }
  }

  onFileChangeLeft1(ev: any) {
    if (ev.target.files.length > 2) {
      this.showMaxFile();
      return;
    }

    if (ev.target.files.length > 1) {
      const file1 = ev.target.files[0] as File | null;
      const file2 = ev.target.files[1] as File | null;
      this.uploadFileLeft1(file1);
      this.uploadFileLeft2(file2);
    }

    else {
      const file = ev.target.files[0] as File | null;
      this.uploadFileLeft1(file);
    }
  }

  onFileChangeLeft2(ev: any) {
    if (ev.target.files.length > 2) {
      this.showMaxFile();
      return;
    }

    if (ev.target.files.length > 1) {
      const file1 = ev.target.files[0] as File | null;
      const file2 = ev.target.files[1] as File | null;
      this.uploadFileLeft1(file1);
      this.uploadFileLeft2(file2);
    }

    else {
      const file = ev.target.files[0] as File | null;
      this.uploadFileLeft2(file);
    }
  }

  uploadFileRight1(file: File | null) {
    if (file && file.type.startsWith('image/')) {
      this.selectedFileRight1 = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviewRight1 = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.imageNameRight1 = file.name;
    }
  }

  uploadFileRight2(file: File | null) {
    if (file && file.type.startsWith('image/')) {
      this.selectedFileRight2 = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviewRight2 = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.imageNameRight2 = file.name;
    }
  }

  uploadFileLeft1(file: File | null) {
    if (file && file.type.startsWith('image/')) {
      this.selectedFileLeft1 = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviewLeft1 = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.imageNameLeft1 = file.name;
    }
  }

  uploadFileLeft2(file: File | null) {
    if (file && file.type.startsWith('image/')) {
      this.selectedFileLeft2 = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviewLeft2 = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.imageNameLeft2 = file.name;
    }
  }

  onDeleteImageRight1(ev: any) {
    this.imageNameRight1 = null;
    this.imagePreviewRight1 = null;
    ev.stopPropagation();
  }

  onDeleteImageRight2(ev: any) {
    this.imageNameRight2 = null;
    this.imagePreviewRight2 = null;
    ev.stopPropagation();
  }

  onDeleteImageLeft1(ev: any) {
    this.imageNameLeft1 = null;
    this.imagePreviewLeft1 = null;
    ev.stopPropagation();
  }

  onDeleteImageLeft2(ev: any) {
    this.imageNameLeft2 = null;
    this.imagePreviewLeft2 = null;
    ev.stopPropagation();
  }

  get displayImageRight1() {
    let s = 'assets/img/submit-image/RO.png';
    if (this.imagePreviewRight1) {
      s = this.imagePreviewRight1;
    }

    return s;
  }

  get displayImageRight2() {
    let s = 'assets/img/submit-image/RM.png';
    if (this.imagePreviewRight2) {
      s = this.imagePreviewRight2;
    }

    return s;
  }

  get displayImageLeft1() {
    let s = 'assets/img/submit-image/LO.png';
    if (this.imagePreviewLeft1) {
      s = this.imagePreviewLeft1;
    }

    return s;
  }

  get displayImageLeft2() {
    let s = 'assets/img/submit-image/LM.png';
    if (this.imagePreviewLeft2) {
      s = this.imagePreviewLeft2;
    }

    return s;
  }

  onRemoveDisease(o: DiseaseType) {
    const lx = this.selectedDiseaseList.filter(x => x.cd !== o.cd);
    this.selectedDiseaseList = lx;
  }

  onModalAcquireImage() {
    const initialState = {
      list: []
    };
    this.bsModalRef = this.modalService.show(AcquireImageComponent, { 
      class: 'acquire-image-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    this.bsModalRef.content.onClose.subscribe((res: any) => {
      if (res.result === true) {
        const s = res.list.join(',');
        this.nhxMessageTitle = 'Error';
        this.nhxMessageBody = 
        `
        <div class="container">
          <div class="row pt-3 d-flex">
            <div class="col-2 justify-content-center"><img src="assets/img/eyris_logo.png" class="nhxlogo"></div>
            <div class="col-10 nhxmsg">SYS-00105:<br>No camera is configured for the organization.</div>
          </div>
        </div>
        `
        this.nhxMessageBox?.show();
      }
    });
  }

  onReset() {
    location.href = location.href;
  }

  onModalGuide() {
    const initialState = {

    };
    this.bsModalRef = this.modalService.show(GuideComponent, { 
      class: 'guide-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }

  onKeyupDateImage(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Backspace') {
      this.date_of_image = '';
    }
  }
}
