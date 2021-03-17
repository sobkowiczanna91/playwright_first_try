const {CommonPage} = require("./CommonPage");

class AlertPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/javascript-alert-box-demo.html";
    alertButton = "xpath=//button[@onclick='myAlertFunction()']"
    promptButton = "xpath=//button[@onclick='myPromptFunction()']"
    confirmBoxButton = "xpath=//button[@onclick='myConfirmFunction()']"

    constructor(page) {
        super(page);
    }

    async clickButton(button){
        switch(button){
            case "Alert":
                await this.page.click(this.alertButton);
                console.log("click for Alert");
            case "Confirm Box":
                await this.page.click(this.confirmBoxButton);
                console.log("click for Confirm Box");
            case "Prompt":
                await this.page.click(this.promptButton);
                console.log("click for Prompt");
        }
    }


} module.exports = { AlertPage };


