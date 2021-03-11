class CommonPage{
    page;
    url;

    constructor(page, url) {
        this.page = page;
        this.url = url;
    }

    async navigate() {
        await this.page.goto(this.url);
        console.log("Navigate to: ", this.url)
    }

} module.exports = {CommonPage}