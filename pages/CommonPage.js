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


} module.exports = {CommonPage}