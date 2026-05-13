import { Locator, Page } from "@playwright/test";

export class LoginLocators {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton:  Locator;
    readonly errorMessage:  Locator;
    readonly pageTitle:     Locator;

    constructor(page: Page) {
        this.usernameInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.submitButton  = page.locator('button[type="submit"]');
        this.errorMessage  = page.locator('.error-message');
        this.pageTitle     = page.locator('h1');
    }
}
