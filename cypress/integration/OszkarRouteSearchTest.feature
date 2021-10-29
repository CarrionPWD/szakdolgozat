Feature: Testing the search adverts feature

  Background: I have logged into the application
    Given I logged into the application and Im on the search page

  @Smoke
  Scenario:The user wants to search for a route but taps the refresh button
    When The user fills the departure and destination search fields
    And  Clicks on the refresh button
    Then The form should be empty

  @Smoke
  Scenario:The user wants to search for a route and fills the form correctly
    When The user fills the departure, destination and date fields
    And  Clicks on the search button
    Then Results should be displayed

  @Smoke
  Scenario:Testing the detailed search feature
    When The user clicks on the detailed search button and fills the form
    And  Clicks on the advanced search button
    Then I should see the correct results