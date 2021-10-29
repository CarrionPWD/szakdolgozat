Feature: Testing the account page if all elements are present

  Background: I have logged into the application
    Given I logged into the application

    @Smoke
    Scenario:The user has logged in and on the account page
      When Im on the my account page
      Then I should see all elements are present