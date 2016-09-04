import { Avid3Page } from './app.po';

describe('avid3 App', function() {
  let page: Avid3Page;

  beforeEach(() => {
    page = new Avid3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
