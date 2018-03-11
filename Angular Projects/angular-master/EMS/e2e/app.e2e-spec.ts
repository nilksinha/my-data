import { EMSPage } from './app.po';

describe('ems App', () => {
  let page: EMSPage;

  beforeEach(() => {
    page = new EMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
