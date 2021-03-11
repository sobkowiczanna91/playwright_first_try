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

    async checkCheckbox(checkbox){
        console.log("Checkbox to check: ", checkbox)
        expect(await this.page.isChecked(checkbox)).toBeFalsy();
        await this.page.check(checkbox);
        console.log("option checked: " + await this.page.isChecked(checkbox));
        expect(await this.page.isChecked(checkbox)).toBeTruthy();
        console.log("Checkbox is checked");
    }

    async uncheckCheckbox(checkbox){
        expect(await this.page.isChecked(checkbox)).toBeTruthy();
        await this.page.uncheck(checkbox);
        console.log("option checked: " + await this.page.isChecked(checkbox));
        expect(await this.page.isChecked(checkbox)).toBeFalsy();
        console.log("Checkbox is unchecked");
    }

    async uncheckO() {
        await this.uncheckCheckbox(this.checkbox0);
    }

} module.exports = { CheckboxPage };


