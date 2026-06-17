# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new sick leave request successfully
- Location: tests\specs\myRequests.spec.ts:30:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('section')
Expected substring: "Attachment deadline"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('section')

```

```yaml
- img "Engaz Logo"
- button:
  - img
- navigation:
  - text: System
  - img
  - text: Dashboard
  - img
  - text: Requests 
  - list:
    - listitem:
      - img
      - text: My Request
      - img
      - text: Managerial Request
  - img
  - text: Attendance Management 
  - list:
    - listitem:
      - img
      - text: Shifts
      - img
      - text: Calendar
  - text: Employees
  - img
  - text: Employee Management
  - img
  - text: Organization Chart Company
  - img
  - text: Policies
  - img
  - text: Holidays
  - img
  - text: Announcements
  - img
  - text: Recruitment 
  - list:
    - listitem:
      - img
      - text: Hiring Phases
      - img
      - text: Requisitions
      - img
      - text: Job Posts
      - img
      - text: Candidates
      - img
      - text: Interviews
      - img
      - text: Offers
  - img
  - text: Reports 
  - list:
    - listitem:
      - img
      - text: Daily Report
      - img
      - text: Monthly Report
      - img
      - text: Loan Report
  - img
  - text: Imports & Exports
  - img
  - text: System Preferences
- contentinfo "Sidebar footer":
  - button "Need Help? Speak up!":
    - img
    - text: Need Help? Speak up!
  - text: Created by
  - img
- navigation "Breadcrumb":
  - link "Home":
    - /url: /en/dashboard
    - img
  - link "Requests":
    - /url: /en/requests/list
  - text: My Requests
- button "Change language":
  - img
  - text: EN
- button "Notifications": "268"
- button "Branch" [disabled]:
  - img
  - text: Engaz | Egypt
- button "User menu": مدير محدش يغير فييييه
- heading "My Requests" [level=2]
- button "Create New Request":
  - img
  - text: Create New Request
- list:
  - listitem: Annual Annual 10/10
  - listitem: Casual Annual 12/12
  - listitem: Excuse Monthly 0/0
  - listitem: Maternity Annual 14/14
- text: 
- textbox "Search by exact or partial Request ID..."
- button "Filter"
- table:
  - rowgroup:
    - row "Request ID Sort icon Request type Request date Sort icon Value Submission date Sort icon Status Actions":
      - columnheader "Request ID Sort icon":
        - text: Request ID
        - img "Sort icon"
      - columnheader "Request type"
      - columnheader "Request date Sort icon":
        - text: Request date
        - img "Sort icon"
      - columnheader "Value"
      - columnheader "Submission date Sort icon":
        - text: Submission date
        - img "Sort icon"
      - columnheader "Status"
      - columnheader "Actions"
  - rowgroup:
    - row "REQ-2026-932 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:52 AM Pending View":
      - cell "REQ-2026-932"
      - cell "Sick Leave1"
      - cell "Sep 21 - Sep 24, 2026"
      - cell "4 D"
      - cell "Jun 11,2026 12:52 AM"
      - cell "Pending"
      - cell "View":
        - button "View":
          - img "View"
    - row "REQ-2026-931 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:27 AM Cancelled View":
      - cell "REQ-2026-931"
      - cell "Sick Leave1"
      - cell "Sep 21 - Sep 24, 2026"
      - cell "4 D"
      - cell "Jun 11,2026 12:27 AM"
      - cell "Cancelled"
      - cell "View":
        - button "View":
          - img "View"
    - row "REQ-2026-930 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:12 AM Cancelled View":
      - cell "REQ-2026-930"
      - cell "Sick Leave1"
      - cell "Sep 21 - Sep 24, 2026"
      - cell "4 D"
      - cell "Jun 11,2026 12:12 AM"
      - cell "Cancelled"
      - cell "View":
        - button "View":
          - img "View"
    - row "REQ-2026-929 Maternity Leave0 Sep 21 - Sep 24, 2026 4 D Jun 10,2026 05:35 PM Cancelled View":
      - cell "REQ-2026-929"
      - cell "Maternity Leave0"
      - cell "Sep 21 - Sep 24, 2026"
      - cell "4 D"
      - cell "Jun 10,2026 05:35 PM"
      - cell "Cancelled"
      - cell "View":
        - button "View":
          - img "View"
- text: Show Entries
- combobox "20"
- button "dropdown trigger":
  - img
- text: Showing 1-4 of 4 row
- button "Previous" [disabled]:
  - img "previous"
  - text: Previous
- navigation "PAGINATION.PAGE_NAVIGATION":
  - button "PAGINATION.GO_TO_PAGE": "1"
- button "Next" [disabled]:
  - text: Next
  - img "next"
```

# Test source

```ts
  1  | import { Page, expect } from "@playwright/test";
  2  | import Actions from "../Utils/actionsUtils";
  3  | import { MyRequestsLocators } from "../Locators/myRequestsLocators";
  4  | 
  5  | export class MyRequestsPage extends Actions {
  6  |     private readonly locators: MyRequestsLocators;
  7  | 
  8  |     constructor(page: Page) {
  9  |         super(page);
  10 |         this.locators = new MyRequestsLocators(page);
  11 |     }
  12 | 
  13 |     async navigateToMyRequests() {
  14 |         await this.click(this.locators.requestsTab);
  15 |         await this.waitForElement(this.locators.myRequestsTab);
  16 |         await this.click(this.locators.myRequestsTab);
  17 |         await this.page.waitForLoadState('networkidle');
  18 |     }
  19 | 
  20 |     async createNewRequestFunction() {
  21 |         await this.waitForElement(this.locators.createRequestButton);
  22 |         await this.click(this.locators.createRequestButton);
  23 |         await this.waitForElement(this.locators.requestTypeList);
  24 |         await this.click(this.locators.requestTypeList);
  25 |     }
  26 |     async createNewMaternityRequest(requestType: string, notes: string) {
  27 |         await this.click(this.locators.maternityRequestTypeOption);
  28 |         await this.click(this.locators.requestDate);
  29 |         await this.click(this.locators.monthSelection);
  30 |         await this.click(this.locators.monthSelection);
  31 |         await this.click(this.locators.monthSelection);
  32 |         await this.click(this.locators.monthSelection);
  33 |         await this.waitForElement(this.locators.firstDaySelection);
  34 |         await this.click(this.locators.firstDaySelection);
  35 |         await this.waitForElement(this.locators.secondDaySelection);
  36 |         await this.click(this.locators.secondDaySelection);
  37 |         await this.click(this.locators.requestDeliveryDate);
  38 |         await this.waitForElement(this.locators.deliveryDatePicker);
  39 |         await this.click(this.locators.deliveryDatePicker);
  40 |         await this.enterText(this.locators.requestNotes, notes);
  41 |         await this.click(this.locators.continueRequestButton);
  42 |         await this.click(this.locators.submitRequestButton);
  43 |     }
  44 | 
  45 |     async createNewSickLeaveRequest(requestType: string, notes: string) {
  46 |         await this.click(this.locators.sickLeaveRequestTypeOption);
  47 |         await this.click(this.locators.requestDate);
  48 |         await this.click(this.locators.monthSelection);
  49 |         await this.click(this.locators.monthSelection);
  50 |         await this.click(this.locators.monthSelection);
  51 |         await this.click(this.locators.monthSelection);
  52 |         await this.waitForElement(this.locators.firstDaySelection);
  53 |         await this.click(this.locators.firstDaySelection);
  54 |         await this.waitForElement(this.locators.secondDaySelection);
  55 |         await this.click(this.locators.secondDaySelection);
  56 |         await this.click(this.locators.continueRequestButton);
  57 |         await this.click(this.locators.submitRequestButton);
  58 |     }
  59 |     async cancelRequest() {
  60 |         //Cancel the request to make new request creation possible in next test run
  61 |         await this.page.waitForTimeout(2000);
  62 |         await this.click(this.locators.previewRequestButton);
  63 |         await this.click(this.locators.cancelRequestButton);
  64 |         await this.click(this.locators.confirmCancelButton);
  65 |     }
  66 | 
  67 |     async getSuccessMessage(): Promise<string> {
  68 |         return await this.getText(this.locators.successMessage);
  69 |     }
  70 | 
  71 |     async getCancelSuccessMessage(): Promise<string> {
  72 |         return await this.getText(this.locators.cancelSuccessMessage);
  73 |     }
  74 | 
  75 |     async assertAttachmentDeadlineAlert() {
> 76 |         await expect(this.locators.requestSickAttachmentsAlert).toContainText('Attachment deadline');
     |                                                                 ^ Error: expect(locator).toContainText(expected) failed
  77 |     }
  78 | }
```