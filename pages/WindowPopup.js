const {CommonPage} = require("./CommonPage");

class WindowPopup extends CommonPage{

    url = "https://www.seleniumeasy.com/test/window-popup-modal-demo.html";
    urlPopup = "https://twitter.com/intent/follow?screen_name=seleniumeasy";
    followOnTwitterBtn = "xpath=//a[@href='https://twitter.com/intent/follow?screen_name=seleniumeasy']"
    text = "xpath=//*[text()='Aby zacząć kogoś obserwować, musisz się zalogować.']"
    popup;

    constructor(page) {
        super(page);
    }

    async clickFollowOnTwitterBtn(){
        await this.page.click(this.followOnTwitterBtn);
        console.log("Follow on twitter button clicked");
    }

    async checkIfTwitterFollowPageIsOpened() {
       this.popup = await this.page.waitForEvent('popup');
       await this.popup.waitForLoadState();
       await this.popup.isVisible(this.text);
       console.log("Twitter popup is loaded");
    }

    async closeTwitterFollowPage() {
        await this.popup.close();
        console.log("Twitter popup is closed");
    }


} module.exports = { WindowPopup };
