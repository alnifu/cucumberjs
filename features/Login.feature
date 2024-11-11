Feature: Login functionality

  Scenario: Display error when username is empty
    Given I open the login page
    When I enter "password1" as password
    And I click on the login button
    Then I should see "Username is empty"

  Scenario: Display error for wrong password
    Given I open the login page
    When I enter "user1" as username
    And I enter "wrongpassword" as password
    And I click on the login button
    Then I should see "Wrong password"

  Scenario: Display error for non-existing username
    Given I open the login page
    When I enter "wronguser" as username
    And I enter "password1" as password
    And I click on the login button
    Then I should see "Username does not exist"

  Scenario: Successful login
    Given I open the login page
    When I enter "user1" as username
    And I enter "password1" as password
    And I click on the login button
    Then I should be on the success page    