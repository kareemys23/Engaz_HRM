import { test, expect, Browser, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { EmployeeFormPage } from "../Pages/employeeFormPage";
import { loginData } from "../../../testData/loginData";
import { generateEmployeeData } from "../../../testData/employeeData";

test.describe('Employee Form', () => {
    let managerContext: BrowserContext;
    let managerPage: Page;
    let loginPage: LoginPage;
    let employeeFormPage: EmployeeFormPage;

    test.beforeEach(async ({ browser }: { browser: Browser }) => {
        // ----- Manager session (shared by every test) -----
        managerContext = await browser.newContext();
        managerPage = await managerContext.newPage();
        loginPage = new LoginPage(managerPage);
        employeeFormPage = new EmployeeFormPage(managerPage);
    });

    test('navigate to Employee Form successfully', async () => {
        await loginPage.goto();
        await loginPage.loginSuccessfully(loginData.validManager.email, loginData.validManager.password);
        await expect(managerPage).toHaveURL(loginData.validManager.redirectURL);
        await employeeFormPage.navigateToEmployeeForm();
    });

    test('Add Employee Form', async () => {
        await loginPage.goto();
        await loginPage.loginSuccessfully(loginData.validManager.email, loginData.validManager.password);
        await expect(managerPage).toHaveURL(loginData.validManager.redirectURL);
        await employeeFormPage.AddEmployeeForm();
    });

    test('Fill Personal Information and Contact Information steps', async () => {
        await loginPage.goto();
        await loginPage.loginSuccessfully(loginData.validManager.email, loginData.validManager.password);
        await expect(managerPage).toHaveURL(loginData.validManager.redirectURL);
        await employeeFormPage.AddEmployeeForm();
        const data = generateEmployeeData();
        await employeeFormPage.fillPersonalInformation(data);
        await employeeFormPage.fillContactInformation(data);
    });

});