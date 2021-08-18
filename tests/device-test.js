const puppeteer = require('puppeteer')
describe('Device Emulation', () => {
    let browser
    let page

        before(async function(){
            browser = await puppeteer.launch({
                headless: false,
                slowMo: 10,
                devtools: false
            })
            page = await browser.newPage()
            await page.setDefaultTimeout(10000)
            await page.setDefaultNavigationTimeout(20000)
        })

        after(async function(){
            await browser.close()

        })
        it('Desktop device test', async function(){
            await page.setViewport({width:2000, height: 1000})
            await page.goto('https://example.com')
            await page.waitForTimeout(5000)
        })
        
        it('Tablet device test', async function(){
            const tablet = puppeteer.devices['iPad landscape']
            await page.emulate(tablet)
            await page.goto('https://example.com')
            await page.waitForTimeout(5000)
        })
        
        it('Mobile device test', async function(){
            const mobile = puppeteer.devices['iPhone X']
            await page.emulate(mobile)
            await page.goto('https://example.com')
            await page.waitForTimeout(5000)
        })
})

