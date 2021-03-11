const {CommonPage} = require("./CommonPage");

class RadioButtonsPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/basic-radiobutton-demo.html";
    radioButtonMale = '//input[@value=\'Female\']';
    radioButtonFemale = '//input[@value=\'Male\']';

    constructor(page) {
        super(page);
    }

    async checkRadioButton(option){
        console.log("option to select: ", option)

        expect(option == "Female" || option == "Male").toBe(true);

        switch(option){
            case "Female":
                console.log(option)
                await this.page.check(this.radioButtonFemale);
                console.log("option checked: " + await this.page.isChecked(this.radioButtonFemale));
                expect(await this.page.isChecked(this.radioButtonFemale));
                break;
            case "Male":
                console.log(option)
                await this.page.check(this.radioButtonMale);
                console.log("option checked: " + await this.page.isChecked(this.radioButtonMale));
                expect(await this.page.isChecked(this.radioButtonMale));
                break;
        }
    }


} module.exports = {RadioButtonsPage}