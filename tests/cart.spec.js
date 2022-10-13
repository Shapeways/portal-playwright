// @ts-check
const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.beforeEach(async ({ page }) => {
  await page.goto( process.env.BASE_URL + '/cart');
  // await page.goto('https://www.shapeways.com/cart');
});

test.describe('Cart Page', () => {
  test('Correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Shapeways: Cart')
  })
})
