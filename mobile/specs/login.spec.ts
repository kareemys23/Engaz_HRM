import { LoginPage } from '../Pages/LoginPage';

// TODO: testData/loginData.ts (repo root) has email/password fixtures but no
// subdomain field, so there's no existing fixture that fully covers mobile's
// 3-field login. Move these to shared testData once a subdomain fixture exists.
const TEST_SUBDOMAIN = 'testsubdomain';
const TEST_EMAIL = 'test@example.com';
const TEST_PASSWORD = 'TestPassword123';

describe('Login screen', () => {
    let loginPage: LoginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
    });

    it('should fill in and submit the login form successfully', async () => {
        await loginPage.login(TEST_SUBDOMAIN, TEST_EMAIL, TEST_PASSWORD);
        // Depends on the placeholder dashboardIndicator locator in loginLocators.ts —
        // update this assertion once that locator is confirmed against a real app.
        expect(await loginPage.isLoggedIn()).toBe(true);
    });

    it('should show a validation error when submitting an empty form', async () => {
        await loginPage.submitEmptyForm();
        expect(await loginPage.isErrorVisible()).toBe(true);
    });
});