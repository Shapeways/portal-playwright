// @ts-check
const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.beforeEach(async ({ page }) => {
  await page.goto( process.env.BASE_URL + '/marketplace');
  // await page.goto('https://www.shapeways.com/marketplace');
});

test.describe('Marketplace Page', () => {
  test('Correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Shapeways 3D Printing Marketplace');
  })

  test('Correct page title and H1 after clicking Customizable', async ({ page }) => {
    await page.locator('#facetIsCustomizable').click();
    await expect(page).toHaveTitle('All Customizable Products - Shapeways 3D Printing Marketplace');
    await expect(page.locator('h1')).toHaveText('Customizable Products');
  })
})
