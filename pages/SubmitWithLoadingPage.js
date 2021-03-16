const {CommonPage} = require("./CommonPage");

class SubmitWithLoadingPage extends CommonPage {

    url = 'https://www.seleniumeasy.com/test/ajax-form-submit-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'

    constructor(page) {
        super(page);
    }

    async inputTextToField(textToInput) {
        //todo extract to common
        await this.page.click(this.userInput);
        await this.page.clear(this.userInput);
        await this.page.type(this.userInput, textToInput);
        console.log("Text filled: " + textToInput);
    }

    async clickShowMessageButton() {
        await this.page.click(this.showMsgBtn);
        console.log("show message button clicked");
    }

    async compareVisibleTextWithExpected(textToInput) {
        //todo extract to common
        let userInput = await this.page.textContent(this.displayedText);
        console.log("Text from page: " + userInput);
        expect(userInput).toContain(textToInput);
    }

} module.exports = { SubmitWithLoadingPage };

