const {CommonPage} = require("./CommonPage");

class SelectPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html";
    dayDropdown = "xpath=//select[@id='select-demo']"
    statesDropdown = "xpath=//select[@id='multi-select']"
    getAllSelectedButton = "xpath=//button[@id='printAll']"
    selectedDaysLabel = "xpath=//p[@class='selected-value']"
    selectedStatesLabel = "xpath=//p[text='getall-selected']"

    constructor(page) {
        super(page);
    }

    async selectDayFromDropdown(day){
        await this.page.selectOption(this.dayDropdown, day);
        console.log(day + " selected");
    }

    async selectStateFromDropdown(state){
        await this.page.selectOption(this.statesDropdown, {value: state});
        console.log(state + " selected");
    }

    async checkSelectedDayText(day){
        console.log("actual selected day value: " + this.page.textContent(this.selectedDaysLabel));
        let selectedDay = await this.page.textContent(this.selectedDaysLabel);
        expect(selectedDay).toContain(day);
    }

    async checkSelectedStateText(state){
        console.log("actual selected States text: " + await this.page.textContent(this.selectedStatesLabel));
        let selectedDay = await this.page.textContent(this.selectedStatesLabel);
        expect(selectedDay).toContain(state);

    }

    async clickGetAllSelectedButton() {
        //todo
        await this.page.focus(this.getAllSelectedButton);
        console.log("actual getAllSelectedButton value: " + await this.page.textContent(this.getAllSelectedButton));
        await expect( await this.page.textContent(this.getAllSelectedButton)==="Get All Selected").toBeTruthy();
        await this.page.click(this.getAllSelectedButton);
        console.log("Get All Selected button clicked");
    }

} module.exports = {SelectPage}