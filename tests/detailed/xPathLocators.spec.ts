import {test, expect, Locator} from '@playwright/test';

test('Verify Playwright XPath Locators', async ({ page }) => {

    // Navigate to Demo Web Shop
    await page.goto('https://demowebshop.tricentis.com/');
    await page.waitForLoadState('networkidle');

    //Absolute XPath
    const abslogo: Locator = page.locator('xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]');
    await expect(abslogo).toBeVisible();
    await abslogo.click();
    await page.waitForLoadState('networkidle');

    //Relative XPath
    const rellogo: Locator = page.locator('xpath=//img[@alt="Tricentis Demo Web Shop"]');
    await expect(rellogo).toBeVisible();
    await rellogo.click();

    //XPath with contains()
    const product: Locator = page.locator("//h2/a[contains(@href, 'computer')]");

    await expect(product.first()).toBeVisible();

    const productsCount = await product.count();
    console.log(`Total Products Found: ${productsCount}`);
    expect(productsCount).toBeGreaterThan(0);

    console.log("first product name: " + await product.first().textContent());
    console.log("last product name: " + await product.last().textContent());

    if (productsCount > 2) {
        console.log("nth product name: " + await product.nth(2).textContent());
    }

    //Text Content for all products

    //Individual product names using nth()
    for (let i = 0; i < productsCount; i++) {
        console.log(`Product ${i + 1}: ${await product.nth(i).textContent()}`);
    }

    //Array of product names using allTextContents()

    const allProducts = await product.allTextContents();
    console.log("All Products: ", allProducts);

    for (let pt of allProducts) {
        console.log("Product Name: " + pt);
    }

    //XPath with starts-with()

    const buildingProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");

    await expect(buildingProducts.first()).toBeVisible();

    const buildingProductsCount: number = await buildingProducts.count();
    expect(buildingProductsCount).toBeGreaterThan(0);
    console.log(`Total Building Products Found: ${buildingProductsCount}`);

    //XPath with text() function
    const textRegister: Locator = page.locator("//a[text()='Register']");
    await expect(textRegister).toBeVisible();

    //XPath with last() function
    const lastProduct: Locator = page.locator("//div[@class= 'column follow-us']//li[last()]");
    console.log("Last Product Name: " + await lastProduct.textContent());

    //XPath with position() function
    const positionProduct: Locator = page.locator("//div[@class= 'column follow-us']//li[position()=3]");
    console.log("Position Product Name: " + await positionProduct.textContent());

});