import { format } from 'date-fns';

export class Helper {

  public static nameSpecialChars = "~`!1@2#3$4%5^6&7*8(9)0-_+={}[]|\:;,.<>/?";
  public static descSpecialChars = "~`#%^&*-_+={}[]|\:;,.<>/?";

  public static toDateStr(dt: Date) {
    const formattedDate = format(dt, 'dd-MMM-yyyy');
    return formattedDate;
  }

  public static chkphoneval(val: string) {
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

  public static validateSpecialCharacters(val: string, excludeSpecialChars: string, excludeDoubleQuote: string, excludeSingleQuote: string) {
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

  public static get instance(): AppManager {
    if (!AppManager.mInstance) {
      AppManager.mInstance = new AppManager();
    }

    return AppManager.mInstance;
  }

  public addBeforeUnload() {
    this.beforeUnloadListener = (event: any) => {
      event.preventDefault();
      return event.returnValue = 'Please use log out instead of close window directly';
    }
    addEventListener('beforeunload', this.beforeUnloadListener, { capture: false });
  }

  public removeBeforeUnload() {
    removeEventListener('beforeunload', this.beforeUnloadListener, { capture: false });
  }
}