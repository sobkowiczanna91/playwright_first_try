const {CommonPage} = require("./CommonPage");

class SendTextPage extends CommonPage {

    url = 'https://www.seleniumeasy.com/test/basic-first-form-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'
    userInput = 'xpath=//input[@id=\'user-message\']';
    showMsgBtn = 'xpath=//button[@onclick="showInput();"]';
    displayedText = 'xpath=//span[@id=\'display\']';

    constructor(page) {
        super(page);
    }

    async closePopup() {
        await this.page.click(this.popupXBtn);
        console.log("close popup clicked");
    }

    async inputTextToTextField(textToInput) {
        await this.inputText(textToInput, this.userInput)
    }

    async clickShowMessageButton() {
        await this.page.click(this.showMsgBtn);
        console.log("show message button clicked");
    }

    async compareVisibleTextWithExpected(textToInput) {
        await this.verifyIfFieldTextContains(textToInput, this.displayedText);
    }

} module.exports = { SendTextPage };

