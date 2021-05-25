$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Pageobject.feature");
formatter.feature({
  "line": 1,
  "name": "Checking HRM login feature",
  "description": "",
  "id": "checking-hrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "checking-hrm-login-feature;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open chromebrowser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter correct \"username\" and correct \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Desired Page title OrangeHRM",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Browser tear down",
  "keyword": "Then "
});
formatter.match({
  "location": "PageObjectStepDef.open_chromebrowser_and_launch_application()"
});
formatter.result({
  "duration": 34275319104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "PageObjectStepDef.i_enter_correct_and_correct(String,String)"
});
formatter.result({
  "duration": 24697004062,
  "status": "passed"
});
formatter.match({
  "location": "PageObjectStepDef.Desired_page_title()"
});
formatter.result({
  "duration": 7090400,
  "status": "passed"
});
formatter.match({
  "location": "PageObjectStepDef.Browser_tear_down()"
});
formatter.result({
  "duration": 518656682,
  "status": "passed"
});
});