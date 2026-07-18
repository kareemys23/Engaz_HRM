import { LoginLocators } from '../Locators/loginLocators';
import Actions from '../Utils/actionsUtils';

export class LoginPage extends Actions {
    private readonly locators: LoginLocators = new LoginLocators();

    async login(subdomain: string, email: string, password: string) {
        await this.enterText(this.locators.subdomainField, subdomain);
        await this.enterText(this.locators.emailField, email);
        await this.enterText(this.locators.passwordField, password);
        await this.click(this.locators.loginButton);
    }

    async loginSuccessfully(subdomain: string, email: string, password: string) {
        await this.login(subdomain, email, password);
        // Uses the same placeholder dashboardIndicator locator as isLoggedIn() —
        // update once it's confirmed against a real app.
        await this.waitForElement(this.locators.dashboardIndicator, 15000);
    }

    async submitEmptyForm() {
        await this.click(this.locators.subdomainField);
        await this.click(this.locators.emailField);
        // No Tab-based field navigation on mobile — hideKeyboard() defocuses the
        // active field, achieving a similar effect to web's Tab key press.
        await this.hideKeyboard();
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText(this.locators.errorMessage);
    }

    async isErrorVisible(): Promise<boolean> {
        try {
            await this.waitForElement(this.locators.errorMessage, 8000);
            return true;
        } catch {
            return false;
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            await this.waitForElement(this.locators.dashboardIndicator, 8000);
            return true;
        } catch {
            return false;
        }
    }

    // isOnLoginPage() skipped — there's no URL concept on mobile to check against.
    // If needed later, this could check for a login-screen-specific element instead:
    // async isOnLoginPage(): Promise<boolean> {
    //     return await this.isVisible(this.locators.subdomainField);
    // }
}
