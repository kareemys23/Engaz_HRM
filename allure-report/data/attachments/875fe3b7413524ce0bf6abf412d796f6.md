# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\login.spec.ts >> Login >> empty fields → required field validation
- Location: tests\specs\login.spec.ts:24:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - img "Top Left"
  - img "Top Right"
  - img "Bottom Left"
  - img "Bottom Right"
  - generic [ref=e8] [cursor=pointer]:
    - generic [ref=e9]: 
    - generic [ref=e10]: EN
    - generic [ref=e11]: 
  - generic [ref=e12]:
    - img "Company Logo" [ref=e14]
    - generic [ref=e17]:
      - generic [ref=e19]:
        - heading "Log in to your account" [level=2] [ref=e20]
        - paragraph [ref=e21]: Welcome back! Please enter your details.
        - paragraph
      - generic [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e24]: Email or Phone
          - textbox "Email or Phone" [ref=e25]:
            - /placeholder: name@company.com or +201234567890
          - generic [ref=e29]: This field is required
        - generic [ref=e30]:
          - generic [ref=e31]: Password
          - generic [ref=e32]:
            - textbox "Password" [ref=e33]:
              - /placeholder: ••••••••
            - img [ref=e34]
          - generic [ref=e39]: This field is required
        - generic [ref=e40]:
          - generic [ref=e41] [cursor=pointer]:
            - checkbox "Remember for 30 days." [active] [ref=e43]
            - generic [ref=e45]: Remember for 30 days.
          - link "Forgot password?" [ref=e46] [cursor=pointer]:
            - /url: /en/reset-password
      - button "Login" [disabled]
  - generic:
    - generic:
      - generic: Created by
      - generic:
        - img "ENGAZ HR Logo"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../Pages/loginPage";
  3  | import { loginData } from "../testData/loginData";
  4  | 
  5  | test.describe('Login', () => {
  6  |     let loginPage: LoginPage;
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  |         loginPage = new LoginPage(page);
  10 |         await loginPage.goto();
  11 |     });
  12 | 
  13 |     test('valid credentials → successful login and correct redirect', async ({ page }) => {
  14 |         await loginPage.login(loginData.validUser.email, loginData.validUser.password);
  15 |         await expect(page).toHaveURL(loginData.validUser.redirectURL);
  16 |     });
  17 | 
  18 |     test('invalid credentials → shows correct error message', async () => {
  19 |         await loginPage.login(loginData.invalidUser.email, loginData.invalidUser.password);
  20 |         expect(await loginPage.isErrorVisible()).toBe(true);
  21 |         expect(await loginPage.getErrorMessage()).toContain(loginData.invalidUser.expectedError);
  22 |     });
  23 | 
  24 |     test('empty fields → required field validation', async () => {
  25 |         await loginPage.submitEmptyForm();
> 26 |         expect(await loginPage.isErrorVisible()).toBe(true);
     |                                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  27 |         expect(await loginPage.getErrorMessage()).toContain(loginData.emptyUser.expectedError);
  28 |     });
  29 | 
  30 |     test('already authenticated user revisits login → redirected away', async ({ page }) => {
  31 |         await loginPage.login(loginData.validUser.email, loginData.validUser.password);
  32 |         await expect(page).toHaveURL(loginData.validUser.redirectURL);
  33 |         await loginPage.goto();
  34 |         expect(await loginPage.isOnLoginPage()).toBe(false);
  35 |     });
  36 | });
  37 | 
```