Feature: Publish Post

  @user1 @web
  Scenario: As an admin user I publish a post
    Given I navigate to page "<WEB_PAGE>"
    Then I enter "<EMAIL>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input"
    Then I enter "<PASSWORD>" into input field having xpath "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input"
    Then I click on element having xpath "/html/body/div[2]/div/main/div/div/section/form/button/span"
    Then I click on element having xpath "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[2]/a"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/a/span"
    Then I enter "Test Post Title" into input field having xpath "/html/body/div[2]/div/main/section/div[1]/div[1]/textarea"
    Then I enter "This is the content of the post" into input field having xpath "/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div"
    Then I click on element having xpath "/html/body/div[2]/div/main/section/header/section/div/div[1]/span"
    Then I click on element having xpath "/html/body/div[1]/div/footer/button[2]/span"
    Then I click on element having xpath "/html/body/div[2]/div/aside/article/div/a"
    Then I should see text "Test Post Title"