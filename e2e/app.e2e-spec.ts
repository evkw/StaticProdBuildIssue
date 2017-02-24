import { StaticProdBuildIssuePage } from './app.po';

describe('static-prod-build-issue App', () => {
  let page: StaticProdBuildIssuePage;

  beforeEach(() => {
    page = new StaticProdBuildIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
