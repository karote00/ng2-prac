import { Ng2PracPage } from './app.po';

describe('ng2-prac App', function() {
  let page: Ng2PracPage;

  beforeEach(() => {
    page = new Ng2PracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
