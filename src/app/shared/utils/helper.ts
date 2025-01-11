import { format } from "date-fns";

export class Helper {

  public static toDateStr(dt: Date) {
    const formattedDate = format(dt, 'dd-MMM-yyyy');
    return formattedDate;
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