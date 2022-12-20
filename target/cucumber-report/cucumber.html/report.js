$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a user I want to add a product in cart successfully",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4138133300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate computer page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 110452399,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 879648300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verifyText(String)"
});
formatter.result({
  "duration": 34787400,
  "status": "passed"
});
formatter.after({
  "duration": 735208700,
  "status": "passed"
});
formatter.before({
  "duration": 2487873600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate desktop page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Desktops\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 878873501,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 361564200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 31695501,
  "status": "passed"
});
formatter.after({
  "duration": 702319600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2213929499,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 855455701,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 381177500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.clickOnProductName(String)"
});
formatter.result({
  "duration": 845892500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.selectProcessor(String)"
});
formatter.result({
  "duration": 128819700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectRAM(String)"
});
formatter.result({
  "duration": 89978101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectHDD(String)"
});
formatter.result({
  "duration": 59325901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.selectOS(String)"
});
formatter.result({
  "duration": 64878901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.selectSoftware(String)"
});
formatter.result({
  "duration": 68619900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 54826800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 228821800,
  "status": "passed"
});
formatter.after({
  "duration": 753903901,
  "status": "passed"
});
formatter.before({
  "duration": 2359704400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 154300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 875887701,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 381445299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.clickOnProductName(String)"
});
formatter.result({
  "duration": 746142000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.selectProcessor(String)"
});
formatter.result({
  "duration": 96949800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectRAM(String)"
});
formatter.result({
  "duration": 92610500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectHDD(String)"
});
formatter.result({
  "duration": 71456000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.selectOS(String)"
});
formatter.result({
  "duration": 65608100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.selectSoftware(String)"
});
formatter.result({
  "duration": 66226501,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 52197100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 669538100,
  "status": "passed"
});
formatter.after({
  "duration": 717693100,
  "status": "passed"
});
formatter.before({
  "duration": 2239528700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 228700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 906734300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 816419601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.clickOnProductName(String)"
});
formatter.result({
  "duration": 722446301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.selectProcessor(String)"
});
formatter.result({
  "duration": 78822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectRAM(String)"
});
formatter.result({
  "duration": 78503999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectHDD(String)"
});
formatter.result({
  "duration": 60577400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.selectOS(String)"
});
formatter.result({
  "duration": 53638001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.selectSoftware(String)"
});
formatter.result({
  "duration": 85742600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 62430099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 225403400,
  "status": "passed"
});
formatter.after({
  "duration": 714204400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2228971201,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should able to see the message \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 50999,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 841014701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 34
    }
  ],
  "location": "LoginSteps.iShouldAbleToSeeTheMessage(String)"
});
formatter.result({
  "duration": 36846501,
  "status": "passed"
});
formatter.after({
  "duration": 705081100,
  "status": "passed"
});
formatter.before({
  "duration": 1861990600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the error message with inValid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abc100@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc100\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "CLick on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 40401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 387677800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc100@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 76154500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc100",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 68913400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 313262200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 36305900,
  "status": "passed"
});
formatter.after({
  "duration": 715003500,
  "status": "passed"
});
formatter.before({
  "duration": 2299557601,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should login with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"john009@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"John@001\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "CLick on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify logout link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 821551600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john009@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 74731000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John@001",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 70861400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 977347699,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogoutLinkIsDisplayed()"
});
formatter.result({
  "duration": 39126000,
  "status": "passed"
});
formatter.after({
  "duration": 709571499,
  "status": "passed"
});
formatter.before({
  "duration": 2145004201,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter email \"john009@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter password \"John@001\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "CLick on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify login link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 388975600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john009@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 74793200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John@001",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 70301099,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 583820799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLogoutLink()"
});
formatter.result({
  "duration": 534947001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginLinkIsDisplayed()"
});
formatter.result({
  "duration": 30214999,
  "status": "passed"
});
formatter.after({
  "duration": 717426100,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I want to register in to nop commerce successfully",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2002845400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate register page successfully",
  "description": "",
  "id": "register-test;user-should-navigate-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should able to see \"Register\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 819615701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iShouldAbleToSeeText(String)"
});
formatter.result({
  "duration": 35303701,
  "status": "passed"
});
formatter.after({
  "duration": 704899100,
  "status": "passed"
});
formatter.before({
  "duration": 2082195100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify first name last name email password confirm password field are mandatory",
  "description": "",
  "id": "register-test;verify-first-name-last-name-email-password-confirm-password-field-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the first error message \"First name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the second error message \"Last name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the third error message \"Email is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the fourth error message \"Password is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the sixth error message \"Password is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 398092900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 71317301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.verifyTheFirstErrorMessage(String)"
});
formatter.result({
  "duration": 43867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 33
    }
  ],
  "location": "RegisterSteps.verifyTheSecondErrorMessage(String)"
});
formatter.result({
  "duration": 49430500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.verifyTheThirdErrorMessage(String)"
});
formatter.result({
  "duration": 53711499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 33
    }
  ],
  "location": "RegisterSteps.verifyTheFourthErrorMessage(String)"
});
formatter.result({
  "duration": 66522000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.verifyTheSixthErrorMessage(String)"
});
formatter.result({
  "duration": 73425099,
  "status": "passed"
});
formatter.after({
  "duration": 738673599,
  "status": "passed"
});
formatter.before({
  "duration": 2204470200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Select gender",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter first name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter last name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select day month and year",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter email",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 870763900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.selectGender()"
});
formatter.result({
  "duration": 61815701,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterFirstName()"
});
formatter.result({
  "duration": 67562200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterLastName()"
});
formatter.result({
  "duration": 66944100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.selectDayMonthAndYear()"
});
formatter.result({
  "duration": 249841001,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterEmail()"
});
formatter.result({
  "duration": 82588101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterPassword()"
});
formatter.result({
  "duration": 88696600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterConfirmPassword()"
});
formatter.result({
  "duration": 75385901,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 525206000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 30198500,
  "status": "passed"
});
formatter.after({
  "duration": 723860900,
  "status": "passed"
});
});