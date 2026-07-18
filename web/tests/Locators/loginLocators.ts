import { Locator, Page } from "@playwright/test";

export class LoginLocators {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton:  Locator;
    readonly errorMessage:  Locator;
    readonly pageTitle:     Locator;

    constructor(page: Page) {
        this.usernameInput = page.locator('input[id="email"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.submitButton  = page.getByRole('button', { name: 'Login' });
        this.errorMessage  = page.locator('[class*="error"], [class*="invalid"], .text-danger, mat-error').first();
        this.pageTitle     = page.locator('h1');
    }
}
