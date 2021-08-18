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
            return await page.$eval(selector, element = element.innerHTML)
        } catch (error) {
            throw new Error(`Could not get text on selector: ${selector}`)
        }
    },
    getCount: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, element = element.count)
        } catch (error) {
            throw new Error(`Could not count on selector: ${selector}`)
        }
    }
}