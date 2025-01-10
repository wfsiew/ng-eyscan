export class Helper {

  private static beforeUnloadListener?: any;
  
  public static addBeforeunload() {
    this.beforeUnloadListener = (event: any) => {
      event.preventDefault();
      return event.returnValue = 'Please use log out instead of close window directly';
    }
    addEventListener('beforeunload', this.beforeUnloadListener, { capture: true });
  }

  public static removeBeforeunload() {
    removeEventListener('beforeunload', this.beforeUnloadListener, { capture: true });
  }
}