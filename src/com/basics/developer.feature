Feature: Life of Developer
In Order to get good salary
As a IT guy 
I want to keep my skills enhanced

Scenario Outline: I am working at Microsoft
Given I am working at "<Company>"
When I see my boss "<CEO>"
Then I get "<Response>"
But he is "<Reply>"

 Examples:
 | Company    | CEO         | Response    | Reply          |
 | Apple      | Steve Jobs  | Excited     | Cool           | 
 | Microsoft  | Bill Gates  | Scared      | Cunning        | 
 | Infosys    | Vishal      | Surprised   | Awesome        |