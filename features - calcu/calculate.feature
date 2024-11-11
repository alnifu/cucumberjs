Feature: Add num

Scenario Outline: Adding <num1> and <num2> equals to <sum>
    Given I have <num1>
    When I add <num2>
    Then I get the sum of <sum>

    Examples:
        |num1   |num2   |num3   |
        |1      |2      |3      |
        |2      |2      |5      |
        |5      |5      |10     |
        |3      |5      |9      |