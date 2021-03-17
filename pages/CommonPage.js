class CommonPage{
    page;
    url;

    constructor(page, url) {
        this.page = page;
        this.url = url;
    }

    async navigate() {
        await this.page.goto(this.url, {timeout: 40000, waitUntil:"load"} );
        console.log("Navigate to: ", this.url)
        await this.page.waitForLoadState('load');
    }

    async inputText(textToInput, fieldToInput) {
        await this.page.click(fieldToInput);
        await this.page.type(fieldToInput, textToInput);
        console.log("Text filled: " + textToInput);
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

    async checkRadiobutton(radiobutton){
        await this.page.check(radiobutton);
        console.log("option checked: " + await this.page.isChecked(radiobutton));
        expect(await this.page.isChecked(radiobutton));
    }

    async verifyIfFieldTextContains(expectedText, field) {
        let textFromField = await this.page.textContent(field);
        console.log("Text from page: " + textFromField);
        expect(textFromField).toContain(expectedText);
    }

    async verifyIfFieldTextEquals(expectedText, field) {
        let textFromField = await this.page.textContent(field);
        console.log("Text from page: " + textFromField);
        expect(textFromField).toEqual(expectedText);
    }

    async acceptVisibleModal() {
        await this.page.on('dialog', async dialog => {
            console.log(dialog.accept());
        });
        console.log("Modal accepted");
    }

    async dismissVisibleModal() {
        await this.page.on('dialog', async dialog => {
            console.log(dialog.dismiss());
        });
        console.log("Modal dismissed");
    }


} module.exports = {CommonPage}