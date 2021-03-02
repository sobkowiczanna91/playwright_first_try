const {chromium} = require("playwright");
let expect = require('expect');

class CheckboxPage {

    constructor(page) {
        this.page = page;
    }

    url = 'https://www.seleniumeasy.com/test/basic-checkbox-demo.html';
    popupXBtn = 'xpath=//*[@title=\'Close\']'
    checkbox0 = 'xpath=//input[@id=\'isAgeSelected\']';


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


(async () => {
    const browser = await chromium.launch({headless: false, slowMo:20});
    const page = await browser.newPage();
    const firstPage1 = new CheckboxPage(page);
    await firstPage1.navigate();
    // await firstPage1.closePopup();
    await firstPage1.checkO();
    await page.screenshot();
    await firstPage1.uncheckO();
    await browser.close();
})();

