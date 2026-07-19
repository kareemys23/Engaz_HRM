import { loginLocators } from '../Locators/loginLocators';
import Actions from '../Utils/actionsUtils';

export class LoginPage extends Actions {
    async login(subdomain: string, email: string, password: string) {
        await this.enterText(await this.resolve(loginLocators.subdomainField), subdomain);
        await this.enterText(await this.resolve(loginLocators.emailField), email);
        await this.enterText(await this.resolve(loginLocators.passwordField), password);
        await this.click(await this.resolve(loginLocators.loginButton));
    }

    async loginSuccessfully(subdomain: string, email: string, password: string) {
        await this.login(subdomain, email, password);
        // Uses the same placeholder homePageButton locator as isLoggedIn() —
        // update once it's confirmed against a real app.
        await this.waitForElement(await this.resolve(loginLocators.homePageButton), 15000);
        await this.assertStep('Login successful', async () => {
            expect(await this.isLoggedIn()).toBe(true);
        });
    }

    async submitEmptyForm() {
        await this.click(await this.resolve(loginLocators.subdomainField));
        await this.click(await this.resolve(loginLocators.emailField));
        // No Tab-based field navigation on mobile — hideKeyboard() defocuses the
        // active field, achieving a similar effect to web's Tab key press.
        await this.hideKeyboard();
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText(await this.resolve(loginLocators.errorMessage));
    }

    async isErrorVisible(): Promise<boolean> {
        try {
            await this.waitForElement(await this.resolve(loginLocators.errorMessage), 8000);
            return true;
        } catch {
            return false;
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            await this.waitForElement(await this.resolve(loginLocators.homePageButton), 8000);
            return true;
        } catch {
            return false;
        }
    }

    // isOnLoginPage() skipped — there's no URL concept on mobile to check against.
    // If needed later, this could check for a login-screen-specific element instead:
    // async isOnLoginPage(): Promise<boolean> {
    //     return await this.isVisible(await this.resolve(loginLocators.subdomainField));
    // }
}
