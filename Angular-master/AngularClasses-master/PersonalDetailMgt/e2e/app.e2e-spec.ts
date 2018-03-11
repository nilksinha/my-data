import { PersonalDetailMgtPage } from './app.po';

describe('personal-detail-mgt App', () => {
  let page: PersonalDetailMgtPage;

  beforeEach(() => {
    page = new PersonalDetailMgtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
