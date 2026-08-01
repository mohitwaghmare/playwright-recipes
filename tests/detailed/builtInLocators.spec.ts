// =====================================================================================
// PLAYWRIGHT LOCATORS
// =====================================================================================

// A locator is a way for Playwright to identify and interact with an element on a web page.
//
// Every action in Playwright starts with a locator:
//
// - Click a button
// - Enter text
// - Select a checkbox
// - Read text
// - Verify visibility
//
// Behind the scenes, Playwright searches the page's DOM (Document Object Model)
// to find the element before performing the action.

// Traditional automation tools mainly use:
//
// • XPath
// • CSS Selector
//
// Playwright also supports them:
//
// page.locator("//input[@id='Email']")      // XPath
// page.locator("#Email")                    // CSS
//
// However, Playwright recommends using its built-in locators because they are:
//
// ✅ Easier to read
// ✅ More reliable
// ✅ Less likely to break when UI changes
// ✅ Encourage accessibility best practices

// =====================================================================================
// DOM (Document Object Model)
// =====================================================================================
//
// DOM is a tree-like representation of every element present on a webpage.
//
// Example:
//
// <html>
//   <body>
//      <h1>Welcome</h1>
//      <input placeholder="Search">
//      <button>Login</button>
//   </body>
// </html>
//
// Every HTML tag becomes a node inside the DOM.
//
// Playwright searches this DOM to find elements.
//
// =====================================================================================
// PLAYWRIGHT BUILT-IN LOCATORS (Recommended by Microsoft)
// =====================================================================================
//
// 1. getByRole()
//    -> Uses accessibility role and accessible name.
//    -> Most recommended locator.
//    -> Best for buttons, links, checkboxes, headings, etc.
//
// 2. getByText()
//    -> Finds elements using visible text.
//
// 3. getByLabel()
//    -> Finds form fields using their associated label.
//
// 4. getByPlaceholder()
//    -> Finds input fields using placeholder text.
//
// 5. getByAltText()
//    -> Finds images using alt text.
//
// 6. getByTitle()
//    -> Finds elements using the title attribute.
//
// 7. getByTestId()
//    -> Finds elements using data-testid attribute.
//    -> Preferred in enterprise automation because UI text can change.
//
// Locator priority (recommended)
//
// ⭐⭐⭐⭐⭐ getByRole()
// ⭐⭐⭐⭐☆ getByLabel()
// ⭐⭐⭐⭐☆ getByPlaceholder()
// ⭐⭐⭐⭐☆ getByTestId()
// ⭐⭐⭐☆☆ getByText()
// ⭐⭐☆☆☆ CSS Selector
// ⭐☆☆☆☆ XPath (use only when necessary)

import { test, expect, Locator } from '@playwright/test';

test('Verify Playwright Built-in Locators', async ({ page }) => {

    // Navigate to Demo Web Shop
    await page.goto('https://demowebshop.tricentis.com/');

    // =============================================================================
    // getByAltText()
    // =============================================================================
    //
    // Used to locate images using their ALT attribute.
    //
    // Example:
    // <img alt="Company Logo">
    //
    // Mostly used for logos, banners, product images and icons.
    //

    const logo: Locator = page.getByAltText('Tricentis Demo Web Shop');

    await expect(logo).toBeVisible();
    await logo.click();

    // =============================================================================
    // getByText()
    // =============================================================================
    //
    // Finds elements using visible text.
    //
    // Best for:
    // - Messages
    // - Paragraphs
    // - Labels
    // - Links
    // - Buttons
    //
    // Avoid using it for input fields.
    // Use getByLabel() or getByPlaceholder() instead.
    //

    await expect(page.getByText('Welcome to our store')).toBeVisible();

    // Partial text match
    await expect(page.getByText('Welcome to our')).toBeVisible();

    // Case-insensitive by default
    await expect(page.getByText('welcome to our store')).toBeVisible();

    // Exact text match
    await expect(
        page.getByText('Welcome to our store', { exact: true })
    ).toBeVisible();

    // =============================================================================
    // getByRole()
    // =============================================================================
    //
    // Microsoft's most recommended locator.
    //
    // Uses accessibility roles.
    //
    // Examples:
    // button
    // link
    // textbox
    // heading
    // checkbox
    // radio
    //
    // Advantages:
    // ✔ Stable
    // ✔ Readable
    // ✔ Accessibility-friendly
    //

    await page.getByRole('link', { name: 'Register' }).click();

    // Verify Register page heading

    await expect(
        page.getByRole('heading', { name: 'Register' })
    ).toBeVisible();

    // =============================================================================
    // getByLabel()
    // =============================================================================
    //
    // Finds form controls using their associated label.
    //
    // Example:
    //
    // <label>Email:</label>
    // <input>
    //
    // Best choice for forms.
    //

    await page.getByLabel('First name:').fill('Mohit');
    await page.getByLabel('Last name:').fill('Waghmare');
    await page.getByLabel('Email:').fill('mmw@abc.com');

    // =============================================================================
    // getByPlaceholder()
    // =============================================================================
    //
    // Finds input fields using placeholder text.
    //
    // Example:
    //
    // <input placeholder="Search store">
    //
    // Useful when a label does not exist.
    //
    // Prefer getByLabel() whenever labels are available.
    //

    // await page.getByPlaceholder('Password').fill('Password123');
    // await page.getByPlaceholder('Confirm password').fill('Password123');

    // =============================================================================
    // getByTitle()
    // =============================================================================
    //
    // Finds elements using the HTML title attribute.
    //
    // Example:
    //
    // <button title="Search">
    //
    // Note:
    // This locator ONLY works if the HTML element actually contains
    // a title attribute.
    //
    // It should not be confused with the page title.
    //

    // Example
    // await page.getByTitle('Search').click();

    // =============================================================================
    // getByTestId()
    // =============================================================================
    //
    // Finds elements using data-testid.
    //
    // Example:
    //
    // <input data-testid="email-input">
    //
    // Enterprise applications commonly expose dedicated test IDs.
    // These are very stable because developers rarely change them.
    //

    // await page.getByTestId('newsletter-email').fill('test@example.com');
});