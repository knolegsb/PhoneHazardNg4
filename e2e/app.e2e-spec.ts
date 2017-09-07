import { PhoneHazardPage } from './app.po';

describe('phone-hazard App', () => {
  let page: PhoneHazardPage;

  beforeEach(() => {
    page = new PhoneHazardPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
