// Import the 'test' function to create test cases
// Import the 'expect' function to perform assertions (validations)
import { test, expect } from '@playwright/test';

/*
========================================
Basic Syntax of a Playwright Test
========================================

test("Test Title", async ({ page }) => {
    // Step 1
    // Step 2
    // Step 3
});

*/

// ========================================
// JavaScript & TypeScript Concepts
// ========================================

// Synchronous Execution:
// Code executes one line after another.
// Example:
// Step 1 -> Step 2 -> Step 3

// Asynchronous Execution:
// Some operations (opening a website, waiting for a response, downloading data)
// take time. JavaScript does not wait automatically.
// Instead, it continues executing other tasks in the background.

// Promise:
// A Promise represents a future result.
// It has three possible states:
// 1. Pending   -> Task is still running
// 2. Fulfilled -> Task completed successfully (Resolved)
// 3. Rejected  -> Task failed

// async:
// Declares that a function can perform asynchronous operations.

// await:
// Tells JavaScript to pause at that line until the Promise is completed.

// ========================================
// Playwright Fixtures
// ========================================

// Fixture:
// A fixture is an object automatically provided by Playwright.
// It helps us interact with browsers without creating everything manually.

// Common Fixtures:
// page    -> Represents a browser tab/web page.
// browser -> Represents the browser instance.
// context -> Represents a browser session.

// ========================================
// Test Case
// ========================================

test("Verify the Google Page Title", async ({ page }) => {

    // Open the specified URL in the browser
    await page.goto("https://www.google.com/");

    // Get the page title
    let title: string = await page.title();

    // Print the title in the console
    console.log("Title:", title);

    // Get the current page URL
    let url: string = await page.url();

    // Print the URL in the console
    console.log("URL:", url);

    // Verify that the page title is exactly "Google"
    // If the title does not match, the test will fail.
    await expect(page).toHaveTitle("Google");

});