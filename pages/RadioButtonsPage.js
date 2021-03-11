const {CommonPage} = require("./CommonPage");

class RadioButtonsPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/basic-radiobutton-demo.html";
    radioButtonMale = '//input[@value=\'Female\']';
    radioButtonFemale = '//input[@value=\'Male\']';

    constructor(page) {
        super(page);
    }

    async checkSRadioButton(option){
        console.log("option to select: ", option)

        expect(option === "Female" || option === "Male").toBe(true);

        switch(option){
            case "Female":
                console.log(option)
                await this.checkRadiobutton(this.radioButtonFemale);
                break;
            case "Male":
                await this.checkRadiobutton(this.radioButtonMale);
                break;
        }
    }


} module.exports = {RadioButtonsPage}