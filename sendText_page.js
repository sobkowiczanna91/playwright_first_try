class sendText_page {
    page;
    url = 'https://www.seleniumeasy.com/test/basic-first-form-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'
    userInput = 'xpath=//input[@id=\'user-message\']';
    showMsgBtn = 'xpath=//button[@onclick="showInput();"]';
    displayedText = 'xpath=//span[@id=\'display\']';


    constructor(page) {
        this.page = page;

    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async closePopup() {
        await this.page.click(this.popupXBtn);
        console.log("close popup clicked");
    }

    async inputTextToTextField(textToInput) {
        await this.page.click(this.userInput);
        await this.page.type(this.userInput, textToInput);
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

} module.exports = { sendText_page };

