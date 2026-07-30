//locators -> XPath -> CSS

//locator identidies the element on the page. It is a way to find elements in the DOM. There are different types of locators like ID, Name, Class Name, Tag Name, Link Text, Partial Link Text, CSS Selector, and XPath.
//DOM - Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect, Locator } from '@playwright/test';

test('Verify Playwright Built-in Locators', async ({ page }) => {

await page.goto('https://demowebshop.tricentis.com/');

//page.getAltText() to locate an element, usually image, by its text alternative.

const logo:Locator= page.getByAltText('Tricentis Demo Web Shop');

await logo.click();

await expect(logo).toBeVisible();

//page.getByText() to locate by text content. Not for input elements, use getByLabel() or getByPlaceholder() instead.

//const text:Locator= page.getByText('Newsletter');
//await expect(text).toBeVisible();
//we can provide substring to getByText() to locate the element. It will locate the element which contains the substring.

await expect(page.getByText('Welcome to our store')).toBeVisible(); //full text
await expect(page.getByText('Welcome to our')).toBeVisible(); //substring

//case insensitive search
await expect(page.getByText('welcome to our store')).toBeVisible();

//case sensitive search
await expect(page.getByText('Welcome to our store', { exact: true })).toBeVisible();

//page.getByRole() to locate by explicit and implicit accessibility attributes.

await page.getByRole('link', { name: 'Register' }).click(); //click on the Register link


//you can also use getByText() to locate the heading element. But getByRole() is more reliable and recommended.
await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible(); 

//getbylabel() to locate a form control by associated label's text. Ideally, you should use getByRole() to locate form controls, but if you want to locate by label text, you can use getByLabel().

await page.getByLabel('First name:').fill('Mohit');
await page.getByLabel('Last name:').fill('Waghmare');
await page.getByLabel('Email:').fill('mmw@abc.com');

//getByPlaceholder() to locate an input by placeholder. best for inputs without labels. But if the input has a label, you should use getByLabel() instead.

//await page.getByPlaceholder('Password').fill('Password123');
//await page.getByPlaceholder('Confirm password').fill('Password123');

//getByTitle() to locate an element by its title attribute. It is best for elements that have a title attribute. But if the element has a label, you should use getByLabel() instead.

await page.goto("https://demowebshop.tricentis.com/");
await page.getByTitle('Search').fill('laptop');
await page.getByTitle('Search').press('Enter');

})
