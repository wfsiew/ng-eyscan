import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { format } from 'date-fns';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

export class Helper {

  static nameSpecialChars = "~`!1@2#3$4%5^6&7*8(9)0-_+={}[]|\:;,.<>/?";
  static descSpecialChars = "~`#%^&*-_+={}[]|\:;,.<>/?";

  static toDateStr(dt: Date) {
    const formattedDate = format(dt, 'dd-MMM-yyyy');
    return formattedDate;
  }

  static chkposval(val: string, ftype: number): string {
    let s = val;
      
    //check for positive values to 2 decimal places
    if (ftype == 1) {
      if (!(isFinite(Number(s)))) {
        //numfield.value = numfield.value.substr(0, numfield.value.length -1);      
        s = this.removechar(s);
        //recursive
        return this.chkposval(s, ftype);
      }

      else if (Number(s) < 0) {
        s = '';
      }    
      
      //check 2 decimals
      if (s.indexOf(".") != -1 && s.length - s.indexOf(".") > 3) { 
        //numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
        s = s.substr(0, s.indexOf(".") + 1) + s.substr(s.indexOf(".") + 1, 2);
      }
    }
    //check for positive whole numbers
    else if (ftype == 2) {
      if (!(isFinite(Number(s)))) {
        //numfield.value = numfield.value.substr(0, numfield.value.length -1);
        s = this.removechar(s);
        //recursive
        return this.chkposval(s, ftype);
      }

      else if (Number(s) < 0) {
        s = '';  
      }        
      
      if (s.indexOf(".") >= 0) {
        s = s.substr(0, s.indexOf(".")) + s.substr(s.indexOf(".") + 1, s.length);
        //numfield.value = numfield.value.substr(0, numfield.value.indexOf(".")) + numfield.value.substr(numfield.value.indexOf(".") + 1, numfield.value.length);
        //s = this.removedot(s);
      }    
    }
    
    //check for percentage values to 2 decimal places
    else if (ftype == 3) {
      if (!(isFinite(Number(s)))) {
        //numfield.value = numfield.value.substr(0, numfield.value.length -1);
        s = this.removechar(s);
        //recursive
        return this.chkposval(s, ftype);     
      }

      else if ((Number(s) > 100) || (Number(s) < 0)) {
        s = '';   
      }
        
      //check 2 decimal places 
      if (s.indexOf(".") != -1 && s.length - s.indexOf(".") > 3)
      {
        s = s.substr(0, s.indexOf(".")) + s.substr(s.indexOf(".") + 1, s.length);
        //recursive      
        return this.chkposval(s, ftype);      
      }    
    }  
    
    else if (ftype == 8) {		
      if (!(isFinite(Number(s)))) {
        //numfield.value = numfield.value.substr(0, numfield.value.length -1);
        s = this.removechar(s);
        //recursive
        return this.chkposval(s, ftype);      
      }
      //else if ((numfield.value > 100) || (numfield.value < 0))
      else if ((Number(s) < 0)) {
        s = '';     
      }
      
      //check for decimal places 
      if (s.indexOf(".") != -1) {
        if (s.lastIndexOf(".") > 1) {
          if (s.indexOf(".") != s.lastIndexOf(".")) {	
            s = s.substr(0, s.lastIndexOf("."));
            //recursive      
            
            //chkposval(numfield, ftype, fieldname);  
          }    
        }
      }    
    }
    
    //check for positive values to 2 decimal places & set the field to blank if invalid
    else if (ftype == 4) {
      if ((!(isFinite(Number(s)))) || (Number(s) < 0)) {
        s = '';
        //recursive
        return this.chkposval(s, ftype);
      }

      if (s.indexOf(".") != -1) { 
        s = s.substr(0, s.indexOf("."));
      }
    }
    //check for positive values to 3 decimal places i.e. unit price
    else if (ftype == 5) {
      if ((!(isFinite(Number(s))))  || (Number(s) < 0)) {
        s = s.substr(0, s.length -1);
        //recursive
        return this.chkposval(s, ftype);      
      }
      //check 2 decimals
      if (s.indexOf(".") != -1 && s.length - s.indexOf(".") > 4) { 
        s = s.substr(0, s.length -1);      
      }    
    }
    //check for percentage values but decimal number not allowed
    else if (ftype == 6) {
      if (!(isFinite(Number(s)))) {
        //numfield.value = numfield.value.substr(0, numfield.value.length -1);      
        s = this.removechar(s);
        //recursive
        return this.chkposval(s, ftype);      
      }

      else if ((Number(s) > 100) || (Number(s) < 0)) {
        s = '';    
      }
          
      //check 2 decimal places 
      if (s.indexOf(".") >= 0) { 
        s = s.substr(0, s.indexOf(".")) + s.substr(s.indexOf(".") + 1, s.length);
      }    
    }
    
    //check for percentage values to 2 decimal places
    else if (ftype == 7) {
      if (!(isFinite(Number(s)))) {
        //numfield.value = numfield.value.substr(0, numfield.value.length -1);
        s = this.removechar(s);
        //recursive
        return this.chkposval(s, ftype);     
      }

      else if ((Number(s) > 999) || (Number(s) < 0)) {
        s = '';      
      }
        
      //check 2 decimal places 
      if (s.indexOf(".") != -1 && s.length - s.indexOf(".") > 3) {
        s = s.substr(0, s.indexOf(".")) + s.substr(s.indexOf(".") + 1, s.length);
        //recursive      
        return this.chkposval(s, ftype);      
      }
    }

    return s;
  }//end function

  static chkphoneval(val: string) {
    let pfv, s;
    pfv = val.trim();
    
    if (pfv.length == 0) s = '';

    if (pfv.length == 1 && pfv == '+') return pfv;

    if (pfv.length > 1 && pfv.slice(0 , 1) === '+') {
      s = '+' + this.removechar(pfv.slice(1));
    }

    else {
      s = this.removechar(pfv);
    }

    return s;
  }

  static validateSpecialCharacters(val: string, excludeSpecialChars: string, excludeDoubleQuote: string, excludeSingleQuote: string) {
    let invalid = excludeSpecialChars;
    let ok = true;
    let validStr = '';
    let s = val;

    if (excludeDoubleQuote === 'Y') {
      invalid = invalid + '"';
    }
      
    if (excludeSingleQuote === 'Y') {
      invalid = invalid + '\'';
    }

    if (val.trim() !== "" && val.length > 0) {
      if (validStr === '') {
        validStr = val;
      }

      for (let i = 0; i < validStr.length; i++) {
        if (invalid.indexOf(validStr.charAt(i)) >= 0) {
          validStr = validStr.replace(validStr.charAt(i), '');
          i = i - 1;
          ok = false;
          s = validStr;
        }
      }
    }

    return [s, ok, invalid];
  }

  static reject_space(str: string) {
    let arr = str.split(' ');
    let ls: string[] = [];
    let s = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != '') {
        ls.push(arr[i]);
      }
    }

    s = ls.join('');
    return s;
  }

  static c_upper(val: string) {
    return val.toUpperCase();
  }

  private static removedot(val: string) {
    let s = val;
    return s;
  }

  private static removechar(str: string) {
    let ls = [];
    
    for (let i = 0; i < str.length; i++) {
      const j = Number(str.charAt(i));
      if (!(isNaN(j))) {
        ls.push(str.charAt(i));
      }        
    }

    return ls.join('');
  }
}

export class AppManager {

  static mInstance: AppManager;

  private beforeUnloadListener: any;

  private constructor() {}

  static get instance(): AppManager {
    if (!AppManager.mInstance) {
      AppManager.mInstance = new AppManager();
    }

    return AppManager.mInstance;
  }

  addBeforeUnload() {
    return;
    this.beforeUnloadListener = (event: any) => {
      event.preventDefault();
      return event.returnValue = 'Please use log out instead of close window directly';
    }
    addEventListener('beforeunload', this.beforeUnloadListener, { capture: false });
  }

  removeBeforeUnload() {
    removeEventListener('beforeunload', this.beforeUnloadListener, { capture: false });
  }
}