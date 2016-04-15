Feature: Data Table Feature
In Order to learn data table feature
As a learner
I want to create an example

Scenario: Data table learning
Given I am a "learner"
When I was asked to learn "<data table>"
| Type      | Status               | 
| DataTable | Learning in progress |
| Basics    | Completed            |  
Then I have created this "feature file"
And I have been "learning" 
But I may end up seeing "lot of errors" 