# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new sick leave request successfully
- Location: tests\specs\myRequests.spec.ts:30:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://qa.engazhr.co/en/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://qa.engazhr.co/en/login"

```

```yaml
- img "Top Left"
- img "Top Right"
- img "Bottom Left"
- img "Bottom Right"
- text:  EN 
- img "Company Logo"
- heading "Log in to your account" [level=2]
- paragraph: Welcome back! Please enter your details.
- paragraph
- text: Email or Phone
- textbox "Email or Phone":
  - /placeholder: name@company.com or +201234567890
  - text: ww220@co.com
- text: Enter a valid email or phone number. Password
- textbox "Password":
  - /placeholder: ••••••••
  - text: Test@1234
- img
- checkbox "Remember for 30 days."
- text: Remember for 30 days.
- link "Forgot password?":
  - /url: /en/reset-password
- button "" [disabled]
- text: Created by
- img "ENGAZ HR Logo"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../Pages/loginPage";
  3  | import { MyRequestsPage } from "../Pages/myRequestsPage";
  4  | import { loginData } from "../testData/loginData";
  5  | 
  6  | test.describe('My Requests', () => {
  7  |     let loginPage: LoginPage;
  8  |     let myRequestsPage: MyRequestsPage;
  9  | 
  10 |     test.beforeEach(async ({ page }) => {
  11 |         loginPage = new LoginPage(page);
  12 |         myRequestsPage = new MyRequestsPage(page);
  13 | 
  14 |         await loginPage.goto();
  15 |         await loginPage.login(loginData.validUser.email, loginData.validUser.password);
> 16 |         await expect(page).toHaveURL(loginData.validUser.redirectURL);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  17 |     });
  18 | 
  19 |     test('create new request successfully', async () => {
  20 |         await myRequestsPage.navigateToMyRequests();
  21 |         await myRequestsPage.createNewRequestFunction();
  22 |         await myRequestsPage.createNewMaternityRequest('Maternity Leave', 'Test request notes');
  23 |         await myRequestsPage.cancelRequest();
  24 |         const successMessage = await myRequestsPage.getSuccessMessage();
  25 |         expect(successMessage).toBeTruthy();
  26 |         const cancelSuccessMessage = await myRequestsPage.getCancelSuccessMessage();
  27 |         expect(cancelSuccessMessage).toBeTruthy();
  28 |     });
  29 | 
  30 |     test('create new sick leave request successfully', async () => {
  31 |         await myRequestsPage.navigateToMyRequests();
  32 |         await myRequestsPage.createNewRequestFunction();
  33 |         await myRequestsPage.createNewSickLeaveRequest('Sick Leave', 'Test sick leave request notes');
  34 |         await myRequestsPage.cancelRequest();
  35 |         const successMessage = await myRequestsPage.getSuccessMessage();
  36 |         expect(successMessage).toBeTruthy();
  37 |         const cancelSuccessMessage = await myRequestsPage.getCancelSuccessMessage();
  38 |         expect(cancelSuccessMessage).toBeTruthy();
  39 |     });
  40 | 
  41 |     // test.afterAll(async ({ page }) => {
  42 |     //     await page.close();
  43 |     // }
  44 | });
```