import { KombuchaOnTapPage } from './app.po';

describe('kombucha-on-tap App', () => {
  let page: KombuchaOnTapPage;

  beforeEach(() => {
    page = new KombuchaOnTapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
