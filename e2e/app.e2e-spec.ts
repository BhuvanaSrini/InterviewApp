import { InterviewAppPage } from './app.po';

describe('interview-app App', () => {
  let page: InterviewAppPage;

  beforeEach(() => {
    page = new InterviewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
