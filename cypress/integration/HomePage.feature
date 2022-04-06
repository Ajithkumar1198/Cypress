Feature: web site open

   I want open the Testleaf Website

   Scenario Outline:  OPen the Website
      Given open Testleaf url
      Then Check the page Title
      And click edit view
      And check the Testleaflogo
      And enter email id "<email>"
      Examples:
         | email       |
         | ajith@gmail |