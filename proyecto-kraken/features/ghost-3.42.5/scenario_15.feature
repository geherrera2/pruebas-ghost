Feature: Publish Post

  @user1 @web
  Scenario: As an admin user I invite another user
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/button/span"
    Then I enter "guest@email.com" into input field having xpath "/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[1]/input"
    Then I click on element having xpath "/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[2]/span/select"
    Then I click on element having xpath "/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[2]/span/select/option[2]"
    Then I click on element having xpath "/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button/span"
    Then I should see text "guest@email.com"
