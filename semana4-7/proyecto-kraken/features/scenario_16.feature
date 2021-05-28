Feature: Publish Post

  @user1 @web
  Scenario: As an admin user I edit Ghost user
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/section/section/div/div[1]/a"
    Then I enter " Admin" into input field having xpath "/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[1]/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a"
    Then I should see text "Ghost Admin"
