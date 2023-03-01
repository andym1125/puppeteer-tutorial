const puppeteer = require('puppeteer')
async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    
    const names = ['red', 'yellow', 'blue']

    await browser.close()
}

start()