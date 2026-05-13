import { Page } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { LoginLocators } from "../Locators/loginLocators";

export class LoginPage extends Actions {
    private readonly locators: LoginLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new LoginLocators(page);
    }

    async goto() {
        await this.navigate('/');
    }

    async login(email: string, password: string) {
        await this.enterText(this.locators.usernameInput, email);
        await this.enterText(this.locators.passwordInput, password);
        await this.click(this.locators.submitButton);
    }

    async submitEmptyForm() {
        await this.click(this.locators.submitButton);
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText(this.locators.errorMessage);
    }

    async isErrorVisible(): Promise<boolean> {
        return await this.isVisible(this.locators.errorMessage);
    }

    async isOnLoginPage(): Promise<boolean> {
        return this.page.url().includes('/login');
    }
}
