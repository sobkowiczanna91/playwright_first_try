const {chromium} = require("playwright");
let expect = require('expect');

class FirstPage {

    constructor(page) {
        this.page = page;
    }

    url = 'https://www.seleniumeasy.com/test/basic-first-form-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'
    userInput = 'xpath=//input[@id=\'user-message\']';
    showMsgBtn = 'xpath=//button[@onclick="showInput();"]';
    displayedText = 'xpath=//span[@id=\'display\']';

    async navigate() {
        await this.page.goto(this.url);
    }

    async closePopup() {
        await this.page.click(this.popupXBtn);
        console.log("close popup clicked");
    }

    async inputTextToTextField(textToInput) {
        await this.page.click(this.userInput);
        await this.page.screenshot(this.userInput);
        await this.page.type(this.userInput, textToInput);
        await this.page.screenshot(this.userInput);
        console.log("Text filled: " + textToInput)
    }

    async clickShowMessageButton() {
        await this.page.click(this.showMsgBtn);
        console.log("show message button clicked");
    }

    async compareVisibleTextWithExpected(textToInput) {
        let userInput = await this.page.textContent(this.displayedText);
        console.log("Text from page: " + userInput)
        expect(userInput).toContain(textToInput);
    }

} module.exports = { FirstPage };


(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const firstPage1 = new FirstPage(page);
    await firstPage1.navigate();
    await firstPage1.closePopup();
    await firstPage1.inputTextToTextField("bla bla")
    await firstPage1.clickShowMessageButton()
    await firstPage1.compareVisibleTextWithExpected("bla bla")
    await browser.close();
})();
