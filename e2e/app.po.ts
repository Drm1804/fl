export class FlPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fl-app h1')).getText();
  }
}
