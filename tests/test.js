const {chromium} = require("playwright");
const {CheckboxPage} = require("../checkbox_page");
const {sendText_page} = require("../sendText_page");

let browser;
let page;

beforeAll(async () => {
    return browser = await chromium.launch({headless: false, slowMo:20});
});

afterAll(async () => {
    return await browser.close();
});

beforeEach(async () => {
    return page = await browser.newPage();
});

afterEach(async () => {
    return await page.close();
});


test ('Test to simply send text', async () => {
    const sendtext_page = new sendText_page(page);
    await sendtext_page.navigate();
    await sendtext_page.closePopup();
    await sendtext_page.inputTextToTextField("bla bla");
    await sendtext_page.clickShowMessageButton();
    await sendtext_page.compareVisibleTextWithExpected("bla bla");

});


test ('Test for basic checkbox', async () => {
    const checkbox_page = new CheckboxPage(page);
    await checkbox_page.navigate();
    await checkbox_page.checkO();
    await checkbox_page.uncheckO();
});
