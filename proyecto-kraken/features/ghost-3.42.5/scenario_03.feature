Feature: Delete Post

  @user1 @web
  Scenario: As an admin user I delete a post
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[2]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/a/span"
    Then I enter "New Test Post Title" into input field having xpath "/html/body/div[2]/div/main/section/div[1]/div[1]/textarea"
    Then I enter "This is the content of the post" into input field having xpath "/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/div/div[1]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/section/ol/li[2]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/button"
    Then I click on element having xpath "/html/body/div[4]/div[1]/div/div/div/div/div[1]/div/div[1]/div[2]/form/button"
    Then I click on element having xpath "/html/body/div[4]/div[3]/div/div/div/div[2]/section/div[2]/button[2]"
    Then I should see text "All posts"