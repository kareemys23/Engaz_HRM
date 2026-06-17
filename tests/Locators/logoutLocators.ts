import { Locator, Page } from "@playwright/test";

export class LogoutLocators {
    readonly userMenuButton: Locator;
    readonly logoutbutton: Locator
    readonly loginPageHeader: Locator;

    constructor(page: Page) {
        this.userMenuButton = page.getByRole('button', { name: 'User menu' });
        this.logoutbutton  = page.getByRole('menuitem', { name: 'Logout' }).locator('a');
        this.loginPageHeader  = page.getByRole('heading', { name: 'Log in to your account' });
    }
}