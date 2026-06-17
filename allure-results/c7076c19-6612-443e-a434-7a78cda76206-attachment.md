# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new request successfully
- Location: tests\specs\myRequests.spec.ts:19:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Create New Request' }) resolved to 2 elements:
    1) <button type="button" class="btn btn-primary sm" _ngcontent-ng-c1812363789="">…</button> aka getByRole('button', { name: 'Create New Request' }).first()
    2) <button _ngcontent-ng-c194676374="" class="btn btn-primary w-100 ng-star-inserted">…</button> aka locator('#pn_id_1-table').getByRole('button', { name: 'Create New Request' })

Call log:
  - waiting for getByRole('button', { name: 'Create New Request' })

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
        - link "Requests" [ref=e187] [cursor=pointer]:
          - /url: /en/requests/list
        - img [ref=e189]
        - generic [ref=e191]: My Requests
      - generic [ref=e192]:
        - button "Change language" [ref=e193] [cursor=pointer]:
          - img [ref=e194]
          - generic [ref=e196]: EN
        - button "Notifications" [ref=e199] [cursor=pointer]:
          - img [ref=e201]
        - button "Branch" [disabled] [ref=e204]:
          - img [ref=e205]
          - generic [ref=e207]: Engaz | Egypt
          - generic [ref=e208]: 
        - button "User menu" [ref=e209] [cursor=pointer]:
          - generic [ref=e211]: 
          - generic [ref=e212]: مدير محدش يغير فييييه
          - generic [ref=e213]: 
    - generic [ref=e216]:
      - generic [ref=e217]:
        - generic [ref=e218]:
          - heading "My Requests" [level=2] [ref=e219]
          - button "Create New Request" [ref=e221] [cursor=pointer]:
            - img [ref=e222]
            - text: Create New Request
        - list [ref=e224]:
          - listitem [ref=e225]:
            - generic [ref=e226]:
              - generic [ref=e228]: Annual
              - generic [ref=e229]: Annual
            - generic [ref=e230]: 10/10
          - listitem [ref=e231]:
            - generic [ref=e232]:
              - generic [ref=e234]: Casual
              - generic [ref=e235]: Annual
            - generic [ref=e236]: 12/12
          - listitem [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e240]: Excuse
              - generic [ref=e241]: Monthly
            - generic [ref=e242]: 0/0
          - listitem [ref=e243]:
            - generic [ref=e244]:
              - generic [ref=e246]: Paternity
              - generic [ref=e247]: Annual
            - generic [ref=e248]: 12/12
        - generic [ref=e252]:
          - generic [ref=e253]:
            - generic: 
            - textbox "Search by exact or partial Request ID..." [ref=e254]
          - button "Filter" [ref=e255] [cursor=pointer]:
            - generic [ref=e256]: Filter
      - generic [ref=e259]:
        - table [ref=e262]:
          - rowgroup [ref=e263]:
            - row "Request ID Sort icon Request type Request date Sort icon Value Submission date Sort icon Status Actions" [ref=e264]:
              - columnheader "Request ID Sort icon" [ref=e265] [cursor=pointer]:
                - text: Request ID
                - img "Sort icon" [ref=e267]
              - columnheader "Request type" [ref=e268]
              - columnheader "Request date Sort icon" [ref=e269] [cursor=pointer]:
                - text: Request date
                - img "Sort icon" [ref=e271]
              - columnheader "Value" [ref=e272]
              - columnheader "Submission date Sort icon" [ref=e273] [cursor=pointer]:
                - text: Submission date
                - img "Sort icon" [ref=e275]
              - columnheader "Status" [ref=e276]
              - columnheader "Actions" [ref=e277]
          - rowgroup [ref=e278]:
            - row "no-data You haven't submitted any requests. Click the button below to create your first Create New Request" [ref=e279]:
              - cell "no-data You haven't submitted any requests. Click the button below to create your first Create New Request" [ref=e280]:
                - generic [ref=e283]:
                  - img "no-data" [ref=e286]
                  - generic [ref=e288]: You haven't submitted any requests. Click the button below to create your first
                  - button "Create New Request" [ref=e289] [cursor=pointer]:
                    - generic [ref=e290]: Create New Request
        - generic [ref=e293]:
          - generic [ref=e294]:
            - generic [ref=e295] [cursor=pointer]:
              - text: Show Entries
              - generic [ref=e296]:
                - combobox "20" [ref=e297]
                - button "dropdown trigger" [ref=e298]:
                  - img [ref=e299]
            - generic [ref=e301]: Showing 0-0 of 0 row
          - generic [ref=e303]:
            - button "Previous" [disabled] [ref=e304]:
              - img "previous" [ref=e305]
              - generic [ref=e306]: Previous
            - navigation "PAGINATION.PAGE_NAVIGATION"
            - button "Next" [disabled] [ref=e307]:
              - generic [ref=e308]: Next
              - img "next" [ref=e309]
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
      |                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Create New Request' }) resolved to 2 elements:
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