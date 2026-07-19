import { LoginPage } from '../Pages/LoginPage';

function getEnv(key: string): string {
    const value = process.env[key];
    if (!value) throw new Error(`Missing required environment variable: ${key}`);
    return value;
}

// TODO: testData/loginData.ts (repo root) has email/password fixtures but its
// subdomain fields expect per-role env vars (e.g. VALID_MANAGER_SUBDOMAIN) that
// aren't defined in .env — only a single shared `Subdomain` is. Move these to
// shared testData once a matching subdomain fixture exists.
const SUBDOMAIN = getEnv('Subdomain');
const ManagerEmail = getEnv('VALID_MANAGER_EMAIL');
const EmployeeEmail = getEnv('VALID_EMPLOYEE_EMAIL');
const ManagerPassword = getEnv('VALID_MANAGER_PASSWORD');
const EmployeePassword = getEnv('VALID_EMPLOYEE_PASSWORD');


describe('Login screen', () => {
    let loginPage: LoginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
    });

    it('should fill in and submit the login form successfully as a manager', async () => {
        // Depends on the placeholder homePageButton locator in loginLocators.ts —
        // update this assertion once that locator is confirmed against a real app.
        await loginPage.loginSuccessfully(SUBDOMAIN, ManagerEmail, ManagerPassword);
    });

    it('should fill in and submit the login form successfully as an employee', async () => {
        // Depends on the placeholder homePageButton locator in loginLocators.ts —
        // update this assertion once that locator is confirmed against a real app.
        await loginPage.loginSuccessfully(SUBDOMAIN, EmployeeEmail, EmployeePassword);
    });

    it('should show a validation error when submitting an empty form', async () => {
        await loginPage.submitEmptyForm();
        expect(await loginPage.isErrorVisible()).toBe(true);
    });
});