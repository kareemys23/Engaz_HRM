# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\myRequests.spec.ts >> My Requests >> create new sick leave request successfully
- Location: tests\specs\myRequests.spec.ts:30:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - generic [ref=e204]: "271"
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
              - row "REQ-2026-933 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:56 AM Pending View" [ref=e280]:
                - cell "REQ-2026-933" [ref=e281]:
                  - generic [ref=e284]: REQ-2026-933
                - cell "Sick Leave1" [ref=e285]:
                  - generic [ref=e288]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e289]:
                  - generic [ref=e292]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e293]:
                  - generic [ref=e296]: 4 D
                - cell "Jun 11,2026 12:56 AM" [ref=e297]
                - cell "Pending" [ref=e298]:
                  - generic [ref=e299]: Pending
                - cell "View" [ref=e300]:
                  - button "View" [ref=e303] [cursor=pointer]:
                    - img "View" [ref=e304]
              - row "REQ-2026-932 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:52 AM Cancelled View" [ref=e305]:
                - cell "REQ-2026-932" [ref=e306]:
                  - generic [ref=e309]: REQ-2026-932
                - cell "Sick Leave1" [ref=e310]:
                  - generic [ref=e313]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e314]:
                  - generic [ref=e317]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e318]:
                  - generic [ref=e321]: 4 D
                - cell "Jun 11,2026 12:52 AM" [ref=e322]
                - cell "Cancelled" [ref=e323]:
                  - generic [ref=e324]: Cancelled
                - cell "View" [ref=e325]:
                  - button "View" [ref=e328] [cursor=pointer]:
                    - img "View" [ref=e329]
              - row "REQ-2026-931 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:27 AM Cancelled View" [ref=e330]:
                - cell "REQ-2026-931" [ref=e331]:
                  - generic [ref=e334]: REQ-2026-931
                - cell "Sick Leave1" [ref=e335]:
                  - generic [ref=e338]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e339]:
                  - generic [ref=e342]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e343]:
                  - generic [ref=e346]: 4 D
                - cell "Jun 11,2026 12:27 AM" [ref=e347]
                - cell "Cancelled" [ref=e348]:
                  - generic [ref=e349]: Cancelled
                - cell "View" [ref=e350]:
                  - button "View" [ref=e353] [cursor=pointer]:
                    - img "View" [ref=e354]
              - row "REQ-2026-930 Sick Leave1 Sep 21 - Sep 24, 2026 4 D Jun 11,2026 12:12 AM Cancelled View" [ref=e355]:
                - cell "REQ-2026-930" [ref=e356]:
                  - generic [ref=e359]: REQ-2026-930
                - cell "Sick Leave1" [ref=e360]:
                  - generic [ref=e363]: Sick Leave1
                - cell "Sep 21 - Sep 24, 2026" [ref=e364]:
                  - generic [ref=e367]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e368]:
                  - generic [ref=e371]: 4 D
                - cell "Jun 11,2026 12:12 AM" [ref=e372]
                - cell "Cancelled" [ref=e373]:
                  - generic [ref=e374]: Cancelled
                - cell "View" [ref=e375]:
                  - button "View" [ref=e378] [cursor=pointer]:
                    - img "View" [ref=e379]
              - row "REQ-2026-929 Maternity Leave0 Sep 21 - Sep 24, 2026 4 D Jun 10,2026 05:35 PM Cancelled View" [ref=e380]:
                - cell "REQ-2026-929" [ref=e381]:
                  - generic [ref=e384]: REQ-2026-929
                - cell "Maternity Leave0" [ref=e385]:
                  - generic [ref=e388]: Maternity Leave0
                - cell "Sep 21 - Sep 24, 2026" [ref=e389]:
                  - generic [ref=e392]: Sep 21 - Sep 24, 2026
                - cell "4 D" [ref=e393]:
                  - generic [ref=e396]: 4 D
                - cell "Jun 10,2026 05:35 PM" [ref=e397]
                - cell "Cancelled" [ref=e398]:
                  - generic [ref=e399]: Cancelled
                - cell "View" [ref=e400]:
                  - button "View" [ref=e403] [cursor=pointer]:
                    - img "View" [ref=e404]
          - generic [ref=e407]:
            - generic [ref=e408]:
              - generic [ref=e409] [cursor=pointer]:
                - text: Show Entries
                - generic [ref=e410]:
                  - combobox "20" [ref=e411]
                  - button "dropdown trigger" [ref=e412]:
                    - img [ref=e413]
              - generic [ref=e415]: Showing 1-5 of 5 row
            - generic [ref=e417]:
              - button "Previous" [disabled] [ref=e418]:
                - img "previous" [ref=e419]
                - generic [ref=e420]: Previous
              - navigation "PAGINATION.PAGE_NAVIGATION" [ref=e421]:
                - button "PAGINATION.GO_TO_PAGE" [ref=e422] [cursor=pointer]: "1"
              - button "Next" [disabled] [ref=e423]:
                - generic [ref=e424]: Next
                - img "next" [ref=e425]
  - dialog [ref=e427]:
    - generic [ref=e432]:
      - generic [ref=e433]:
        - heading "Create Request" [level=3] [ref=e436]
        - button "Close" [ref=e437] [cursor=pointer]
      - generic [ref=e438]:
        - generic [ref=e439]: Request Summary
        - generic [ref=e440]:
          - generic [ref=e442]:
            - generic [ref=e443]:
              - generic [ref=e444]: Request Type
              - generic [ref=e445]: Sick Leave1
            - generic [ref=e446]:
              - generic [ref=e447]: Request Date
              - generic [ref=e448]: 21/09/2026 – 24/09/2026
            - generic [ref=e449]:
              - generic [ref=e450]: Total Requested Days
              - generic [ref=e451]: 4 days
          - generic [ref=e453]:
            - generic [ref=e454]: Notes
            - generic [ref=e455]: —
          - generic [ref=e457]:
            - generic [ref=e458]: Attachments
            - generic [ref=e460]: —
            - status [ref=e461]: You will need to upload a medical document by 15/06/2026 (4 days after submission). The request will be automatically rejected if no document is provided.
      - generic [ref=e462]:
        - button "Back" [ref=e463] [cursor=pointer]
        - button "Submit" [ref=e464] [cursor=pointer]
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
  15 |         await loginPage.loginSuccessfully(loginData.validUser.email, loginData.validUser.password);
  16 |         await expect(page).toHaveURL(loginData.validUser.redirectURL);
  17 |     });
  18 | 
  19 |     test('create new request Maternity Request successfully', async () => {
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
  34 |         const attachmentAlertVisible = await myRequestsPage.assertAttachmentDeadlineAlert();
> 35 |         expect(attachmentAlertVisible).toBe(true);
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  36 |         await myRequestsPage.submitSickLeaveRequest();
  37 |         await myRequestsPage.cancelRequest();
  38 |         const successMessage = await myRequestsPage.getSuccessMessage();
  39 |         expect(successMessage).toBeTruthy();
  40 |         const cancelSuccessMessage = await myRequestsPage.getCancelSuccessMessage();
  41 |         expect(cancelSuccessMessage).toBeTruthy();
  42 |     });
  43 | 
  44 |     // test.afterAll(async ({ page }) => {
  45 |     //     await page.close();
  46 |     // }
  47 | });
```