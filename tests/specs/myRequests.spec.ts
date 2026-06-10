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
        await loginPage.loginSuccessfully(loginData.validUser.email, loginData.validUser.password);
        await expect(page).toHaveURL(loginData.validUser.redirectURL);
    });

    test('create new request Maternity Request successfully', async () => {
        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.createNewRequestFunction();
        await myRequestsPage.createNewMaternityRequest('Maternity Leave', 'Test request notes');
        await myRequestsPage.cancelRequest();
        const successMessage = await myRequestsPage.getSuccessMessage();
        expect(successMessage).toBeTruthy();
        const cancelSuccessMessage = await myRequestsPage.getCancelSuccessMessage();
        expect(cancelSuccessMessage).toBeTruthy();
    });

    test('create new sick leave request successfully', async () => {
        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.createNewRequestFunction();
        await myRequestsPage.createNewSickLeaveRequest('Sick Leave', 'Test sick leave request notes');
        await myRequestsPage.submitSickLeaveRequest();
        await myRequestsPage.cancelRequest();
        await test.step('Verify attachment deadline alert is visible', async () => {
            const attachmentDeadlineAlertVisible = await myRequestsPage.assertAttachmentDeadlineAlert();
            expect(attachmentDeadlineAlertVisible).toBeTruthy();
        });
        const successMessage = await myRequestsPage.getSuccessMessage();
        expect(successMessage).toBeTruthy();
        const cancelSuccessMessage = await myRequestsPage.getCancelSuccessMessage();
        expect(cancelSuccessMessage).toBeTruthy();
    });

    // test.afterAll(async ({ page }) => {
    //     await page.close();
    // }
});