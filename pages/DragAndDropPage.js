const {CommonPage} = require("./CommonPage");

class DragAndDropPage extends CommonPage{

    url = "https://www.seleniumeasy.com/test/drag-and-drop-demo.html";
    item1Dropped = "xpath=//*[@id='droppedlist']//span[text()='Draggable 1']"
    item1ToDrag = "xpath=//*[@id='todrag']//span[text()='Draggable 1']"
    item2Dropped = "xpath=//*[@id='droppedlist']//span[text()='Draggable 2']"
    item2ToDrag = "xpath=//*[@id='todrag']//span[text()='Draggable 2']"
    item3Dropped = "xpath=//*[@id='droppedlist']//span[text()='Draggable 3']"
    item3ToDrag = "xpath=//*[@id='todrag']//span[text()='Draggable 3']"
    item4Dropped = "xpath=//*[@id='droppedlist']//span[text()='Draggable 4']"
    item4ToDrag = "xpath=//*[@id='todrag']//span[text()='Draggable 4']"

    dropzone = "xpath=//div[@id='mydropzone']"

    constructor(page) {
        super(page);
    }

    // todo, how to use in JS? Playwright not support


} module.exports = { DragAndDropPage };
