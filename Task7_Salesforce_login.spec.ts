import {test} from "@playwright/test"

test('Salesforce login',async ({page}) => {
    
await page.goto('https://login.salesforce.com/?locale=in')

await page.locator('input[type="email"]').fill('dilipkumar.rajendran@testleaf.com')

await page.locator('button[type="button"]').click()
await page.locator('input[type="password"]').fill('TestLeaf@2026')
await page.locator('.slds-button.slds-button--brand.slds-button_stretch.slds-m-bottom_x-small.gid-button.slds-m-top--small').click();

 })