import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { MyRequestsPage } from "../Pages/myRequestsPage";
import { loginData } from "../testData/loginData";

test.describe('My Requests', () => {
    let loginPage: LoginPage;
    let myRequestsPage: MyRequestsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        myRequestsPage = new MyRequestsPage(page);

        await loginPage.goto();
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await expect(page).toHaveURL(loginData.validUser.redirectURL);
    });

    test('create new request successfully', async () => {
        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.createNewMaternityRequest('Maternity Leave', 'Test request notes');
        const successMessage = await myRequestsPage.getSuccessMessage();
        expect(successMessage).toBeTruthy();
        const cancelSuccessMessage = await myRequestsPage.getCancelSuccessMessage();
        expect(cancelSuccessMessage).toBeTruthy();
    });

    // test.afterAll(async ({ page }) => {
    //     await page.close();
    // }
});