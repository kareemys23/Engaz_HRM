# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new sick leave request successfully
- Location: tests\specs\myRequests.spec.ts:30:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'Select request type' })
    - locator resolved to <span disabled pc129="" pc130="" tabindex="-1" role="combobox" autofocus="true" id="request-type" aria-disabled="true" aria-expanded="false" aria-haspopup="listbox" data-pc-section="label" aria-label="Select request type" class="p-placeholder p-select-label ng-star-inserted">…</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    8 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
                - generic [ref=e29] [cursor=pointer]:
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
            - generic [ref=e204]: "276"
          - button "Branch" [disabled] [ref=e205]:
            - img [ref=e206]
            - generic [ref=e208]: Engaz | Egypt
            - generic [ref=e209]: 
          - button "User menu" [ref=e210] [cursor=pointer]:
            - generic [ref=e212]: 
            - generic [ref=e213]: مدير محدش يغير فييييه
            - generic [ref=e214]: 
      - generic [ref=e217]:
        - generic [ref=e218]:
          - generic [ref=e219]:
            - heading "My Requests" [level=2] [ref=e220]
            - button "Create New Request" [ref=e222] [cursor=pointer]:
              - img [ref=e223]
              - text: Create New Request
          - list [ref=e225]:
            - listitem [ref=e226]:
              - generic [ref=e227]:
                - generic [ref=e229]: Annual
                - generic [ref=e230]: Annual
              - generic [ref=e231]: 10/10
            - listitem [ref=e232]:
              - generic [ref=e233]:
                - generic [ref=e235]: Casual
                - generic [ref=e236]: Annual
              - generic [ref=e237]: 12/12
            - listitem [ref=e238]:
              - generic [ref=e239]:
                - generic [ref=e241]: Excuse
                - generic [ref=e242]: Monthly
              - generic [ref=e243]: 0/0
            - listitem [ref=e244]:
              - generic [ref=e245]:
                - generic [ref=e247]: Maternity
                - generic [ref=e248]: Annual
              - generic [ref=e249]: 14/14
          - generic [ref=e253]:
            - generic [ref=e254]:
              - generic: 
              - textbox "Search by exact or partial Request ID..." [ref=e255]
            - button "Filter" [ref=e256] [cursor=pointer]:
              - generic [ref=e257]: Filter
        - generic [ref=e260]:
          - table [ref=e263]:
            - rowgroup [ref=e264]:
              - row "Request ID Sort icon Request type Request date Sort icon Value Submission date Sort icon Status Actions" [ref=e265]:
                - columnheader "Request ID Sort icon" [ref=e266] [cursor=pointer]:
                  - text: Request ID
                  - img "Sort icon" [ref=e268]
                - columnheader "Request type" [ref=e269]
                - columnheader "Request date Sort icon" [ref=e270] [cursor=pointer]:
                  - text: Request date
                  - img "Sort icon" [ref=e272]
                - columnheader "Value" [ref=e273]
                - columnheader "Submission date Sort icon" [ref=e274] [cursor=pointer]:
                  - text: Submission date
                  - img "Sort icon" [ref=e276]
                - columnheader "Status" [ref=e277]
                - columnheader "Actions" [ref=e278]
            - rowgroup [ref=e279]:
              - row "REQ-2026-935 Sick Leave1 Oct 21 - Oct 24, 2026 3 D Jun 11,2026 01:09 AM Cancelled View" [ref=e280]:
                - cell "REQ-2026-935" [ref=e281]:
                  - generic [ref=e284]: REQ-2026-935
                - cell "Sick Leave1" [ref=e285]:
                  - generic [ref=e288]: Sick Leave1
                - cell "Oct 21 - Oct 24, 2026" [ref=e289]:
                  - generic [ref=e292]: Oct 21 - Oct 24, 2026
                - cell "3 D" [ref=e293]:
                  - generic [ref=e296]: 3 D
                - cell "Jun 11,2026 01:09 AM" [ref=e297]
                - cell "Cancelled" [ref=e298]:
                  - generic [ref=e299]: Cancelled
                - cell "View" [ref=e300]:
                  - button "View" [ref=e303] [cursor=pointer]:
                    - img "View" [ref=e304]
              - row "REQ-2026-934 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 01:06 AM Cancelled View" [ref=e305]:
                - cell "REQ-2026-934" [ref=e306]:
                  - generic [ref=e309]: REQ-2026-934
                - cell "Sick Leave1" [ref=e310]:
                  - generic [ref=e313]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e314]:
                  - generic [ref=e317]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e318]:
                  - generic [ref=e321]: 4 D
                - cell "Jun 11,2026 01:06 AM" [ref=e322]
                - cell "Cancelled" [ref=e323]:
                  - generic [ref=e324]: Cancelled
                - cell "View" [ref=e325]:
                  - button "View" [ref=e328] [cursor=pointer]:
                    - img "View" [ref=e329]
              - row "REQ-2026-933 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:56 AM Cancelled View" [ref=e330]:
                - cell "REQ-2026-933" [ref=e331]:
                  - generic [ref=e334]: REQ-2026-933
                - cell "Sick Leave1" [ref=e335]:
                  - generic [ref=e338]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e339]:
                  - generic [ref=e342]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e343]:
                  - generic [ref=e346]: 4 D
                - cell "Jun 11,2026 12:56 AM" [ref=e347]
                - cell "Cancelled" [ref=e348]:
                  - generic [ref=e349]: Cancelled
                - cell "View" [ref=e350]:
                  - button "View" [ref=e353] [cursor=pointer]:
                    - img "View" [ref=e354]
              - row "REQ-2026-932 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:52 AM Cancelled View" [ref=e355]:
                - cell "REQ-2026-932" [ref=e356]:
                  - generic [ref=e359]: REQ-2026-932
                - cell "Sick Leave1" [ref=e360]:
                  - generic [ref=e363]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e364]:
                  - generic [ref=e367]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e368]:
                  - generic [ref=e371]: 4 D
                - cell "Jun 11,2026 12:52 AM" [ref=e372]
                - cell "Cancelled" [ref=e373]:
                  - generic [ref=e374]: Cancelled
                - cell "View" [ref=e375]:
                  - button "View" [ref=e378] [cursor=pointer]:
                    - img "View" [ref=e379]
              - row "REQ-2026-931 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:27 AM Cancelled View" [ref=e380]:
                - cell "REQ-2026-931" [ref=e381]:
                  - generic [ref=e384]: REQ-2026-931
                - cell "Sick Leave1" [ref=e385]:
                  - generic [ref=e388]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e389]:
                  - generic [ref=e392]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e393]:
                  - generic [ref=e396]: 4 D
                - cell "Jun 11,2026 12:27 AM" [ref=e397]
                - cell "Cancelled" [ref=e398]:
                  - generic [ref=e399]: Cancelled
                - cell "View" [ref=e400]:
                  - button "View" [ref=e403] [cursor=pointer]:
                    - img "View" [ref=e404]
              - row "REQ-2026-930 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:12 AM Cancelled View" [ref=e405]:
                - cell "REQ-2026-930" [ref=e406]:
                  - generic [ref=e409]: REQ-2026-930
                - cell "Sick Leave1" [ref=e410]:
                  - generic [ref=e413]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e414]:
                  - generic [ref=e417]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e418]:
                  - generic [ref=e421]: 4 D
                - cell "Jun 11,2026 12:12 AM" [ref=e422]
                - cell "Cancelled" [ref=e423]:
                  - generic [ref=e424]: Cancelled
                - cell "View" [ref=e425]:
                  - button "View" [ref=e428] [cursor=pointer]:
                    - img "View" [ref=e429]
              - row "REQ-2026-929 Maternity Leave0 Sep 21 - Sep 24, 2026 4 D Jun 10,2026 05:35 PM Cancelled View" [ref=e430]:
                - cell "REQ-2026-929" [ref=e431]:
                  - generic [ref=e434]: REQ-2026-929
                - cell "Maternity Leave0" [ref=e435]:
                  - generic [ref=e438]: Maternity Leave0
                - cell "Sep 21 - Sep 24, 2026" [ref=e439]:
                  - generic [ref=e442]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e443]:
                  - generic [ref=e446]: 4 D
                - cell "Jun 10,2026 05:35 PM" [ref=e447]
                - cell "Cancelled" [ref=e448]:
                  - generic [ref=e449]: Cancelled
                - cell "View" [ref=e450]:
                  - button "View" [ref=e453] [cursor=pointer]:
                    - img "View" [ref=e454]
          - generic [ref=e457]:
            - generic [ref=e458]:
              - generic [ref=e459] [cursor=pointer]:
                - text: Show Entries
                - generic [ref=e460]:
                  - combobox "20" [ref=e461]
                  - button "dropdown trigger" [ref=e462]:
                    - img [ref=e463]
              - generic [ref=e465]: Showing 1-7 of 7 row
            - generic [ref=e467]:
              - button "Previous" [disabled] [ref=e468]:
                - img "previous" [ref=e469]
                - generic [ref=e470]: Previous
              - navigation "PAGINATION.PAGE_NAVIGATION" [ref=e471]:
                - button "PAGINATION.GO_TO_PAGE" [ref=e472] [cursor=pointer]: "1"
              - button "Next" [disabled] [ref=e473]:
                - generic [ref=e474]: Next
                - img "next" [ref=e475]
  - dialog [ref=e477]:
    - generic [ref=e482]:
      - generic [ref=e483]:
        - heading "Create Request" [level=3] [ref=e486]
        - button "Close" [active] [ref=e487] [cursor=pointer]
      - generic [ref=e488]:
        - generic [ref=e489]:
          - generic [ref=e490]: Request Type *
          - generic:
            - combobox "Select request type" [disabled]
            - button "dropdown trigger":
              - img
        - generic [ref=e493]:
          - generic [ref=e494]:
            - generic [ref=e495]: Request Date *
            - generic [ref=e500] [cursor=pointer]:
              - img [ref=e502]
              - generic [ref=e504]: Select request date
          - generic [ref=e505]:
            - generic [ref=e506]: Notes *
            - generic [ref=e507]:
              - textbox "Notes *" [ref=e508]:
                - /placeholder: Add Notes
              - generic [ref=e509]: Maximum 250 characters
          - generic [ref=e510]:
            - generic [ref=e511]: Attachments *
            - generic [ref=e515] [cursor=pointer]:
              - img "upload" [ref=e517]
              - generic [ref=e518]:
                - generic [ref=e519]:
                  - paragraph [ref=e520]: Click to upload
                  - paragraph [ref=e521]: or drag and drop
                - paragraph [ref=e522]: PDF, DOC, DOCX, JPG, JPEG, PNG (max. 5MB)
      - generic [ref=e523]:
        - button "Cancel" [ref=e524] [cursor=pointer]
        - button "Continue" [disabled] [ref=e525]
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
      |                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
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
  78  |     protected async waitForElement(element: Locator, timeout: number = 10000) {
  79  |         await element.waitFor({ state: 'visible', timeout });
  80  |     }
  81  | 
  82  |     protected async waitForElementHidden(element: Locator, timeout: number = 10000) {
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
  97  |         await this.page.goto(url, { waitUntil: 'domcontentloaded' });
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