if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I enter "([^\"]*)" into input field having xpath "([^\"]*)"$/) do |text, xpath|
    @driver.find_element(:xpath, xpath).send_keys(text)
    sleep 2
  end

  Then(/^I click on element having xpath "([^\"]*)"$/) do |xpath|
    @driver.find_element(:xpath, xpath).click
    sleep 2
  end

end
