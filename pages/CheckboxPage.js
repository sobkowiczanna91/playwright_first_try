const {CommonPage} = require("./CommonPage");

class CheckboxPage extends CommonPage{

    url = 'https://www.seleniumeasy.com/test/basic-checkbox-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'
    checkbox0 = 'xpath=//input[@id=\'isAgeSelected\']';

    constructor(page) {
        super(page);
    }

    async closePopup() {
        await this.page.click(this.popupXBtn);
        console.log("close popup clicked");
    }

    async checkO() {
        await this.checkCheckbox(this.checkbox0);
    }

    async uncheckO() {
        await this.uncheckCheckbox(this.checkbox0);
    }

} module.exports = { CheckboxPage };


