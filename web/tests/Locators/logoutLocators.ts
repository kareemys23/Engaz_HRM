import { Locator, Page } from "@playwright/test";

export class LogoutLocators {
    readonly userMenuButton: Locator;
    readonly logoutbutton: Locator

    constructor(page: Page) {
        this.userMenuButton = page.getByRole('button', { name: 'User menu' });
        this.logoutbutton  = page.getByRole('menuitem', { name: 'Logout' }).locator('a');
    }
}