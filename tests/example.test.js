const { expect } = require('chai')
const puppeteer = require('puppeteer')
const { click, getCount, getText, shouldNotExist } = require('../lib/helpers')


describe('My First Puppeteer Test', ()  => {
    let browser
    let page

    before(async function(){
        browser = await puppeteer.launch({
            headless: false, 
            slowMo: 10, 
            devtools:false,
        })  
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function(){
        await browser.close()
    })



    it('should launch the browser', async function() {    
        await page.goto('http://example.com/')
        await page.waitForXPath('//h1')
        
        const text = await getText(page, 'h1')
        const count = await getCount(page, 'p')
        
        expect(text).to.be.a('string', 'Example domain')
        expect(count).to.be.equal(2)

        //await page.waitForTimeout(1000)
        //await page.waitForSelector('h1')
        

       
       
        



        await page.goto('http://zero.webappsecurity.com/')
        //await page.waitForSelector('#signin_button')
        //await page.click('#signin_button')
        await click(page, '#signin_button')

        await shouldNotExist(page, '#signin_button')
        
        //await page.waitForResponse(() => !document.querySelector('#signin_button'))
        //await page.waitForSelector('#signin_button', {hidden: true, timeout:3000,})
        
    })
})
