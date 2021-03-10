let homepage = require('../pages/homepage')

describe("Demo Calculator Fucntion Test", function () {

    it("Addition Test", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verfyResult('7');

        browser.sleep(3000);

    });

    it("Subtraction Test", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo1();

        homepage.verfyResult('7');

        browser.sleep(2000);

    });


});







  