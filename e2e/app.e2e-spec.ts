import { Avid2Page } from './app.po';

describe('avid2 App', function() {
  let page: Avid2Page;

  beforeEach(() => {
    page = new Avid2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
