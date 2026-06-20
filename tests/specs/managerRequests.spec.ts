import { test, expect, Browser, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { ManagerRequestsPage } from "../Pages/managerRequestsPage";
import { loginData } from "../testData/loginData";
import { MyRequestsPage } from "../Pages/myRequestsPage";

test.describe('Manager Requests', () => {
    let managerContext: BrowserContext;
    let employeeContext: BrowserContext | undefined;

    let managerPage: Page;
    let loginPage: LoginPage;
    let managerRequestsPage: ManagerRequestsPage;

    test.beforeEach(async ({ browser }: { browser: Browser }) => {
        // ----- Manager session (shared by every test) -----
        managerContext = await browser.newContext();
        managerPage = await managerContext.newPage();
        loginPage = new LoginPage(managerPage);
        managerRequestsPage = new ManagerRequestsPage(managerPage);

        await loginPage.goto();
        await loginPage.loginSuccessfully(loginData.validManager.email, loginData.validManager.password);
        await expect(managerPage).toHaveURL(loginData.validManager.redirectURL);
    });

    test('create new request Maternity Request successfully', async () => {
        await managerRequestsPage.createNewMaternityRequest('Test request notes');
        await managerRequestsPage.submitRequest();
        await managerRequestsPage.rejectRequest();
    });

    test('create new sick leave request successfully without attachments', async ({ browser }) => {
        // ----- Manager session -----
        await managerRequestsPage.createNewSickLeaveRequestWithoutAttachments('Test sick leave request notes');
        await managerRequestsPage.submitRequest();

        // ----- Employee session -----
        employeeContext = await browser.newContext();
        const employeePage = await employeeContext.newPage();
        const employeeLoginPage = new LoginPage(employeePage);
        const myRequestsPage = new MyRequestsPage(employeePage);

        await employeeLoginPage.goto();
        await employeeLoginPage.loginSuccessfully(loginData.validEmployee.email, loginData.validEmployee.password);
        await expect(employeePage).toHaveURL(loginData.validEmployee.redirectURL);

        await myRequestsPage.navigateToMyRequests();
        await myRequestsPage.openRequestPreview();
        await test.step('Verify attachment deadline alert is visible', async () => {
            const attachmentDeadlineAlertVisible = await myRequestsPage.assertAttachmentDeadlineAlert();
            expect(attachmentDeadlineAlertVisible).toBeTruthy();
        });
        await myRequestsPage.confirmCancelRequest();
    });

    test.afterEach(async () => {
        await managerContext?.close();
        await employeeContext?.close();
        employeeContext = undefined;
    });
    
    test('create new sick leave request successfully with attachments', async ({ browser }) => {
        await managerRequestsPage.createNewSickLeaveRequestWithAttachments('Test sick leave request notes', process.env.AttachmentFilePath as string);
        await managerRequestsPage.submitRequest();
        await managerRequestsPage.previewRequest();
        await managerRequestsPage.rejectRequest();
    });
});