import {test, expect, Locator} from '@playwright/test';

test("XPath Axes Demo", async ({page}) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //1. self axis - select <td> as child of <tr> and then select the <td> with text "Island Trading"
    
    const cell: Locator = page.locator("//td[text()='Island Trading']");
    await expect(cell).toHaveText("Island Trading");

    //2. parent axis - select <td> as child of <tr> and then select the parent <tr> of the <td> with text "Island Trading"
    
    const row: Locator = page.locator("//td[text()='Island Trading']/parent::tr");
    await expect(row).toHaveCount(1);
    await expect(row).toContainText("UK");

    //3. child axis - select <tr> as child of <table> and then select the child <td> of the <tr> with text "Island Trading"

    const childCells: Locator = page.locator("//table[@id= 'customers']//tr[2]/child::td");
    await expect(childCells).toHaveCount(3);

    //4. ancestor axis - select <td> as child of <tr> and then select the ancestor <table> of the <td> with text "Island Trading"

    const ancestorTable: Locator = page.locator("//td[text()='Island Trading']/ancestor::table");
    await expect(ancestorTable).toHaveCount(1);
    await expect(ancestorTable).toContainText("Company");
    await expect(ancestorTable).toHaveAttribute("id", "customers");

    //5. descendant axis - select <table> as child of <body> and then select the descendant <td> of the <table> with text "Island Trading"

    const descendantCells: Locator = page.locator("//table[@id= 'customers']/descendant::td");
    await expect(descendantCells).toHaveCount(18);
    //await expect(descendantCells).toContainText("Island Trading");

    //6. following axis - select <td> as child of <tr> and then select the following <td> of the <td> with text "Germany"

    const followingCells: Locator = page.locator("//td[normalize-space()= 'Germany']/following::td[1]");
    await expect(followingCells).toHaveText('Centro comercial Moctezuma');

    //7. following-sibling axis - select <td> as child of <tr> and then select the following-sibling <td> of the <td> with text "Island Trading" 

    const followingSiblingCells: Locator = page.locator("//td[normalize-space()= 'Germany']/following-sibling::td[1]");
    await expect(followingSiblingCells).toHaveCount(0)

    //8. preceding axis - select <td> as child of <tr> and then select the preceding <td> of the <td> with text "Germany"

    const precedingCells: Locator = page.locator("//td[text()= 'Germany']/preceding::td[1]");
    await expect(precedingCells).toHaveText('Maria Anders');

    //9. preceding-sibling axis - select <td> as child of <tr> and then select the preceding-sibling <td> of the <td> with text "Germany"

    const precedingSiblingCells: Locator = page.locator("//td[text()= 'Germany']/preceding-sibling::td");
    await expect(precedingSiblingCells.nth(1)).toHaveText('Maria Anders');
    await expect(precedingSiblingCells).toHaveCount(2);

})