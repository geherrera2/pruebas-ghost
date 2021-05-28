Feature: Create Page

  @user1 @web
  Scenario: As an admin user I create a page
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[3]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/a/span"
    Then I enter "New Test Post Title" into input field having xpath "/html/body/div[2]/div/main/section/div[1]/div[1]/textarea"
    Then I enter "This is the content of the post" into input field having xpath "/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/div/div[1]/a"
    Then I should see text "New Test Post Title"