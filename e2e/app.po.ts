export class CaveAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cave-angular2-app h1')).getText();
  }
}
