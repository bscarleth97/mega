import megaPage from "../page_objects/megaPage";

module.exports = function() {
  this.Given(/^a client is on the home page$/, function() {
    megaPage.open();
    megaPage.btnCrear.waitForVisible(15000);
  });

  this.When(/^confirmation window appears$/, function() {
    megaPage.confirmWindow.waitForVisible(15000);
  });

  this.Then(/^click on "([^"]*)"$/, function(arg1) {
    megaPage.clickCars(arg1);
  });

  this.Then(/^values are properly set$/, function() {
    megaPage.setValues();
    browser.pause(5000);
  });
};
