import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { ManagerRequestsPage } from "../Pages/managerRequestsPage";
import { loginData } from "../testData/loginData";

test.describe('Manager Requests', () => {
    let loginPage: LoginPage;
    let managerRequestsPage: ManagerRequestsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        managerRequestsPage = new ManagerRequestsPage(page);

        await loginPage.goto();
        await loginPage.loginSuccessfully(loginData.validUser.email, loginData.validUser.password);
        await expect(page).toHaveURL(loginData.validUser.redirectURL);
    });

    test('create new request Maternity Request successfully', async () => {
        await managerRequestsPage.navigateToManagerRequests();
        await managerRequestsPage.createNewRequestFunction();
        await managerRequestsPage.createNewMaternityRequest('Maternity Leave', 'Test request notes');
        await managerRequestsPage.submitRequest();
        await managerRequestsPage.rejectRequest();
    });
});