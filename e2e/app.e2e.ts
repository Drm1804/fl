import { FlPage } from './app.po';

describe('fl App', function() {
  let page: FlPage;

  beforeEach(() => {
    page = new FlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fl works!');
  });
});
