export class megaPage {
  constructor() {
    this.url = "https://mega.nz/";
  }

  open(path) {
    browser.url(this.url);
  }

  clickCars(arg1) {
    browser.click(`${arg1}`);
  }

  setValues() {
    browser.pause(15000);
    browser.setValue("#register-firstname-registerpage2", "Brenda");
    browser.setValue("#register-lastname-registerpage2", "Gutierrez");
    browser.setValue(
      "#register-email-registerpage2",
      "brenda_97scarleth@hotmail.com"
    );
    browser.setValue("#register-password-registerpage2", "test0101");
    browser.setValue("#register-password-registerpage3", "test0101");
  }
  get btnCrear() {
    return browser.element(
      "#startholder > div.bottom-page.scroll-block.startpage > div.top-head > div > div.top-buttons > a.default-white-button.small.no-hover.red-bg.create-account-button"
    );
  }

  get confirmWindow() {
    return browser.element(
      "#bodyel > div.fm-dialog.registration-success.registration-page-success.special"
    );
  }
}

export default new megaPage();
