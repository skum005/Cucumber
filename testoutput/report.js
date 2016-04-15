$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/basics/developer.feature");
formatter.feature({
  "line": 1,
  "name": "Life of Developer",
  "description": "In Order to get good salary\r\nAs a IT guy \r\nI want to keep my skills enhanced",
  "id": "life-of-developer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "I am working at Microsoft",
  "description": "",
  "id": "life-of-developer;i-am-working-at-microsoft",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am working at \"\u003cCompany\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I see my boss \"\u003cCEO\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get \"\u003cResponse\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he is \"\u003cReply\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "life-of-developer;i-am-working-at-microsoft;",
  "rows": [
    {
      "cells": [
        "Company",
        "CEO",
        "Response",
        "Reply"
      ],
      "line": 13,
      "id": "life-of-developer;i-am-working-at-microsoft;;1"
    },
    {
      "cells": [
        "Apple",
        "Steve Jobs",
        "Excited",
        "Cool"
      ],
      "line": 14,
      "id": "life-of-developer;i-am-working-at-microsoft;;2"
    },
    {
      "cells": [
        "Microsoft",
        "Bill Gates",
        "Scared",
        "Cunning"
      ],
      "line": 15,
      "id": "life-of-developer;i-am-working-at-microsoft;;3"
    },
    {
      "cells": [
        "Infosys",
        "Vishal",
        "Surprised",
        "Awesome"
      ],
      "line": 16,
      "id": "life-of-developer;i-am-working-at-microsoft;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "I am working at Microsoft",
  "description": "",
  "id": "life-of-developer;i-am-working-at-microsoft;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am working at \"Apple\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I see my boss \"Steve Jobs\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get \"Excited\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he is \"Cool\"",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 17
    }
  ],
  "location": "DeveloperClass.myDev(String)"
});
formatter.result({
  "duration": 710513545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steve Jobs",
      "offset": 15
    }
  ],
  "location": "DeveloperClass.myDev1(String)"
});
formatter.result({
  "duration": 365365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Excited",
      "offset": 7
    }
  ],
  "location": "DeveloperClass.myDev2(String)"
});
formatter.result({
  "duration": 690133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cool",
      "offset": 7
    }
  ],
  "location": "DeveloperClass.myDev3(String)"
});
formatter.result({
  "duration": 6581232,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I am working at Microsoft",
  "description": "",
  "id": "life-of-developer;i-am-working-at-microsoft;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am working at \"Microsoft\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I see my boss \"Bill Gates\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get \"Scared\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he is \"Cunning\"",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft",
      "offset": 17
    }
  ],
  "location": "DeveloperClass.myDev(String)"
});
formatter.result({
  "duration": 3138030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bill Gates",
      "offset": 15
    }
  ],
  "location": "DeveloperClass.myDev1(String)"
});
formatter.result({
  "duration": 4788004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scared",
      "offset": 7
    }
  ],
  "location": "DeveloperClass.myDev2(String)"
});
formatter.result({
  "duration": 4014345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cunning",
      "offset": 7
    }
  ],
  "location": "DeveloperClass.myDev3(String)"
});
formatter.result({
  "duration": 3012043,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I am working at Microsoft",
  "description": "",
  "id": "life-of-developer;i-am-working-at-microsoft;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am working at \"Infosys\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I see my boss \"Vishal\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get \"Surprised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he is \"Awesome\"",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Infosys",
      "offset": 17
    }
  ],
  "location": "DeveloperClass.myDev(String)"
});
formatter.result({
  "duration": 727463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vishal",
      "offset": 15
    }
  ],
  "location": "DeveloperClass.myDev1(String)"
});
formatter.result({
  "duration": 189914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surprised",
      "offset": 7
    }
  ],
  "location": "DeveloperClass.myDev2(String)"
});
formatter.result({
  "duration": 163317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Awesome",
      "offset": 7
    }
  ],
  "location": "DeveloperClass.myDev3(String)"
});
formatter.result({
  "duration": 174049,
  "status": "passed"
});
formatter.uri("com/basics/housewife.feature");
formatter.feature({
  "line": 1,
  "name": "Housewife needs",
  "description": "In Order to survive \r\nAs a IT husband\r\nI want to understand the housewife needs",
  "id": "housewife-needs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "I am a Working housewife",
  "description": "",
  "id": "housewife-needs;i-am-a-working-housewife",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am a working \"housewife\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I give \"order\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "my husband should get \"scared\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "he should \"listen\" to me",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "he is also \"cunning\"",
  "keyword": "But "
});
formatter.uri("com/basics/test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Feature1",
  "description": "\r\nIn Order to survive\r\nAs a IT employee\r\nI want to understand the concepts of cucumber",
  "id": "test-feature1",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "I am good tester",
  "description": "",
  "id": "test-feature1;i-am-good-tester",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am \"good\" tester",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I go to office",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see lot of \"challenging\" work",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I find it \"inspiring\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "sometimes it is \"boring\"",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 6
    }
  ],
  "location": "TestClass.testMyStuff(String)"
});
formatter.result({
  "duration": 872116,
  "status": "passed"
});
formatter.match({
  "location": "TestClass.testMyStuff1()"
});
formatter.result({
  "duration": 127387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "challenging",
      "offset": 14
    }
  ],
  "location": "TestClass.testMyStuff2(String)"
});
formatter.result({
  "duration": 239843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inspiring",
      "offset": 11
    }
  ],
  "location": "TestClass.testMyStuff3(String)"
});
formatter.result({
  "duration": 205780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "boring",
      "offset": 17
    }
  ],
  "location": "TestClass.testMyStuff4(String)"
});
formatter.result({
  "duration": 1017702,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I am bad tester",
  "description": "",
  "id": "test-feature1;i-am-bad-tester",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am \"bad\" tester",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I go to office",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see lot of \"irritated\" work",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I find it \"shitty\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "sometimes it is \"challenging\"",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "bad",
      "offset": 6
    }
  ],
  "location": "TestClass.testMyStuff(String)"
});
formatter.result({
  "duration": 183382,
  "status": "passed"
});
formatter.match({
  "location": "TestClass.testMyStuff1()"
});
formatter.result({
  "duration": 92391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "irritated",
      "offset": 14
    }
  ],
  "location": "TestClass.testMyStuff2(String)"
});
formatter.result({
  "duration": 368165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shitty",
      "offset": 11
    }
  ],
  "location": "TestClass.testMyStuff3(String)"
});
formatter.result({
  "duration": 199715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "challenging",
      "offset": 17
    }
  ],
  "location": "TestClass.testMyStuff4(String)"
});
formatter.result({
  "duration": 169384,
  "status": "passed"
});
});