# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new sick leave request successfully
- Location: tests\specs\myRequests.spec.ts:30:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Create New Request' }).first()

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "Engaz Logo" [ref=e8]
      - button [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - navigation [ref=e12]:
      - generic [ref=e13]: System
      - generic [ref=e14]:
        - generic [ref=e15] [cursor=pointer]:
          - img [ref=e17]
          - generic [ref=e19]: Dashboard
        - generic [ref=e20]:
          - generic [ref=e21] [cursor=pointer]:
            - img [ref=e23]
            - generic [ref=e25]: Requests
            - generic [ref=e26]: 
          - list [ref=e27]:
            - listitem [ref=e28]:
              - generic [active] [ref=e29] [cursor=pointer]:
                - img [ref=e31]
                - generic [ref=e33]: My Request
              - generic [ref=e34] [cursor=pointer]:
                - img [ref=e36]
                - generic [ref=e38]: Managerial Request
        - generic [ref=e39]:
          - generic [ref=e40] [cursor=pointer]:
            - img [ref=e42]
            - generic [ref=e44]: Attendance Management
            - generic [ref=e45]: 
          - list:
            - listitem [ref=e46]:
              - generic [ref=e47] [cursor=pointer]:
                - img [ref=e49]
                - generic [ref=e51]: Shifts
              - generic [ref=e52] [cursor=pointer]:
                - img [ref=e54]
                - generic [ref=e56]: Calendar
      - generic [ref=e57]: Employees
      - generic [ref=e58]:
        - generic [ref=e59] [cursor=pointer]:
          - img [ref=e61]
          - generic [ref=e63]: Employee Management
        - generic [ref=e64] [cursor=pointer]:
          - img [ref=e66]
          - generic [ref=e68]: Organization Chart
      - generic [ref=e69]: Company
      - generic [ref=e70]:
        - generic [ref=e71] [cursor=pointer]:
          - img [ref=e73]
          - generic [ref=e75]: Policies
        - generic [ref=e76] [cursor=pointer]:
          - img [ref=e78]
          - generic [ref=e80]: Holidays
        - generic [ref=e81] [cursor=pointer]:
          - img [ref=e83]
          - generic [ref=e85]: Announcements
      - generic [ref=e86]:
        - generic [ref=e87]:
          - generic [ref=e88] [cursor=pointer]:
            - img [ref=e90]
            - generic [ref=e92]: Recruitment
            - generic [ref=e93]: 
          - list:
            - listitem [ref=e94]:
              - generic [ref=e95] [cursor=pointer]:
                - img [ref=e97]
                - generic [ref=e99]: Hiring Phases
              - generic [ref=e100] [cursor=pointer]:
                - img [ref=e102]
                - generic [ref=e104]: Requisitions
              - generic [ref=e105] [cursor=pointer]:
                - img [ref=e107]
                - generic [ref=e109]: Job Posts
              - generic [ref=e110] [cursor=pointer]:
                - img [ref=e112]
                - generic [ref=e114]: Candidates
              - generic [ref=e115] [cursor=pointer]:
                - img [ref=e117]
                - generic [ref=e119]: Interviews
              - generic [ref=e120] [cursor=pointer]:
                - img [ref=e122]
                - generic [ref=e124]: Offers
        - generic [ref=e125]:
          - generic [ref=e126] [cursor=pointer]:
            - img [ref=e128]
            - generic [ref=e130]: Reports
            - generic [ref=e131]: 
          - list:
            - listitem [ref=e132]:
              - generic [ref=e133] [cursor=pointer]:
                - img [ref=e135]
                - generic [ref=e137]: Daily Report
              - generic [ref=e138] [cursor=pointer]:
                - img [ref=e140]
                - generic [ref=e142]: Monthly Report
              - generic [ref=e143] [cursor=pointer]:
                - img [ref=e145]
                - generic [ref=e147]: Loan Report
        - generic [ref=e148] [cursor=pointer]:
          - img [ref=e150]
          - generic [ref=e152]: Imports & Exports
        - generic [ref=e153] [cursor=pointer]:
          - img [ref=e155]
          - generic [ref=e157]: System Preferences
          - img [ref=e158]
    - contentinfo "Sidebar footer" [ref=e160]:
      - button "Need Help? Speak up!" [ref=e161] [cursor=pointer]:
        - img [ref=e162]
        - generic [ref=e164]: Need Help? Speak up!
      - generic [ref=e165]:
        - text: Created by
        - img [ref=e166]
  - generic [ref=e175]:
    - generic [ref=e177]:
      - text: 
      - navigation "Breadcrumb" [ref=e180]:
        - link "Home" [ref=e181] [cursor=pointer]:
          - /url: /en/dashboard
          - img [ref=e182]
        - img [ref=e185]
        - generic [ref=e187]: Dashboard
      - generic [ref=e188]:
        - button "Change language" [ref=e189] [cursor=pointer]:
          - img [ref=e190]
          - generic [ref=e192]: EN
        - button "Notifications" [ref=e195] [cursor=pointer]:
          - img [ref=e197]
          - generic [ref=e200]: "266"
        - button "Branch" [disabled] [ref=e201]:
          - img [ref=e202]
          - generic [ref=e204]: Engaz | Egypt
          - generic [ref=e205]: 
        - button "User menu" [ref=e206] [cursor=pointer]:
          - generic [ref=e208]: 
          - generic [ref=e209]: مدير محدش يغير فييييه
          - generic [ref=e210]: 
    - generic [ref=e214]:
      - heading "Dashboard" [level=2] [ref=e216]
      - generic [ref=e217]:
        - generic [ref=e218]:
          - heading "Employee & Department Trends" [level=3] [ref=e219]
          - img [ref=e221]
        - generic [ref=e222]:
          - heading "Hires vs Terminations" [level=3] [ref=e223]
          - img [ref=e225]
        - generic [ref=e226]:
          - heading "Employee Status Distribution" [level=3] [ref=e227]
          - img [ref=e229]
        - generic [ref=e230]:
          - heading "Department Distribution" [level=3] [ref=e231]
          - img [ref=e233]
```

# Test source

```ts
  1   | import { Locator, Page } from "@playwright/test";
  2   | 
  3   | export default class Actions {
  4   |     protected readonly page: Page;
  5   |     constructor(page: Page) {
  6   |         this.page = page;
  7   |     }
  8   | 
  9   |     // ── Mouse & Keyboard ──────────────────────────────────────────────────────
  10  | 
  11  |     protected async click(element: Locator) {
> 12  |         await element.click();
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13  |     }
  14  | 
  15  |     protected async doubleClick(element: Locator) {
  16  |         await element.dblclick();
  17  |     }
  18  | 
  19  |     protected async rightClick(element: Locator) {
  20  |         await element.click({ button: 'right' });
  21  |     }
  22  | 
  23  |     protected async hover(element: Locator) {
  24  |         await element.hover();
  25  |     }
  26  | 
  27  |     protected async pressKey(element: Locator, key: string) {
  28  |         await element.press(key);
  29  |     }
  30  | 
  31  |     protected async dragAndDrop(source: Locator, target: Locator) {
  32  |         await source.dragTo(target);
  33  |     }
  34  | 
  35  |     // ── Text Input ────────────────────────────────────────────────────────────
  36  | 
  37  |     protected async enterText(element: Locator, text: string) {
  38  |         await element.fill(text);
  39  |     }
  40  | 
  41  |     protected async clearAndType(element: Locator, text: string) {
  42  |         await element.clear();
  43  |         await element.fill(text);
  44  |     }
  45  | 
  46  |     // ── State Checks ──────────────────────────────────────────────────────────
  47  | 
  48  |     protected async getText(element: Locator): Promise<string> {
  49  |         return await element.textContent() || '';
  50  |     }
  51  | 
  52  |     protected async getInputValue(element: Locator): Promise<string> {
  53  |         return await element.inputValue();
  54  |     }
  55  | 
  56  |     protected async getAttribute(element: Locator, attr: string): Promise<string | null> {
  57  |         return await element.getAttribute(attr);
  58  |     }
  59  | 
  60  |     protected async isVisible(element: Locator): Promise<boolean> {
  61  |         return await element.isVisible();
  62  |     }
  63  | 
  64  |     protected async isEnabled(element: Locator): Promise<boolean> {
  65  |         return await element.isEnabled();
  66  |     }
  67  | 
  68  |     protected async isDisabled(element: Locator): Promise<boolean> {
  69  |         return await element.isDisabled();
  70  |     }
  71  | 
  72  |     protected async isChecked(element: Locator): Promise<boolean> {
  73  |         return await element.isChecked();
  74  |     }
  75  | 
  76  |     // ── Waiting & Synchronization ─────────────────────────────────────────────
  77  | 
  78  |     protected async waitForElement(element: Locator, timeout: number = 5000) {
  79  |         await element.waitFor({ state: 'visible', timeout });
  80  |     }
  81  | 
  82  |     protected async waitForElementHidden(element: Locator, timeout: number = 5000) {
  83  |         await element.waitFor({ state: 'hidden', timeout });
  84  |     }
  85  | 
  86  |     protected async waitForURL(url: string | RegExp) {
  87  |         await this.page.waitForURL(url);
  88  |     }
  89  | 
  90  |     protected async waitForNetworkIdle() {
  91  |         await this.page.waitForLoadState('networkidle');
  92  |     }
  93  | 
  94  |     // ── Navigation & Page ─────────────────────────────────────────────────────
  95  | 
  96  |     protected async navigate(url: string) {
  97  |         await this.page.goto(url);
  98  |     }
  99  | 
  100 |     protected async reload() {
  101 |         await this.page.reload();
  102 |     }
  103 | 
  104 |     protected async goBack() {
  105 |         await this.page.goBack();
  106 |     }
  107 | 
  108 |     protected async getTitle(): Promise<string> {
  109 |         return await this.page.title();
  110 |     }
  111 | 
  112 |     protected async getCurrentURL(): Promise<string> {
```