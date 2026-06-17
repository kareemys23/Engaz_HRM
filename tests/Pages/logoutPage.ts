import { Page } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { LogoutLocators } from "../Locators/logoutLocators";

export class LogoutPage extends Actions {
    private readonly locators: LogoutLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new LogoutLocators(page);
    }

    async logout() {
        await this.locators.userMenuButton.click();
        await this.locators.logoutbutton.click();
    }
}