# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\managerRequests.spec.ts >> Manager Requests >> create new request Maternity Request successfully
- Location: tests\specs\managerRequests.spec.ts:19:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Reject' }).first()
    - locator resolved to <button type="button" class="action-btn" _ngcontent-ng-c944489365="">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c767750606="" class="preview-request-container skeleton-card">…</div> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted ng-animating">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-ng-c767750606="" class="preview-request-container skeleton-card">…</div> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c767750606="" class="preview-request-container">…</div> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <h2 _ngcontent-ng-c767750606="" class="preview-request-employee-info-title"> Employee Information </h2> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <h2 _ngcontent-ng-c767750606="" class="preview-request-employee-info-title"> Employee Information </h2> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c767750606="" class="preview-request-container">…</div> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c767750606="" class="preview-request-container">…</div> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <h2 _ngcontent-ng-c767750606="" class="preview-request-employee-info-title"> Employee Information </h2> from <div pc45="" pc550="" pfocustrap="" role="complementary" data-pc-name="drawer" data-pc-section="root" class="ng-trigger ng-trigger-panelState ng-tns-c1046023140-3 p-component p-drawer p-drawer-open p-drawer-right request-preview-drawer ng-star-inserted">…</div> subtree intercepts pointer events
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
          - generic [ref=e191]: Manager requests
        - generic [ref=e192]:
          - button "Change language" [ref=e193] [cursor=pointer]:
            - img [ref=e194]
            - generic [ref=e196]: EN
          - button "Notifications" [ref=e199] [cursor=pointer]:
            - img [ref=e201]
            - generic [ref=e204]: "285"
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
            - heading "Manager requests" [level=2] [ref=e220]
            - generic [ref=e221]:
              - button "Export" [ref=e222] [cursor=pointer]:
                - img [ref=e223]
                - text: Export
              - button "On behalf request" [ref=e225] [cursor=pointer]:
                - img [ref=e226]
                - text: On behalf request
          - generic [ref=e231]:
            - generic [ref=e232]:
              - generic: 
              - textbox "Search by Employee Name or Request ID..." [ref=e233]
            - button "Filter" [ref=e234] [cursor=pointer]:
              - generic [ref=e235]: Filter
        - generic [ref=e238]:
          - table [ref=e241]:
            - rowgroup [ref=e242]:
              - row "Select All Request ID Sort icon Employee name Sort icon Request type Request date Sort icon Value Submission date Sort icon Status Actions" [ref=e243]:
                - columnheader "Select All" [ref=e244]:
                  - checkbox "Select All" [ref=e245] [cursor=pointer]
                - columnheader "Request ID Sort icon" [ref=e246] [cursor=pointer]:
                  - text: Request ID
                  - img "Sort icon" [ref=e248]
                - columnheader "Employee name Sort icon" [ref=e249] [cursor=pointer]:
                  - text: Employee name
                  - img "Sort icon" [ref=e251]
                - columnheader "Request type" [ref=e252]
                - columnheader "Request date Sort icon" [ref=e253] [cursor=pointer]:
                  - text: Request date
                  - img "Sort icon" [ref=e255]
                - columnheader "Value" [ref=e256]
                - columnheader "Submission date Sort icon" [ref=e257] [cursor=pointer]:
                  - text: Submission date
                  - img "Sort icon" [ref=e259]
                - columnheader "Status" [ref=e260]
                - columnheader "Actions" [ref=e261]
            - rowgroup [ref=e262]:
              - row "Select Row REQ-2026-1010 Donot change configuratio... Maternity Leave0 Oct 21 - Oct 24, 2026 3 D Jun 17, 2026, 05:12 PM Pending Reject Preview" [ref=e263]:
                - cell "Select Row" [ref=e264]:
                  - checkbox "Select Row" [ref=e265] [cursor=pointer]
                - cell "REQ-2026-1010" [ref=e266]:
                  - generic [ref=e269]: REQ-2026-1010
                - cell "Donot change configuratio..." [ref=e270]:
                  - generic [ref=e273]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e274]:
                  - generic [ref=e277]: Maternity Leave0
                - cell "Oct 21 - Oct 24, 2026" [ref=e278]:
                  - generic [ref=e281]: Oct 21 - Oct 24, 2026
                - cell "3 D" [ref=e282]:
                  - generic [ref=e285]: 3 D
                - cell "Jun 17, 2026, 05:12 PM" [ref=e286]:
                  - generic [ref=e289]: Jun 17, 2026, 05:12 PM
                - cell "Pending" [ref=e290]:
                  - generic [ref=e291]: Pending
                - cell "Reject Preview" [ref=e292]:
                  - generic [ref=e293]:
                    - button "Reject" [ref=e295] [cursor=pointer]:
                      - img "Reject" [ref=e296]
                    - button "Preview" [active] [ref=e298] [cursor=pointer]:
                      - img "Preview" [ref=e299]
              - row "Select Row REQ-2026-1009 Donot change configuratio... Maternity Leave0 Oct 21 - Oct 24, 2026 3 D Jun 17, 2026, 04:56 PM Rejected Preview" [ref=e300]:
                - cell "Select Row" [ref=e301]:
                  - checkbox "Select Row" [ref=e302] [cursor=pointer]
                - cell "REQ-2026-1009" [ref=e303]:
                  - generic [ref=e306]: REQ-2026-1009
                - cell "Donot change configuratio..." [ref=e307]:
                  - generic [ref=e310]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e311]:
                  - generic [ref=e314]: Maternity Leave0
                - cell "Oct 21 - Oct 24, 2026" [ref=e315]:
                  - generic [ref=e318]: Oct 21 - Oct 24, 2026
                - cell "3 D" [ref=e319]:
                  - generic [ref=e322]: 3 D
                - cell "Jun 17, 2026, 04:56 PM" [ref=e323]:
                  - generic [ref=e326]: Jun 17, 2026, 04:56 PM
                - cell "Rejected" [ref=e327]:
                  - generic [ref=e328]: Rejected
                - cell "Preview" [ref=e329]:
                  - button "Preview" [ref=e332] [cursor=pointer]:
                    - img "Preview" [ref=e333]
              - row "Select Row REQ-2026-1004 eslam qa Casual Leave Jun 27 - Jun 30, 2026 4 D Jun 17, 2026, 02:55 PM Pending Approve Reject Preview" [ref=e334]:
                - cell "Select Row" [ref=e335]:
                  - checkbox "Select Row" [ref=e336] [cursor=pointer]
                - cell "REQ-2026-1004" [ref=e337]:
                  - generic [ref=e340]: REQ-2026-1004
                - cell "eslam qa" [ref=e341]:
                  - generic [ref=e344]: eslam qa
                - cell "Casual Leave" [ref=e345]:
                  - generic [ref=e348]: Casual Leave
                - cell "Jun 27 - Jun 30, 2026" [ref=e349]:
                  - generic [ref=e352]: Jun 27 - Jun 30, 2026
                - cell "4 D" [ref=e353]:
                  - generic [ref=e356]: 4 D
                - cell "Jun 17, 2026, 02:55 PM" [ref=e357]:
                  - generic [ref=e360]: Jun 17, 2026, 02:55 PM
                - cell "Pending" [ref=e361]:
                  - generic [ref=e362]: Pending
                - cell "Approve Reject Preview" [ref=e363]:
                  - generic [ref=e364]:
                    - button "Approve" [ref=e366] [cursor=pointer]:
                      - img "Approve" [ref=e367]
                    - button "Reject" [ref=e369] [cursor=pointer]:
                      - img "Reject" [ref=e370]
                    - button "Preview" [ref=e372] [cursor=pointer]:
                      - img "Preview" [ref=e373]
              - row "Select Row REQ-2026-994 Donot change configuratio... Document0 Jun 30 - Jun 30, 2026 5 Jun 15, 2026, 11:40 AM Pending Approve Reject Preview" [ref=e374]:
                - cell "Select Row" [ref=e375]:
                  - checkbox "Select Row" [ref=e376] [cursor=pointer]
                - cell "REQ-2026-994" [ref=e377]:
                  - generic [ref=e380]: REQ-2026-994
                - cell "Donot change configuratio..." [ref=e381]:
                  - generic [ref=e384]: Donot change configuratio...
                - cell "Document0" [ref=e385]:
                  - generic [ref=e388]: Document0
                - cell "Jun 30 - Jun 30, 2026" [ref=e389]:
                  - generic [ref=e392]: Jun 30 - Jun 30, 2026
                - cell "5" [ref=e393]:
                  - generic [ref=e396]: "5"
                - cell "Jun 15, 2026, 11:40 AM" [ref=e397]:
                  - generic [ref=e400]: Jun 15, 2026, 11:40 AM
                - cell "Pending" [ref=e401]:
                  - generic [ref=e402]: Pending
                - cell "Approve Reject Preview" [ref=e403]:
                  - generic [ref=e404]:
                    - button "Approve" [ref=e406] [cursor=pointer]:
                      - img "Approve" [ref=e407]
                    - button "Reject" [ref=e409] [cursor=pointer]:
                      - img "Reject" [ref=e410]
                    - button "Preview" [ref=e412] [cursor=pointer]:
                      - img "Preview" [ref=e413]
              - row "Select Row REQ-2026-986 Donot change configuratio... Document0 Edited Jul 03 - Jul 03, 2026 1 Jun 14, 2026, 04:04 PM Pending Approve Reject Preview" [ref=e414]:
                - cell "Select Row" [ref=e415]:
                  - checkbox "Select Row" [ref=e416] [cursor=pointer]
                - cell "REQ-2026-986" [ref=e417]:
                  - generic [ref=e420]: REQ-2026-986
                - cell "Donot change configuratio..." [ref=e421]:
                  - generic [ref=e424]: Donot change configuratio...
                - cell "Document0 Edited" [ref=e425]:
                  - generic [ref=e426]:
                    - generic [ref=e428]: Document0
                    - generic [ref=e430]: Edited
                - cell "Jul 03 - Jul 03, 2026" [ref=e431]:
                  - generic [ref=e434]: Jul 03 - Jul 03, 2026
                - cell "1" [ref=e435]:
                  - generic [ref=e438]: "1"
                - cell "Jun 14, 2026, 04:04 PM" [ref=e439]:
                  - generic [ref=e442]: Jun 14, 2026, 04:04 PM
                - cell "Pending" [ref=e443]:
                  - generic [ref=e444]: Pending
                - cell "Approve Reject Preview" [ref=e445]:
                  - generic [ref=e446]:
                    - button "Approve" [ref=e448] [cursor=pointer]:
                      - img "Approve" [ref=e449]
                    - button "Reject" [ref=e451] [cursor=pointer]:
                      - img "Reject" [ref=e452]
                    - button "Preview" [ref=e454] [cursor=pointer]:
                      - img "Preview" [ref=e455]
              - row "Select Row REQ-2026-985 Donot change configuratio... Document0 Jun 29 - Jun 29, 2026 1 Jun 14, 2026, 03:38 PM Approved Reject Preview" [ref=e456]:
                - cell "Select Row" [ref=e457]:
                  - checkbox "Select Row" [ref=e458] [cursor=pointer]
                - cell "REQ-2026-985" [ref=e459]:
                  - generic [ref=e462]: REQ-2026-985
                - cell "Donot change configuratio..." [ref=e463]:
                  - generic [ref=e466]: Donot change configuratio...
                - cell "Document0" [ref=e467]:
                  - generic [ref=e470]: Document0
                - cell "Jun 29 - Jun 29, 2026" [ref=e471]:
                  - generic [ref=e474]: Jun 29 - Jun 29, 2026
                - cell "1" [ref=e475]:
                  - generic [ref=e478]: "1"
                - cell "Jun 14, 2026, 03:38 PM" [ref=e479]:
                  - generic [ref=e482]: Jun 14, 2026, 03:38 PM
                - cell "Approved" [ref=e483]:
                  - generic [ref=e484]: Approved
                - cell "Reject Preview" [ref=e485]:
                  - generic [ref=e486]:
                    - button "Reject" [ref=e488] [cursor=pointer]:
                      - img "Reject" [ref=e489]
                    - button "Preview" [ref=e491] [cursor=pointer]:
                      - img "Preview" [ref=e492]
              - row "Select Row REQ-2026-983 Donot change configuratio... Document0 Jun 28 - Jun 28, 2026 1 Jun 14, 2026, 03:28 PM Pending Reject Preview" [ref=e493]:
                - cell "Select Row" [ref=e494]:
                  - checkbox "Select Row" [ref=e495] [cursor=pointer]
                - cell "REQ-2026-983" [ref=e496]:
                  - generic [ref=e499]: REQ-2026-983
                - cell "Donot change configuratio..." [ref=e500]:
                  - generic [ref=e503]: Donot change configuratio...
                - cell "Document0" [ref=e504]:
                  - generic [ref=e507]: Document0
                - cell "Jun 28 - Jun 28, 2026" [ref=e508]:
                  - generic [ref=e511]: Jun 28 - Jun 28, 2026
                - cell "1" [ref=e512]:
                  - generic [ref=e515]: "1"
                - cell "Jun 14, 2026, 03:28 PM" [ref=e516]:
                  - generic [ref=e519]: Jun 14, 2026, 03:28 PM
                - cell "Pending" [ref=e520]:
                  - generic [ref=e521]: Pending
                - cell "Reject Preview" [ref=e522]:
                  - generic [ref=e523]:
                    - button "Reject" [ref=e525] [cursor=pointer]:
                      - img "Reject" [ref=e526]
                    - button "Preview" [ref=e528] [cursor=pointer]:
                      - img "Preview" [ref=e529]
              - row "Select Row REQ-2026-957 Donot change configuratio... Maternity Leave0 Nov 03 - Nov 05, 2026 3 D Jun 13, 2026, 11:31 PM Pending Approve Reject Preview" [ref=e530]:
                - cell "Select Row" [ref=e531]:
                  - checkbox "Select Row" [ref=e532] [cursor=pointer]
                - cell "REQ-2026-957" [ref=e533]:
                  - generic [ref=e536]: REQ-2026-957
                - cell "Donot change configuratio..." [ref=e537]:
                  - generic [ref=e540]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e541]:
                  - generic [ref=e544]: Maternity Leave0
                - cell "Nov 03 - Nov 05, 2026" [ref=e545]:
                  - generic [ref=e548]: Nov 03 - Nov 05, 2026
                - cell "3 D" [ref=e549]:
                  - generic [ref=e552]: 3 D
                - cell "Jun 13, 2026, 11:31 PM" [ref=e553]:
                  - generic [ref=e556]: Jun 13, 2026, 11:31 PM
                - cell "Pending" [ref=e557]:
                  - generic [ref=e558]: Pending
                - cell "Approve Reject Preview" [ref=e559]:
                  - generic [ref=e560]:
                    - button "Approve" [ref=e562] [cursor=pointer]:
                      - img "Approve" [ref=e563]
                    - button "Reject" [ref=e565] [cursor=pointer]:
                      - img "Reject" [ref=e566]
                    - button "Preview" [ref=e568] [cursor=pointer]:
                      - img "Preview" [ref=e569]
              - row "Select Row REQ-2026-923 Donot change configuratio... Sick Leave1 Oct 01 - Oct 03, 2026 2 D Jun 09, 2026, 05:13 PM Pending Preview" [ref=e570]:
                - cell "Select Row" [ref=e571]:
                  - checkbox "Select Row" [ref=e572] [cursor=pointer]
                - cell "REQ-2026-923" [ref=e573]:
                  - generic [ref=e576]: REQ-2026-923
                - cell "Donot change configuratio..." [ref=e577]:
                  - generic [ref=e580]: Donot change configuratio...
                - cell "Sick Leave1" [ref=e581]:
                  - generic [ref=e584]: Sick Leave1
                - cell "Oct 01 - Oct 03, 2026" [ref=e585]:
                  - generic [ref=e588]: Oct 01 - Oct 03, 2026
                - cell "2 D" [ref=e589]:
                  - generic [ref=e592]: 2 D
                - cell "Jun 09, 2026, 05:13 PM" [ref=e593]:
                  - generic [ref=e596]: Jun 09, 2026, 05:13 PM
                - cell "Pending" [ref=e597]:
                  - generic [ref=e598]: Pending
                - cell "Preview" [ref=e599]:
                  - button "Preview" [ref=e602] [cursor=pointer]:
                    - img "Preview" [ref=e603]
              - row "Select Row REQ-2026-922 Donot change configuratio... Sick Leave1 Sep 14 - Sep 16, 2026 3 D Jun 09, 2026, 05:12 PM Pending Preview" [ref=e604]:
                - cell "Select Row" [ref=e605]:
                  - checkbox "Select Row" [ref=e606] [cursor=pointer]
                - cell "REQ-2026-922" [ref=e607]:
                  - generic [ref=e610]: REQ-2026-922
                - cell "Donot change configuratio..." [ref=e611]:
                  - generic [ref=e614]: Donot change configuratio...
                - cell "Sick Leave1" [ref=e615]:
                  - generic [ref=e618]: Sick Leave1
                - cell "Sep 14 - Sep 16, 2026" [ref=e619]:
                  - generic [ref=e622]: Sep 14 - Sep 16, 2026
                - cell "3 D" [ref=e623]:
                  - generic [ref=e626]: 3 D
                - cell "Jun 09, 2026, 05:12 PM" [ref=e627]:
                  - generic [ref=e630]: Jun 09, 2026, 05:12 PM
                - cell "Pending" [ref=e631]:
                  - generic [ref=e632]: Pending
                - cell "Preview" [ref=e633]:
                  - button "Preview" [ref=e636] [cursor=pointer]:
                    - img "Preview" [ref=e637]
              - row "Select Row REQ-2026-921 Donot change configuratio... Maternity Leave0 Aug 10 - Aug 13, 2026 4 D Jun 09, 2026, 05:00 PM Pending Reject Preview" [ref=e638]:
                - cell "Select Row" [ref=e639]:
                  - checkbox "Select Row" [ref=e640] [cursor=pointer]
                - cell "REQ-2026-921" [ref=e641]:
                  - generic [ref=e644]: REQ-2026-921
                - cell "Donot change configuratio..." [ref=e645]:
                  - generic [ref=e648]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e649]:
                  - generic [ref=e652]: Maternity Leave0
                - cell "Aug 10 - Aug 13, 2026" [ref=e653]:
                  - generic [ref=e656]: Aug 10 - Aug 13, 2026
                - cell "4 D" [ref=e657]:
                  - generic [ref=e660]: 4 D
                - cell "Jun 09, 2026, 05:00 PM" [ref=e661]:
                  - generic [ref=e664]: Jun 09, 2026, 05:00 PM
                - cell "Pending" [ref=e665]:
                  - generic [ref=e666]: Pending
                - cell "Reject Preview" [ref=e667]:
                  - generic [ref=e668]:
                    - button "Reject" [ref=e670] [cursor=pointer]:
                      - img "Reject" [ref=e671]
                    - button "Preview" [ref=e673] [cursor=pointer]:
                      - img "Preview" [ref=e674]
              - row "Select Row REQ-2026-918 Donot change configuratio... Maternity Leave0 Edited Jun 18 - Jun 21, 2026 3 D Jun 09, 2026, 04:16 PM Pending Reject Preview" [ref=e675]:
                - cell "Select Row" [ref=e676]:
                  - checkbox "Select Row" [ref=e677] [cursor=pointer]
                - cell "REQ-2026-918" [ref=e678]:
                  - generic [ref=e681]: REQ-2026-918
                - cell "Donot change configuratio..." [ref=e682]:
                  - generic [ref=e685]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e686]:
                  - generic [ref=e687]:
                    - generic [ref=e689]: Maternity Leave0
                    - generic [ref=e691]: Edited
                - cell "Jun 18 - Jun 21, 2026" [ref=e692]:
                  - generic [ref=e695]: Jun 18 - Jun 21, 2026
                - cell "3 D" [ref=e696]:
                  - generic [ref=e699]: 3 D
                - cell "Jun 09, 2026, 04:16 PM" [ref=e700]:
                  - generic [ref=e703]: Jun 09, 2026, 04:16 PM
                - cell "Pending" [ref=e704]:
                  - generic [ref=e705]: Pending
                - cell "Reject Preview" [ref=e706]:
                  - generic [ref=e707]:
                    - button "Reject" [ref=e709] [cursor=pointer]:
                      - img "Reject" [ref=e710]
                    - button "Preview" [ref=e712] [cursor=pointer]:
                      - img "Preview" [ref=e713]
              - row "Select Row REQ-2026-916 eslam qa Hajj Leave Jun 12 - Jun 13, 2026 2 D Jun 09, 2026, 11:02 AM Pending Reject Preview" [ref=e714]:
                - cell "Select Row" [ref=e715]:
                  - checkbox "Select Row" [ref=e716] [cursor=pointer]
                - cell "REQ-2026-916" [ref=e717]:
                  - generic [ref=e720]: REQ-2026-916
                - cell "eslam qa" [ref=e721]:
                  - generic [ref=e724]: eslam qa
                - cell "Hajj Leave" [ref=e725]:
                  - generic [ref=e728]: Hajj Leave
                - cell "Jun 12 - Jun 13, 2026" [ref=e729]:
                  - generic [ref=e732]: Jun 12 - Jun 13, 2026
                - cell "2 D" [ref=e733]:
                  - generic [ref=e736]: 2 D
                - cell "Jun 09, 2026, 11:02 AM" [ref=e737]:
                  - generic [ref=e740]: Jun 09, 2026, 11:02 AM
                - cell "Pending" [ref=e741]:
                  - generic [ref=e742]: Pending
                - cell "Reject Preview" [ref=e743]:
                  - generic [ref=e744]:
                    - button "Reject" [ref=e746] [cursor=pointer]:
                      - img "Reject" [ref=e747]
                    - button "Preview" [ref=e749] [cursor=pointer]:
                      - img "Preview" [ref=e750]
              - row "Select Row REQ-2026-915 Donot change configuratio... Sick Leave1 Edited Sep 07 - Sep 10, 2026 4 D Jun 04, 2026, 04:18 PM Pending Approve Reject Preview" [ref=e751]:
                - cell "Select Row" [ref=e752]:
                  - checkbox "Select Row" [ref=e753] [cursor=pointer]
                - cell "REQ-2026-915" [ref=e754]:
                  - generic [ref=e757]: REQ-2026-915
                - cell "Donot change configuratio..." [ref=e758]:
                  - generic [ref=e761]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e762]:
                  - generic [ref=e763]:
                    - generic [ref=e765]: Sick Leave1
                    - generic [ref=e767]: Edited
                - cell "Sep 07 - Sep 10, 2026" [ref=e768]:
                  - generic [ref=e771]: Sep 07 - Sep 10, 2026
                - cell "4 D" [ref=e772]:
                  - generic [ref=e775]: 4 D
                - cell "Jun 04, 2026, 04:18 PM" [ref=e776]:
                  - generic [ref=e779]: Jun 04, 2026, 04:18 PM
                - cell "Pending" [ref=e780]:
                  - generic [ref=e781]: Pending
                - cell "Approve Reject Preview" [ref=e782]:
                  - generic [ref=e783]:
                    - button "Approve" [ref=e785] [cursor=pointer]:
                      - img "Approve" [ref=e786]
                    - button "Reject" [ref=e788] [cursor=pointer]:
                      - img "Reject" [ref=e789]
                    - button "Preview" [ref=e791] [cursor=pointer]:
                      - img "Preview" [ref=e792]
              - row "Select Row REQ-2026-913 Donot change configuratio... Sick Leave1 Edited Jul 23 - Jul 26, 2026 2 D Jun 04, 2026, 03:40 PM Pending Approve Reject Preview" [ref=e793]:
                - cell "Select Row" [ref=e794]:
                  - checkbox "Select Row" [ref=e795] [cursor=pointer]
                - cell "REQ-2026-913" [ref=e796]:
                  - generic [ref=e799]: REQ-2026-913
                - cell "Donot change configuratio..." [ref=e800]:
                  - generic [ref=e803]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e804]:
                  - generic [ref=e805]:
                    - generic [ref=e807]: Sick Leave1
                    - generic [ref=e809]: Edited
                - cell "Jul 23 - Jul 26, 2026" [ref=e810]:
                  - generic [ref=e813]: Jul 23 - Jul 26, 2026
                - cell "2 D" [ref=e814]:
                  - generic [ref=e817]: 2 D
                - cell "Jun 04, 2026, 03:40 PM" [ref=e818]:
                  - generic [ref=e821]: Jun 04, 2026, 03:40 PM
                - cell "Pending" [ref=e822]:
                  - generic [ref=e823]: Pending
                - cell "Approve Reject Preview" [ref=e824]:
                  - generic [ref=e825]:
                    - button "Approve" [ref=e827] [cursor=pointer]:
                      - img "Approve" [ref=e828]
                    - button "Reject" [ref=e830] [cursor=pointer]:
                      - img "Reject" [ref=e831]
                    - button "Preview" [ref=e833] [cursor=pointer]:
                      - img "Preview" [ref=e834]
              - row "Select Row REQ-2026-912 Donot change configuratio... Hajj Leave Edited Jul 09 - Jul 10, 2026 2 D Jun 04, 2026, 12:29 PM Pending Approve Reject Preview" [ref=e835]:
                - cell "Select Row" [ref=e836]:
                  - checkbox "Select Row" [ref=e837] [cursor=pointer]
                - cell "REQ-2026-912" [ref=e838]:
                  - generic [ref=e841]: REQ-2026-912
                - cell "Donot change configuratio..." [ref=e842]:
                  - generic [ref=e845]: Donot change configuratio...
                - cell "Hajj Leave Edited" [ref=e846]:
                  - generic [ref=e847]:
                    - generic [ref=e849]: Hajj Leave
                    - generic [ref=e851]: Edited
                - cell "Jul 09 - Jul 10, 2026" [ref=e852]:
                  - generic [ref=e855]: Jul 09 - Jul 10, 2026
                - cell "2 D" [ref=e856]:
                  - generic [ref=e859]: 2 D
                - cell "Jun 04, 2026, 12:29 PM" [ref=e860]:
                  - generic [ref=e863]: Jun 04, 2026, 12:29 PM
                - cell "Pending" [ref=e864]:
                  - generic [ref=e865]: Pending
                - cell "Approve Reject Preview" [ref=e866]:
                  - generic [ref=e867]:
                    - button "Approve" [ref=e869] [cursor=pointer]:
                      - img "Approve" [ref=e870]
                    - button "Reject" [ref=e872] [cursor=pointer]:
                      - img "Reject" [ref=e873]
                    - button "Preview" [ref=e875] [cursor=pointer]:
                      - img "Preview" [ref=e876]
              - row "Select Row REQ-2026-911 Donot change configuratio... Casual Leave Edited Jul 05 - Jul 07, 2026 3 D Jun 04, 2026, 12:26 PM Pending Approve Reject Preview" [ref=e877]:
                - cell "Select Row" [ref=e878]:
                  - checkbox "Select Row" [ref=e879] [cursor=pointer]
                - cell "REQ-2026-911" [ref=e880]:
                  - generic [ref=e883]: REQ-2026-911
                - cell "Donot change configuratio..." [ref=e884]:
                  - generic [ref=e887]: Donot change configuratio...
                - cell "Casual Leave Edited" [ref=e888]:
                  - generic [ref=e889]:
                    - generic [ref=e891]: Casual Leave
                    - generic [ref=e893]: Edited
                - cell "Jul 05 - Jul 07, 2026" [ref=e894]:
                  - generic [ref=e897]: Jul 05 - Jul 07, 2026
                - cell "3 D" [ref=e898]:
                  - generic [ref=e901]: 3 D
                - cell "Jun 04, 2026, 12:26 PM" [ref=e902]:
                  - generic [ref=e905]: Jun 04, 2026, 12:26 PM
                - cell "Pending" [ref=e906]:
                  - generic [ref=e907]: Pending
                - cell "Approve Reject Preview" [ref=e908]:
                  - generic [ref=e909]:
                    - button "Approve" [ref=e911] [cursor=pointer]:
                      - img "Approve" [ref=e912]
                    - button "Reject" [ref=e914] [cursor=pointer]:
                      - img "Reject" [ref=e915]
                    - button "Preview" [ref=e917] [cursor=pointer]:
                      - img "Preview" [ref=e918]
              - row "Select Row REQ-2026-910 Donot change configuratio... Sick Leave1 Edited Jun 15 - Jun 16, 2026 2 D Jun 04, 2026, 12:21 PM Pending Approve Reject Preview" [ref=e919]:
                - cell "Select Row" [ref=e920]:
                  - checkbox "Select Row" [ref=e921] [cursor=pointer]
                - cell "REQ-2026-910" [ref=e922]:
                  - generic [ref=e925]: REQ-2026-910
                - cell "Donot change configuratio..." [ref=e926]:
                  - generic [ref=e929]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e930]:
                  - generic [ref=e931]:
                    - generic [ref=e933]: Sick Leave1
                    - generic [ref=e935]: Edited
                - cell "Jun 15 - Jun 16, 2026" [ref=e936]:
                  - generic [ref=e939]: Jun 15 - Jun 16, 2026
                - cell "2 D" [ref=e940]:
                  - generic [ref=e943]: 2 D
                - cell "Jun 04, 2026, 12:21 PM" [ref=e944]:
                  - generic [ref=e947]: Jun 04, 2026, 12:21 PM
                - cell "Pending" [ref=e948]:
                  - generic [ref=e949]: Pending
                - cell "Approve Reject Preview" [ref=e950]:
                  - generic [ref=e951]:
                    - button "Approve" [ref=e953] [cursor=pointer]:
                      - img "Approve" [ref=e954]
                    - button "Reject" [ref=e956] [cursor=pointer]:
                      - img "Reject" [ref=e957]
                    - button "Preview" [ref=e959] [cursor=pointer]:
                      - img "Preview" [ref=e960]
              - row "Select Row REQ-2026-909 Donot change configuratio... Maternity Leave0 Edited Jun 25 - Jun 30, 2026 5 D Jun 04, 2026, 12:18 PM Approved Reject Preview" [ref=e961]:
                - cell "Select Row" [ref=e962]:
                  - checkbox "Select Row" [ref=e963] [cursor=pointer]
                - cell "REQ-2026-909" [ref=e964]:
                  - generic [ref=e967]: REQ-2026-909
                - cell "Donot change configuratio..." [ref=e968]:
                  - generic [ref=e971]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e972]:
                  - generic [ref=e973]:
                    - generic [ref=e975]: Maternity Leave0
                    - generic [ref=e977]: Edited
                - cell "Jun 25 - Jun 30, 2026" [ref=e978]:
                  - generic [ref=e981]: Jun 25 - Jun 30, 2026
                - cell "5 D" [ref=e982]:
                  - generic [ref=e985]: 5 D
                - cell "Jun 04, 2026, 12:18 PM" [ref=e986]:
                  - generic [ref=e989]: Jun 04, 2026, 12:18 PM
                - cell "Approved" [ref=e990]:
                  - generic [ref=e991]: Approved
                - cell "Reject Preview" [ref=e992]:
                  - generic [ref=e993]:
                    - button "Reject" [ref=e995] [cursor=pointer]:
                      - img "Reject" [ref=e996]
                    - button "Preview" [ref=e998] [cursor=pointer]:
                      - img "Preview" [ref=e999]
              - row "Select Row REQ-2026-908 Donot change configuratio... Annual Vacation7 Edited Jun 04 - Jun 09, 2026 5 D Jun 04, 2026, 12:16 PM Pending Approve Reject Preview" [ref=e1000]:
                - cell "Select Row" [ref=e1001]:
                  - checkbox "Select Row" [ref=e1002] [cursor=pointer]
                - cell "REQ-2026-908" [ref=e1003]:
                  - generic [ref=e1006]: REQ-2026-908
                - cell "Donot change configuratio..." [ref=e1007]:
                  - generic [ref=e1010]: Donot change configuratio...
                - cell "Annual Vacation7 Edited" [ref=e1011]:
                  - generic [ref=e1012]:
                    - generic [ref=e1014]: Annual Vacation7
                    - generic [ref=e1016]: Edited
                - cell "Jun 04 - Jun 09, 2026" [ref=e1017]:
                  - generic [ref=e1020]: Jun 04 - Jun 09, 2026
                - cell "5 D" [ref=e1021]:
                  - generic [ref=e1024]: 5 D
                - cell "Jun 04, 2026, 12:16 PM" [ref=e1025]:
                  - generic [ref=e1028]: Jun 04, 2026, 12:16 PM
                - cell "Pending" [ref=e1029]:
                  - generic [ref=e1030]: Pending
                - cell "Approve Reject Preview" [ref=e1031]:
                  - generic [ref=e1032]:
                    - button "Approve" [ref=e1034] [cursor=pointer]:
                      - img "Approve" [ref=e1035]
                    - button "Reject" [ref=e1037] [cursor=pointer]:
                      - img "Reject" [ref=e1038]
                    - button "Preview" [ref=e1040] [cursor=pointer]:
                      - img "Preview" [ref=e1041]
          - generic [ref=e1044]:
            - generic [ref=e1045]:
              - generic [ref=e1046] [cursor=pointer]:
                - text: Show Entries
                - generic [ref=e1047]:
                  - combobox "20" [ref=e1048]
                  - button "dropdown trigger" [ref=e1049]:
                    - img [ref=e1050]
              - generic [ref=e1052]: Showing 1-20 of 122 row
            - generic [ref=e1054]:
              - button "Previous" [disabled] [ref=e1055]:
                - img "previous" [ref=e1056]
                - generic [ref=e1057]: Previous
              - navigation "PAGINATION.PAGE_NAVIGATION" [ref=e1058]:
                - button "PAGINATION.GO_TO_PAGE" [ref=e1059] [cursor=pointer]: "1"
                - button "PAGINATION.GO_TO_PAGE" [ref=e1060] [cursor=pointer]: "2"
                - generic [ref=e1061]: ...
                - button "PAGINATION.GO_TO_PAGE" [ref=e1062] [cursor=pointer]: "6"
                - button "PAGINATION.GO_TO_PAGE" [ref=e1063] [cursor=pointer]: "7"
              - button "Next" [ref=e1064] [cursor=pointer]:
                - generic [ref=e1065]: Next
                - img "next" [ref=e1066]
  - complementary [ref=e1067]:
    - generic [ref=e1070]:
      - generic [ref=e1071]:
        - generic [ref=e1072]:
          - generic [ref=e1073]:
            - generic [ref=e1074]: "Request ID:"
            - generic [ref=e1075]: REQ-2026-1010
          - generic [ref=e1076]:
            - img "Category" [ref=e1077]
            - generic [ref=e1078]: Leave & Time-Off Requests
        - generic [ref=e1079]:
          - heading "Maternity Leave0" [level=3] [ref=e1080]
          - generic [ref=e1081]:
            - img "Status" [ref=e1082]
            - generic [ref=e1083]: Pending
        - generic [ref=e1084]:
          - generic [ref=e1085]:
            - generic [ref=e1086]: Submission date
            - generic [ref=e1087]: Jun 17, 2026, 5:12 PM
          - generic [ref=e1088]:
            - generic [ref=e1089]: Submitted By
            - generic [ref=e1090]: Kareem Manager Requests
      - button "Close" [ref=e1092] [cursor=pointer]:
        - img "Close" [ref=e1094]
    - generic [ref=e1098]:
      - generic [ref=e1099]:
        - generic [ref=e1100]:
          - generic [ref=e1102]:
            - heading "Request Date" [level=2] [ref=e1103]
            - paragraph [ref=e1104]: October 21 - October 24, 2026 (3 Days)
          - generic [ref=e1107]:
            - heading "Weekend Excluded:" [level=2] [ref=e1108]
            - paragraph [ref=e1109]: "1"
          - generic [ref=e1112]:
            - heading "Expected Delivery Date" [level=2] [ref=e1113]
            - paragraph [ref=e1114]: 28/06/2026
        - generic [ref=e1117]:
          - heading "Employee Information" [level=2] [ref=e1118]
          - generic [ref=e1119]:
            - generic [ref=e1120]:
              - heading "Employee Name::" [level=2] [ref=e1121]
              - paragraph [ref=e1122]: Donot change configuration Please
            - generic [ref=e1123]:
              - heading "Department:" [level=2] [ref=e1124]
              - paragraph [ref=e1125]: تيست القسمxzx z
            - generic [ref=e1126]:
              - heading "Direct Manager:" [level=2] [ref=e1127]
              - paragraph [ref=e1128]: Kareem Manager Requests
            - generic [ref=e1129]:
              - heading "Position:" [level=2] [ref=e1130]
              - paragraph [ref=e1131]: testd1
            - generic [ref=e1132]:
              - heading "Joining Date:" [level=2] [ref=e1133]
              - paragraph [ref=e1134]: Sunday, January 4, 2026
        - generic [ref=e1136]:
          - heading "Notes" [level=2] [ref=e1138]
          - paragraph [ref=e1139]: Test request notes
        - generic [ref=e1141]:
          - heading "Attachments" [level=2] [ref=e1143]
          - generic [ref=e1148]:
            - img "No File" [ref=e1151]
            - generic [ref=e1153]: No Attachments Found
        - generic [ref=e1154]:
          - button "reject Reject Request" [ref=e1155] [cursor=pointer]:
            - img "reject" [ref=e1156]
            - generic [ref=e1157]: Reject Request
          - button "approve Approve Request" [disabled]:
            - img "approve"
            - text: Approve Request
      - generic [ref=e1158]:
        - generic [ref=e1159]:
          - heading "Workflow Mode" [level=3] [ref=e1160]
          - generic [ref=e1161]: Sequential
        - generic [ref=e1162]:
          - generic [ref=e1163]:
            - img "approved" [ref=e1166]
            - generic [ref=e1168]:
              - generic [ref=e1169]:
                - generic [ref=e1170]:
                  - generic [ref=e1171]: KR
                  - generic [ref=e1172]:
                    - heading "Kareem Manager Requests" [level=4] [ref=e1173]
                    - paragraph [ref=e1174]: Direct Manager
                    - paragraph [ref=e1175]:
                      - img "clock" [ref=e1176]
                      - text: Jun 17, 2026, 5:12 PM
                - generic [ref=e1177]: Approved
              - generic [ref=e1178]: "\"Auto-approved by submitting manager Kareem Manager Requests\""
          - generic [ref=e1179]:
            - generic [ref=e1182]: "2"
            - generic [ref=e1185]:
              - generic [ref=e1186]:
                - generic [ref=e1187]: AS
                - generic [ref=e1188]:
                  - heading "Ahmed Sayed" [level=4] [ref=e1189]
                  - paragraph [ref=e1190]: Second-Level Manager
                  - paragraph [ref=e1191]:
                    - img "clock" [ref=e1192]
                    - text: 1 days remaining
              - generic [ref=e1193]: Pending
          - generic [ref=e1194]:
            - generic [ref=e1197]: "3"
            - generic [ref=e1199]:
              - paragraph [ref=e1203]: SideMenu
              - generic [ref=e1204]: Pending
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