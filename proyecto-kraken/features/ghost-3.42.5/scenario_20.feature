Feature: Design - Delete Menu

  @user1 @web
  Scenario: As an admin user I add a menu
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[3]/a"
    Then I enter "One More Test Menu" into input field having xpath "/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[5]/div/button"
    Then I should see text "Saved"
