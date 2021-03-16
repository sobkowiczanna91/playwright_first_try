const {CommonPage} = require("./CommonPage");

class ModalDemoPage extends CommonPage {

    url = 'https://www.seleniumeasy.com/test/bootstrap-modal-demo.html';
    singleModalContent  = 'xpath=//div[@id=\'myModal0\']';
    multipleModalContent  = 'xpath=//div[@id=\'myModal\']';
    singleModalSaveChangesBtn  = 'xpath=//*[@id="myModal0"]/div/div/div[4]/a[2]';
    singleModalBtn  = 'xpath=//a[@href=\'#myModal0\']';
    multipleModalBtn  = 'xpath=//a[@href=\'#myModal\']';

    constructor(page) {
        super(page);
    }


    async clickLaunchModalForSingleModalExample() {
        await this.page.click(this.singleModalBtn);
        console.log("Single Modal Example - modal button clicked");
    }

    async clickLaunchModalForMultipleModalExample() {
        await this.page.click(this.multipleModalBtn);
        console.log("Multiple  Modal Example - modal button clicked");
    }

    async clickSaveChangesButtonOnSingleModal() {
        await this.page.click(this.singleModalSaveChangesBtn);
        console.log("Single Modal  - Save Changes button clicked");
    }

    async checkIfSingleModalIsVisible() {
        await this.page.waitForSelector(this.singleModalContent, {state: "visible"});
        await expect(await this.page.isVisible(this.singleModalContent)).toBeTruthy();
    }

    async checkIfSingleModalIsNotVisible() {
        await this.page.waitForSelector(this.singleModalContent, {state: "hidden"});
        await expect(await this.page.isVisible(this.singleModalContent)).toBeFalsy();
    }

    async checkIfMultipleModalIsVisible() {
        await this.page.waitForSelector(this.multipleModalContent, {state: "visible"});
        await expect(await this.page.isVisible(this.multipleModalContent)).toBeTruthy();
    }

    async checkIfMultipleModalIsNotVisible() {
        await this.page.waitForSelector(this.multipleModalContent, {state: "hidden"});
        await expect(await this.page.isVisible(this.multipleModalContent)).toBeFalsy();
    }

} module.exports = { ModalDemoPage };

