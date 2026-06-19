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
        await loginPage.loginSuccessfully(loginData.validManager.email, loginData.validManager.password);
        await expect(page).toHaveURL(loginData.validManager.redirectURL);
    });

    test('create new request Maternity Request successfully', async () => {
        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.createNewRequestFunction();
        await myRequestsPage.createNewMaternityRequest('Test request notes');
        await myRequestsPage.submitRequest();
        await myRequestsPage.openRequestPreview();
        await myRequestsPage.confirmCancelRequest();
    });

    test('create new sick leave request successfully without attachments', async () => {
        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.createNewRequestFunction();
        await myRequestsPage.createNewSickLeaveRequestWithoutAttachments('Test sick leave request notes');
        await myRequestsPage.submitRequest();
        await myRequestsPage.openRequestPreview();
        await test.step('Verify attachment deadline alert is visible', async () => {
            const attachmentDeadlineAlertVisible = await myRequestsPage.assertAttachmentDeadlineAlert();
            expect(attachmentDeadlineAlertVisible).toBeTruthy();
        });
        await myRequestsPage.confirmCancelRequest();
    });

    test('create new sick leave request successfully with attachments', async () => {
        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.createNewRequestFunction();
        await myRequestsPage.createNewSickLeaveRequestWithAttachments('Test sick leave request notes', process.env.AttachmentFilePath as string);
        await myRequestsPage.submitRequest();
        await myRequestsPage.openRequestPreview();
        await test.step('Verify attachment is uploaded', async () => {
            const attachmentUploaded = await myRequestsPage.assertAttachementUploaded();
            expect(attachmentUploaded).toBeTruthy();
        });
        await myRequestsPage.confirmCancelRequest();
    });

    // test.afterAll(async ({ page }) => {
    //     await page.close();
    // }
});