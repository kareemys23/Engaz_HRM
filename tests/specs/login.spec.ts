import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { loginData } from "../testData/loginData";

test.describe('Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('valid credentials → successful login and correct redirect', async ({ page }) => {
        await loginPage.login(loginData.validManager.email, loginData.validManager.password);
        await expect(page).toHaveURL(loginData.validManager.redirectURL);
    });

    test('invalid credentials → shows correct error message', async () => {
        await loginPage.login(loginData.invalidUser.email, loginData.invalidUser.password);
        expect(await loginPage.isErrorVisible()).toBe(true);
        expect(await loginPage.getErrorMessage()).toContain(loginData.invalidUser.expectedError);
    });

    test('empty fields → required field validation', async () => {
        await loginPage.submitEmptyForm();
        expect(await loginPage.isErrorVisible()).toBe(true);
        expect(await loginPage.getErrorMessage()).toContain(loginData.emptyUser.expectedError);
    });

    test('already authenticated user revisits login → redirected away', async ({ page }) => {
        await loginPage.login(loginData.validManager.email, loginData.validManager.password);
        await expect(page).toHaveURL(loginData.validManager.redirectURL);
        await loginPage.goto();
        expect(await loginPage.isOnLoginPage()).toBe(false);
    });
});
