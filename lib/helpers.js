module.exports = {
    click: async function(page, selector){
        try{
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },
    getText: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector, element => element.innerHTML)
        } catch (error) {
            throw new Error(`Could not get text on selector: ${selector}`)
        }
    },
    getCount: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, element => element.length)
        } catch (error) {
            throw new Error(`Could not count on selector: ${selector}`)
        }
    },
    typeText: async function(page, selector, text){
        try{
            await page.waitForSelector(selector);
            await page.type(selector,text);
        }catch(error){
            throw new Error('Could not found the element typeText');
        }
    },
    waitForText: async function(page, selector, text){
        try {
            await page.waitForSelector(selector);
            await page.waitForFunction(selector, text => {
                document.querySelector(selector).innerText.includes(text),
                {},
                selector,
                text;
                });
        } catch (error) {
            throw new Error('Could not found the element waitForText')
        }
    },
    shouldNotExist: async function(page,selector){
        try {
            await page.waitForSelector(selector, {hidden:true})
        } catch (error) {
            throw new Error('Could not found the element shouldNotExist')
        }
    }

}