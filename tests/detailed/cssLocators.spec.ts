/*
CSS (Cascading Style Sheets) selectors are patterns used to select and style HTML elements. They allow developers to apply styles to specific elements based on their attributes, relationships, or states. CSS selectors can be simple, targeting a single element, or complex, combining multiple selectors to achieve precise styling.

In this test suite, we will explore various CSS selectors and their usage in styling HTML elements. We will cover basic selectors, combinators, pseudo-classes, pseudo-elements, and attribute selectors. Each test case will demonstrate how to apply styles using different selectors and verify the expected outcomes.

html + js + css

2 types of css locators:

1) absolute CSS locators: These locators use a full path to the element, starting from the root of the document. They are less flexible and can break easily if the structure of the HTML changes.

2) relative CSS locators: These locators use a more flexible approach, targeting elements based on their relationships to other elements. They are more resilient to changes in the HTML structure and are generally preferred for testing.

tag with id, class, attribute, pseudo-class, pseudo-element

tag#id: Selects an element with a specific ID. For example, div#header selects a div element with the ID "header".

tag.class: Selects elements with a specific class. For example, p.intro selects all paragraph elements with the class "intro".

tag[attr="value"]: Selects elements with a specific attribute value. For example, input[type="text"] selects all input elements with the type "text".

tag:pseudo-class: Selects elements based on their state or position. For example, a:hover selects anchor elements when they are being hovered over.

tag::pseudo-element: Selects a specific part of an element. For example, p::first-line selects the first line of all paragraph elements.

tag with class and attribute: Selects elements that have both a specific class and a specific attribute value. For example, div.container[data-role="main"] selects all div elements with the class "container" and the attribute data-role set to "main".

tag.class[attr="value"]: Selects elements that have both a specific class and a specific attribute value. For example, span.highlight[data-type="important"] selects all span elements with the class "highlight" and the attribute data-type set to "important".

page.locator('css/xpath'): This is a method used in testing frameworks (like Playwright) to locate elements on a web page using CSS selectors. The 'css/xpath' argument specifies the CSS selector to be used for locating the element.

*/

import {test, expect, Locator} from '@playwright/test';

test("Verify CSS locators", async ({page}) => { 

    await page.goto("https://demowebshop.tricentis.com/");

    //tag#id

    //await page.locator("#small-searchterms").fill('laptop');
    //await page.locator('css=#small-searchterms').fill('laptop');
    //await page.locator('css=input#small-searchterms').fill('laptop');
    //await page.locator('css=input[id="small-searchterms"]').fill('laptop');

    const searchBox: Locator = page.locator("#small-searchterms");

    await expect(searchBox).toBeVisible();

    await searchBox.fill("laptop");

    //tag.class

    //await page.locator(".search-box-text").fill('laptop');
    //await page.locator('css=.search-box-text').fill('laptop');
    //await page.locator('css=input.search-box-text').fill('laptop');
    //await page.locator('css=input[class="search-box-text"]').fill('laptop');

    const searchBoxClass: Locator = page.locator("input.search-box-text");

    await expect(searchBoxClass).toBeVisible();

    await searchBoxClass.fill("laptop");

    //tag[attr="value"]

    //await page.locator('input[type="text"]').fill('laptop');
    //await page.locator('css=input[type="text"]').fill('laptop');
    //await page.locator('css=input[class="search-box-text"][type="text"]').fill('laptop');

    const searchBoxAttr: Locator = page.locator("input[value='Search store']");

    await expect(searchBoxAttr).toBeVisible();

    await searchBoxAttr.fill("laptop");

    //tag:pseudo-class

    //await page.locator('a:hover').click();
    //await page.locator('css=a:hover').click();
    //await page.locator('css=a:has-text("Log in")').click();

    const loginLink: Locator = page.locator('a:has-text("Log in")');

    await expect(loginLink).toBeVisible();

    await loginLink.click();

    //tag::pseudo-element

    //await page.locator('p::first-line').click();
    //await page.locator('css=p::first-line').click();
    //await page.locator('css=p:has-text("Welcome to our store")::first-line').click();

    //tag with class and attribute

    //await page.locator('div.container[data-role="main"]').click();
    //await page.locator('css=div.container[data-role="main"]').click();
    //await page.locator('css=div[class="container"][data-role="main"]').click();

    await page.locator("input.search-box-text[value='Search store']").fill("laptop");

     






})