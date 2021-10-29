Feature: Testing the login feature with valid and invalid credentials

  Background: Navigate to the login page
    Given I navigate to the login page

    @Smoke
    Scenario Outline: Testing the login with correct test data
      When I type in the valid "<username>" and '<password>'
      Then The application should take me to my account screen
      Examples:
      |username                 |password         |
      |testingoszkar            |testingOszkar2021|
      |testingoszkar@gmail.com  |testingOszkar2021|

    @Smoke
    Scenario Outline: Testing the login with incorrect test data
      When I type in the invalid "<invusername>" and '<password>'
      Then I should see an error message
      Examples:
      |invusername    | password          |
      |testingOszkar  | invalidpw         |
      |invalidusername| testingOszkar2021 |
      |invalid        | invalid           |


