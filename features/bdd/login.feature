Feature: Login

  Scenario Outline: As a user, I can login

    Given I am on the login page
    When I click login with google
    When I input email "mariansyah.riwendi@nusantara.technology"
    When I click next
