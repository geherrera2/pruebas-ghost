Feature: Publish Post

  @user1 @web
  Scenario: As an admin user I create a tag
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/a/span"
    Then I enter "Test tag" into input field having xpath "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/form/header/section/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    Then I should see text "Test tag"
