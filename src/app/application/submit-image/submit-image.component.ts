import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GuideComponent } from './guide/guide.component';
import { AcquireImageComponent } from './acquire-image/acquire-image.component';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { AppManager } from 'src/app/shared/utils/helper';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';
import { marker as _ } from '@colsen1991/ngx-translate-extract-marker';

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
  files: any[] = [];
  filex = '';
  bsModalRef?: BsModalRef;

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    protected translate: TranslateService,
    protected appTranslate: AppTranslateService,
    private modalService: BsModalService
  ) {
    super(router, renderer2, translate, appTranslate);
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
    const initialState = {
      title: 'Information',
      code: 'SYS-00001',
      desc: this.translate.instant(_('MAXIMUM SCREENING IMAGES ALLOWED FOR UPLOADING IS 2 PER EYE, ONLY FIRST 2 VALID IMAGES WILL BE USED.'))
    };
    this.bsModalRef = this.modalService.show(MessageBoxComponent, { 
      class: 'msg-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhMessageBox_title', 
      initialState 
    });
    this.bsModalRef.content.onClose.subscribe((res: any) => {
      this.onMessageHide();
    });
  }

  onMessageHide() {
    const fx = this.filex;
    this.filex = '';
    if (fx === 'r1') {
      this._onFileChangeRight1(this.files);
    }

    else if (fx === 'r2') {
      this._onFileChangeRight2(this.files);
    }

    else if (fx === 'l1') {
      this._onFileChangeLeft1(this.files);
    }

    else if (fx === 'l2') {
      this._onFileChangeLeft2(this.files);
    }
  }

  _onFileChangeRight1(files: any[]) {
    if (files.length > 1) {
      const file1 = files[0] as File | null;
      const file2 = files[1] as File | null;
      this.uploadFileRight1(file1);
      this.uploadFileRight2(file2);
    }

    else {
      const file = files[0] as File | null;
      this.uploadFileRight1(file);
    }
  }

  _onFileChangeRight2(files: any[]) {
    if (files.length > 1) {
      const file1 = files[0] as File | null;
      const file2 = files[1] as File | null;
      this.uploadFileRight1(file1);
      this.uploadFileRight2(file2);
    }

    else {
      const file = files[0] as File | null;
      this.uploadFileRight2(file);
    }
  }

  _onFileChangeLeft1(files: any[]) {
    if (files.length > 1) {
      const file1 = files[0] as File | null;
      const file2 = files[1] as File | null;
      this.uploadFileLeft1(file1);
      this.uploadFileLeft2(file2);
    }

    else {
      const file = files[0] as File | null;
      this.uploadFileLeft1(file);
    }
  }

  _onFileChangeLeft2(files: any[]) {
    if (files.length > 1) {
      const file1 = files[0] as File | null;
      const file2 = files[1] as File | null;
      this.uploadFileLeft1(file1);
      this.uploadFileLeft2(file2);
    }

    else {
      const file = files[0] as File | null;
      this.uploadFileLeft2(file);
    }
  }

  onFileChangeRight1(ev: any) {
    if (ev.target.files.length > 2) {
      this.files = ev.target.files;
      this.filex = 'r1';
      this.showMaxFile();
      return;
    }

    this._onFileChangeRight1(ev.target.files);
  }

  onFileChangeRight2(ev: any) {
    if (ev.target.files.length > 2) {
      this.files = ev.target.files;
      this.filex = 'r2';
      this.showMaxFile();
      return;
    }

    this._onFileChangeRight2(ev.target.files);
  }

  onFileChangeLeft1(ev: any) {
    if (ev.target.files.length > 2) {
      this.files = ev.target.files;
      this.filex = 'l1';
      this.showMaxFile();
      return;
    }

    this._onFileChangeLeft1(ev.target.files);
  }

  onFileChangeLeft2(ev: any) {
    if (ev.target.files.length > 2) {
      this.files = ev.target.files;
      this.filex = 'l2';
      this.showMaxFile();
      return;
    }

    this._onFileChangeLeft2(ev.target.files);
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

        const initialState = {
          title: 'Error',
          code: 'SYS-00105',
          desc: this.translate.instant(_('No camera is configured for the organization.'))
        };
        this.modalService.show(MessageBoxComponent, { 
          class: 'msg-modal', 
          backdrop: 'static', 
          ariaLabelledBy: '__nhMessageBox_title', 
          initialState 
        });
      }
    });
  }

  onReset() {
    AppManager.instance.removeBeforeUnload();
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

  onKeyupDateImage(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Backspace') {
      this.date_of_image = '';
    }
  }
}
