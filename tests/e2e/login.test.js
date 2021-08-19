const { expect } = require('chai')
const puppeteer = require('puppeteer')
const { click, getCount, getText, shouldNotExist } = require('../../lib/helpers')


describe('Login test', ()  => {
    let browser
    let page

    before(async function(){
        browser = await puppeteer.launch({
            headless: true, 
            slowMo: 0, 
            devtools:false,
            ignoreHTTPSErrors: true,
        })  
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function(){
        await browser.close()
    })



    it('Login Test - Invalid Credentials', async function(){
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.waitForSelector('#signin_button')
        await click(page, '#signin_button')
        await page.waitForSelector('#login_form');
        //Enter Username........
        await page.type('#user_login', 'Invalid UserName');
        await page.type('#user_password', 'Invalid Password');
        await page.click('#user_remember_me')
        await page.click('input[type="submit"]');
        await page.waitForSelector('.alert-error');
        /*
        let ErrorMessage = await page.$eval('.alert-error', element=>element.textContent);
        //Verify text...
        console.log(ErrorMessage);
        expect(ErrorMessage).to.include('wrong');
        */
    })
    it('Login Test - Valid Credentials', async function(){
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.waitForSelector('#signin_button')
        await click(page, '#signin_button')
        await page.waitForSelector('#login_form');
        //Enter Username........
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('#user_remember_me')
        await page.click('input[type="submit"]');
        await page.waitForSelector('#settingsBox');
        /*
        let ErrorMessage = await page.$eval('.alert-error', element=>element.textContent);
        //Verify text...
        console.log(ErrorMessage);
        expect(ErrorMessage).to.include('wrong');
        */
    })
    

})
