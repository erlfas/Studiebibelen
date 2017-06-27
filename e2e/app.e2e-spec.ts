import { StudiebibelenPage } from './app.po';

describe('studiebibelen App', () => {
  let page: StudiebibelenPage;

  beforeEach(() => {
    page = new StudiebibelenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
