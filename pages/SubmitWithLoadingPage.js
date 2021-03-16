const {CommonPage} = require("./CommonPage");

class SubmitWithLoadingPage extends CommonPage {

    url = 'https://www.seleniumeasy.com/test/ajax-form-submit-demo.html';
    nameTitle = 'xpath=//input[@id=\'title\']'
    comment = 'xpath=//textarea[@id=\'description\']'
    submitBtn = 'xpath=//input[@id=\'btn-submit\']'
    submitInfo = 'xpath=//div[@id=\'submit-control\']'

    constructor(page) {
        super(page);
    }

    async inputTextToNameField(name) {
        await this.inputText(name, this.nameTitle)
    }

    async inputTextToCommentField(name) {
        await this.inputText(name, this.comment)
    }

    async clickSubmitButton() {
        await this.page.click(this.submitBtn);
        console.log("submit button clicked");
    }

    async waitForResultAndCheck() {
        await this.page.waitForSelector("xpath=//*[text()='Form submited Successfully!']", {state: "attached"});
        await this.verifyIfFieldTextContains("Form submited Successfully!", this.submitInfo);
    }

    async checkNameFieldValidation() {
        expect(await this.page.getAttribute(this.nameTitle, "style")).toBe("border: 1px solid rgb(255, 0, 0);")
    }


} module.exports = { SubmitWithLoadingPage };

