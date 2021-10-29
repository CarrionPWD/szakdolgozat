Feature: Testing the passenger ad feature

  Background: I have logged into the application
    Given I logged into the application and Im on the passenger advert page

  @Smoke
  Scenario:The user wants to post a passenger advert, but doesn't fill the form correctly
    When The user doesnt fill the destination
    And  Clicks on the post button
    Then An error message should be displayed

  @Smoke
  Scenario:The user wants to post a passenger advert, but doesn't fill the form correctly
    When The user chooses a past date
    And  Clicks on the post button
    Then A date error message should be displayed

  @Smoke
  Scenario:Testing the home button after filling some fields
    When The user fills the departure and destination fields
    And  Clicks on the Oszkar logo button
    Then I should see the main menu