const {CommonPage} = require("./CommonPage");

class SelectPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html";
    dropdown = "id='select-demo'"

    constructor(page) {
        super(page);
    }

    //todo select methods

} module.exports = {SelectPage}