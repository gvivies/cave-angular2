import { CaveNg2Page } from './app.po';

describe('cave-ng2 App', function() {
  let page: CaveNg2Page;

  beforeEach(() => {
    page = new CaveNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
