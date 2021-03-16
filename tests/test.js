const {SelectPage} = require("../pages/SelectPage");
const {chromium} = require("playwright");
const {CheckboxPage} = require("../pages/CheckboxPage");
const {SendTextPage} = require("../pages/SendTextPage");
const {RadioButtonsPage} = require("../pages/RadioButtonsPage");
const {SubmitWithLoadingPage} = require("../pages/SubmitWithLoadingPage");
const {ModalDemoPage} = require("../pages/ModalDemoPage");

let browser;
let page;

jest.setTimeout(50000);


beforeAll(async () => {
    return browser = await chromium.launch({headless: false, slowMo:50, timeout:40000});
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
    const sendTextPage = new SendTextPage(page);
    await sendTextPage.navigate();
    await sendTextPage.closePopup();
    await sendTextPage.inputTextToTextField("bla bla");
    await sendTextPage.clickShowMessageButton();
    await sendTextPage.compareVisibleTextWithExpected("bla bla");

});

test ('Test to send text and wait for result', async () => {
    const sendTextPage = new SubmitWithLoadingPage(page);
    await sendTextPage.navigate();
    await sendTextPage.clickSubmitButton();
    await sendTextPage.checkNameFieldValidation();
    await sendTextPage.inputTextToNameField("Testing name");
    await sendTextPage.inputTextToCommentField("Testing comment");
    await sendTextPage.clickSubmitButton();
    await sendTextPage.waitForResultAndCheck();

});


test ('Test for basic checkbox', async () => {
    const checkboxPage = new CheckboxPage(page);
    await checkboxPage.navigate();
    await checkboxPage.checkO();
    await checkboxPage.uncheckO();
});

test ('Test for basic modal', async () => {
    const ModalPage = new ModalDemoPage(page);
    await ModalPage.navigate();
    await ModalPage.clickLaunchModalForSingleModalExample();
    await ModalPage.checkIfSingleModalIsVisible();
    await ModalPage.clickSaveChangesButtonOnSingleModal();
    await ModalPage.checkIfSingleModalIsNotVisible();

});

test (" Test for simple radiobutton check", async () => {
   const radiobuttonPage = new RadioButtonsPage(page);
   await radiobuttonPage.navigate();
   await radiobuttonPage.checkSRadioButton("Female");
   await radiobuttonPage.checkSRadioButton("Male");

});

test ("Simple dropdown with days", async () => {
   const selectPage = new SelectPage(page);
   await selectPage.navigate();
   await selectPage.selectDayFromDropdown("Monday");
   await selectPage.checkSelectedDayText("Monday");
});

test ("States dropdown", async () => {
    //todo fixes needed
   const selectPage = new SelectPage(page);
   await selectPage.navigate();
   await selectPage.selectStateFromDropdown("Washington");
   await selectPage.clickFirstSelectedButton();
   await selectPage.checkSelectedStateText("Washington");
});
