import { FourElementsPage } from './app.po';

describe('four-elements App', () => {
  let page: FourElementsPage;

  beforeEach(() => {
    page = new FourElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
