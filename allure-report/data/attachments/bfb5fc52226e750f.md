# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new request successfully
- Location: tests\specs\myRequests.spec.ts:19:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Confirm Submit' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - img "Engaz Logo" [ref=e7]
        - button [ref=e8] [cursor=pointer]:
          - img [ref=e9]
      - navigation [ref=e11]:
        - generic [ref=e12]: System
        - generic [ref=e13]:
          - generic [ref=e14] [cursor=pointer]:
            - img [ref=e16]
            - generic [ref=e18]: Dashboard
          - generic [ref=e19]:
            - generic [ref=e20] [cursor=pointer]:
              - img [ref=e22]
              - generic [ref=e24]: Requests
              - generic [ref=e25]: 
            - list [ref=e26]:
              - listitem [ref=e27]:
                - generic [ref=e28] [cursor=pointer]:
                  - img [ref=e30]
                  - generic [ref=e32]: My Request
                - generic [ref=e33] [cursor=pointer]:
                  - img [ref=e35]
                  - generic [ref=e37]: Managerial Request
          - generic [ref=e38]:
            - generic [ref=e39] [cursor=pointer]:
              - img [ref=e41]
              - generic [ref=e43]: Attendance Management
              - generic [ref=e44]: 
            - list:
              - listitem [ref=e45]:
                - generic [ref=e46] [cursor=pointer]:
                  - img [ref=e48]
                  - generic [ref=e50]: Shifts
                - generic [ref=e51] [cursor=pointer]:
                  - img [ref=e53]
                  - generic [ref=e55]: Calendar
        - generic [ref=e56]: Employees
        - generic [ref=e57]:
          - generic [ref=e58] [cursor=pointer]:
            - img [ref=e60]
            - generic [ref=e62]: Employee Management
          - generic [ref=e63] [cursor=pointer]:
            - img [ref=e65]
            - generic [ref=e67]: Organization Chart
        - generic [ref=e68]: Company
        - generic [ref=e69]:
          - generic [ref=e70] [cursor=pointer]:
            - img [ref=e72]
            - generic [ref=e74]: Policies
          - generic [ref=e75] [cursor=pointer]:
            - img [ref=e77]
            - generic [ref=e79]: Holidays
          - generic [ref=e80] [cursor=pointer]:
            - img [ref=e82]
            - generic [ref=e84]: Announcements
        - generic [ref=e85]:
          - generic [ref=e86]:
            - generic [ref=e87] [cursor=pointer]:
              - img [ref=e89]
              - generic [ref=e91]: Recruitment
              - generic [ref=e92]: 
            - list:
              - listitem [ref=e93]:
                - generic [ref=e94] [cursor=pointer]:
                  - img [ref=e96]
                  - generic [ref=e98]: Hiring Phases
                - generic [ref=e99] [cursor=pointer]:
                  - img [ref=e101]
                  - generic [ref=e103]: Requisitions
                - generic [ref=e104] [cursor=pointer]:
                  - img [ref=e106]
                  - generic [ref=e108]: Job Posts
                - generic [ref=e109] [cursor=pointer]:
                  - img [ref=e111]
                  - generic [ref=e113]: Candidates
                - generic [ref=e114] [cursor=pointer]:
                  - img [ref=e116]
                  - generic [ref=e118]: Interviews
                - generic [ref=e119] [cursor=pointer]:
                  - img [ref=e121]
                  - generic [ref=e123]: Offers
          - generic [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img [ref=e127]
              - generic [ref=e129]: Reports
              - generic [ref=e130]: 
            - list:
              - listitem [ref=e131]:
                - generic [ref=e132] [cursor=pointer]:
                  - img [ref=e134]
                  - generic [ref=e136]: Daily Report
                - generic [ref=e137] [cursor=pointer]:
                  - img [ref=e139]
                  - generic [ref=e141]: Monthly Report
                - generic [ref=e142] [cursor=pointer]:
                  - img [ref=e144]
                  - generic [ref=e146]: Loan Report
          - generic [ref=e147] [cursor=pointer]:
            - img [ref=e149]
            - generic [ref=e151]: Imports & Exports
          - generic [ref=e152] [cursor=pointer]:
            - img [ref=e154]
            - generic [ref=e156]: System Preferences
            - img [ref=e157]
      - contentinfo "Sidebar footer" [ref=e159]:
        - button "Need Help? Speak up!" [ref=e160] [cursor=pointer]:
          - img [ref=e161]
          - generic [ref=e163]: Need Help? Speak up!
        - generic [ref=e164]:
          - text: Created by
          - img [ref=e165]
    - generic [ref=e174]:
      - generic [ref=e176]:
        - button "Toggle sidebar" [ref=e177] [cursor=pointer]:
          - generic [ref=e178]: 
        - navigation "Breadcrumb" [ref=e181]:
          - link "Home" [ref=e182] [cursor=pointer]:
            - /url: /en/dashboard
            - img [ref=e183]
          - img [ref=e186]
          - link "Requests" [ref=e188] [cursor=pointer]:
            - /url: /en/requests/list
          - img [ref=e190]
          - generic [ref=e192]: My Requests
        - generic [ref=e193]:
          - button "Change language" [ref=e194] [cursor=pointer]:
            - img [ref=e195]
            - generic [ref=e197]: EN
          - button "Notifications" [ref=e200] [cursor=pointer]:
            - img [ref=e202]
            - generic [ref=e205]: "263"
          - button "Branch" [disabled] [ref=e206]:
            - img [ref=e207]
            - generic [ref=e209]: Engaz | Egypt
            - generic [ref=e210]: 
          - button "User menu" [ref=e211] [cursor=pointer]:
            - generic [ref=e213]: 
            - generic [ref=e214]: مدير محدش يغير فييييه
            - generic [ref=e215]: 
      - generic [ref=e218]:
        - generic [ref=e219]:
          - generic [ref=e220]:
            - heading "My Requests" [level=2] [ref=e221]
            - button "Create New Request" [ref=e223] [cursor=pointer]:
              - img [ref=e224]
              - text: Create New Request
          - list [ref=e226]:
            - listitem [ref=e227]:
              - generic [ref=e228]:
                - generic [ref=e230]: Annual
                - generic [ref=e231]: Annual
              - generic [ref=e232]: 10/10
            - listitem [ref=e233]:
              - generic [ref=e234]:
                - generic [ref=e236]: Casual
                - generic [ref=e237]: Annual
              - generic [ref=e238]: 12/12
            - listitem [ref=e239]:
              - generic [ref=e240]:
                - generic [ref=e242]: Excuse
                - generic [ref=e243]: Monthly
              - generic [ref=e244]: 0/0
            - listitem [ref=e245]:
              - generic [ref=e246]:
                - generic [ref=e248]: Paternity
                - generic [ref=e249]: Annual
              - generic [ref=e250]: 12/12
          - generic [ref=e254]:
            - generic [ref=e255]:
              - generic: 
              - textbox "Search by exact or partial Request ID..." [ref=e256]
            - button "Filter" [ref=e257] [cursor=pointer]:
              - generic [ref=e258]: Filter
        - generic [ref=e261]:
          - table [ref=e264]:
            - rowgroup [ref=e265]:
              - row "Request ID Sort icon Request type Request date Sort icon Value Submission date Sort icon Status Actions" [ref=e266]:
                - columnheader "Request ID Sort icon" [ref=e267] [cursor=pointer]:
                  - text: Request ID
                  - img "Sort icon" [ref=e269]
                - columnheader "Request type" [ref=e270]
                - columnheader "Request date Sort icon" [ref=e271] [cursor=pointer]:
                  - text: Request date
                  - img "Sort icon" [ref=e273]
                - columnheader "Value" [ref=e274]
                - columnheader "Submission date Sort icon" [ref=e275] [cursor=pointer]:
                  - text: Submission date
                  - img "Sort icon" [ref=e277]
                - columnheader "Status" [ref=e278]
                - columnheader "Actions" [ref=e279]
            - rowgroup [ref=e280]:
              - row "no-data You haven't submitted any requests. Click the button below to create your first Create New Request" [ref=e281]:
                - cell "no-data You haven't submitted any requests. Click the button below to create your first Create New Request" [ref=e282]:
                  - generic [ref=e285]:
                    - img "no-data" [ref=e288]
                    - generic [ref=e290]: You haven't submitted any requests. Click the button below to create your first
                    - button "Create New Request" [ref=e291] [cursor=pointer]:
                      - generic [ref=e292]: Create New Request
          - generic [ref=e295]:
            - generic [ref=e296]:
              - generic [ref=e297] [cursor=pointer]:
                - text: Show Entries
                - generic [ref=e298]:
                  - combobox "20" [ref=e299]
                  - button "dropdown trigger" [ref=e300]:
                    - img [ref=e301]
              - generic [ref=e303]: Showing 0-0 of 0 row
            - generic [ref=e305]:
              - button "Previous" [disabled] [ref=e306]:
                - img "previous" [ref=e307]
                - generic [ref=e308]: Previous
              - navigation "PAGINATION.PAGE_NAVIGATION"
              - button "Next" [disabled] [ref=e309]:
                - generic [ref=e310]: Next
                - img "next" [ref=e311]
  - dialog [ref=e313]:
    - generic [ref=e318]:
      - generic [ref=e319]:
        - heading "Create Request" [level=3] [ref=e322]
        - button "Close" [ref=e323] [cursor=pointer]
      - generic [ref=e324]:
        - generic [ref=e325]: Request Summary
        - generic [ref=e326]:
          - generic [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329]:
                - generic [ref=e330]: Request Type
                - generic [ref=e331]: Maternity Leave0
              - generic [ref=e332]:
                - generic [ref=e333]: Request Date
                - generic [ref=e334]: 21/10/2026 – 24/10/2026
            - generic [ref=e336]:
              - generic [ref=e337]:
                - generic [ref=e338]: Expected Delivery Date
                - generic [ref=e339]: 28/06/2026
              - generic [ref=e340]:
                - generic [ref=e341]: Total Requested Days
                - generic [ref=e342]: 3 days
          - generic [ref=e344]:
            - generic [ref=e345]: Notes
            - generic [ref=e346]: Test request notes
          - generic [ref=e348]:
            - generic [ref=e349]: Attachments
            - generic [ref=e351]: —
      - generic [ref=e352]:
        - button "Back" [ref=e353] [cursor=pointer]
        - button "Submit" [active] [ref=e354] [cursor=pointer]
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
      |                       ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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