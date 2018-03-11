import { IMSPage } from './app.po';

describe('ims App', () => {
  let page: IMSPage;

  beforeEach(() => {
    page = new IMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
