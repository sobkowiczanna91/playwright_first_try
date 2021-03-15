const {CommonPage} = require("./CommonPage");

class SelectPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html";
    dayDropdown = "xpath=//select[@id='select-demo']"
    selectedDayDropdown = "xpath=//p[@class='selected-value']"

    constructor(page) {
        super(page);
    }

    async selectDayFromDropdown(day){
        await this.page.selectOption(this.dayDropdown, day);
        console.log(day + "selected");
    }

    async checkSelectedDayText(day){
        console.log("actual value: " + this.page.textContent(this.selectedDayDropdown));
        let selectedDay = await this.page.textContent(this.selectedDayDropdown);
        expect(selectedDay).toContain(day);
    }

} module.exports = {SelectPage}