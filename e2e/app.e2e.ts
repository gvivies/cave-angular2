import { CaveAngular2Page } from './app.po';

describe('cave-angular2 App', function() {
  let page: CaveAngular2Page;

  beforeEach(() => {
    page = new CaveAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cave-angular2 works!');
  });
});
