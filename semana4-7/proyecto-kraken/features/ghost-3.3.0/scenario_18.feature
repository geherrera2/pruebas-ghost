Feature: Publish Post

  @user1 @web
  Scenario: As an admin user I edit the site title
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[2]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button/span"
    Then I enter " Edited" into input field having xpath "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/div/header/section/button/span"
    Then I should see text "Saved"
