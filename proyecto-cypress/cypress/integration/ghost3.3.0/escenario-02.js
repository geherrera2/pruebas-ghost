
import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-2:Editar Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    // it('Editar Post', () => {
    //     const valueTitlePost = faker.lorem.sentence();

    //     loginPage.visitPage();
    //     GeneralPage.stepScreenshot('1');
    //     loginPage.login();
    //     postPage.navigateToPostsPage();
    //     GeneralPage.stepScreenshot('2',100);
    //     postPage.clickFirstElementPost();
    //     postPage.updateTitlePost(valueTitlePost);
    //     GeneralPage.stepScreenshot('3',100);
    //     postPage.clickUpdatePost();
    //     postPage.navigateToPostsPage();
    //     postPage.assertUpdatePost(valueTitlePost);
    //     loginPage.logOut();
        
    
    // })

    let pages = [
        { label: 'base', url: `http://localhost:2368/ghost/`, hideSelectors },
       
      ]

    it('Generate report using Backstop JS', function () {
        // If ref URl is set, then it means we are in the right env for doing both refresh and test calls
        let refScenarios = []
        let testScenarios = []
        pages.forEach((scenario) => {
          const refScenarioUrl = scenario.url.replace(baseUrl, refUrl)
          const refScenario = { ...scenario }
          const testScenario = { ...scenario }
          refScenario.url = refScenarioUrl
          refScenarios.push(refScenario)
          testScenarios.push(testScenario)
        })
        cy.task('backstopRefreshReferences', { scenarios: refScenarios, folder: 'paternlab' }, { timeout: 820000 })
        cy.task('backstopTest', { scenarios: testScenarios, folder: 'patternlab' }, { timeout: 820000 })
        
      })
  })