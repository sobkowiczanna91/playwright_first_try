class CheckboxPage {
    page;
    url = 'https://www.seleniumeasy.com/test/basic-checkbox-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'
    checkbox0 = 'xpath=//input[@id=\'isAgeSelected\']';

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

    async checkO() {
        expect(await this.page.isChecked(this.checkbox0)).toBeFalsy();
        await this.page.check(this.checkbox0);
        expect(await this.page.isChecked(this.checkbox0)).toBeTruthy();
    }

    async uncheckO() {
        expect(await this.page.isChecked(this.checkbox0)).toBeTruthy();
        await this.page.uncheck(this.checkbox0);
        expect(await this.page.isChecked(this.checkbox0)).toBeFalsy();
    }

} module.exports = { CheckboxPage };


