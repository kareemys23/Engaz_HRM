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
  - waiting for getByRole('option', { name: 'Donot change configuration' })

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
              - row "Select Row REQ-2026-1004 eslam qa Casual Leave Jun 27 - Jun 30, 2026 4 D Jun 17, 2026, 02:55 PM Pending Approve Reject Preview" [ref=e263]:
                - cell "Select Row" [ref=e264]:
                  - checkbox "Select Row" [ref=e265] [cursor=pointer]
                - cell "REQ-2026-1004" [ref=e266]:
                  - generic [ref=e269]: REQ-2026-1004
                - cell "eslam qa" [ref=e270]:
                  - generic [ref=e273]: eslam qa
                - cell "Casual Leave" [ref=e274]:
                  - generic [ref=e277]: Casual Leave
                - cell "Jun 27 - Jun 30, 2026" [ref=e278]:
                  - generic [ref=e281]: Jun 27 - Jun 30, 2026
                - cell "4 D" [ref=e282]:
                  - generic [ref=e285]: 4 D
                - cell "Jun 17, 2026, 02:55 PM" [ref=e286]:
                  - generic [ref=e289]: Jun 17, 2026, 02:55 PM
                - cell "Pending" [ref=e290]:
                  - generic [ref=e291]: Pending
                - cell "Approve Reject Preview" [ref=e292]:
                  - generic [ref=e293]:
                    - button "Approve" [ref=e295] [cursor=pointer]:
                      - img "Approve" [ref=e296]
                    - button "Reject" [ref=e298] [cursor=pointer]:
                      - img "Reject" [ref=e299]
                    - button "Preview" [ref=e301] [cursor=pointer]:
                      - img "Preview" [ref=e302]
              - row "Select Row REQ-2026-994 Donot change configuratio... Document0 Jun 30 - Jun 30, 2026 5 Jun 15, 2026, 11:40 AM Pending Approve Reject Preview" [ref=e303]:
                - cell "Select Row" [ref=e304]:
                  - checkbox "Select Row" [ref=e305] [cursor=pointer]
                - cell "REQ-2026-994" [ref=e306]:
                  - generic [ref=e309]: REQ-2026-994
                - cell "Donot change configuratio..." [ref=e310]:
                  - generic [ref=e313]: Donot change configuratio...
                - cell "Document0" [ref=e314]:
                  - generic [ref=e317]: Document0
                - cell "Jun 30 - Jun 30, 2026" [ref=e318]:
                  - generic [ref=e321]: Jun 30 - Jun 30, 2026
                - cell "5" [ref=e322]:
                  - generic [ref=e325]: "5"
                - cell "Jun 15, 2026, 11:40 AM" [ref=e326]:
                  - generic [ref=e329]: Jun 15, 2026, 11:40 AM
                - cell "Pending" [ref=e330]:
                  - generic [ref=e331]: Pending
                - cell "Approve Reject Preview" [ref=e332]:
                  - generic [ref=e333]:
                    - button "Approve" [ref=e335] [cursor=pointer]:
                      - img "Approve" [ref=e336]
                    - button "Reject" [ref=e338] [cursor=pointer]:
                      - img "Reject" [ref=e339]
                    - button "Preview" [ref=e341] [cursor=pointer]:
                      - img "Preview" [ref=e342]
              - row "Select Row REQ-2026-986 Donot change configuratio... Document0 Edited Jul 03 - Jul 03, 2026 1 Jun 14, 2026, 04:04 PM Pending Approve Reject Preview" [ref=e343]:
                - cell "Select Row" [ref=e344]:
                  - checkbox "Select Row" [ref=e345] [cursor=pointer]
                - cell "REQ-2026-986" [ref=e346]:
                  - generic [ref=e349]: REQ-2026-986
                - cell "Donot change configuratio..." [ref=e350]:
                  - generic [ref=e353]: Donot change configuratio...
                - cell "Document0 Edited" [ref=e354]:
                  - generic [ref=e355]:
                    - generic [ref=e357]: Document0
                    - generic [ref=e359]: Edited
                - cell "Jul 03 - Jul 03, 2026" [ref=e360]:
                  - generic [ref=e363]: Jul 03 - Jul 03, 2026
                - cell "1" [ref=e364]:
                  - generic [ref=e367]: "1"
                - cell "Jun 14, 2026, 04:04 PM" [ref=e368]:
                  - generic [ref=e371]: Jun 14, 2026, 04:04 PM
                - cell "Pending" [ref=e372]:
                  - generic [ref=e373]: Pending
                - cell "Approve Reject Preview" [ref=e374]:
                  - generic [ref=e375]:
                    - button "Approve" [ref=e377] [cursor=pointer]:
                      - img "Approve" [ref=e378]
                    - button "Reject" [ref=e380] [cursor=pointer]:
                      - img "Reject" [ref=e381]
                    - button "Preview" [ref=e383] [cursor=pointer]:
                      - img "Preview" [ref=e384]
              - row "Select Row REQ-2026-985 Donot change configuratio... Document0 Jun 29 - Jun 29, 2026 1 Jun 14, 2026, 03:38 PM Approved Reject Preview" [ref=e385]:
                - cell "Select Row" [ref=e386]:
                  - checkbox "Select Row" [ref=e387] [cursor=pointer]
                - cell "REQ-2026-985" [ref=e388]:
                  - generic [ref=e391]: REQ-2026-985
                - cell "Donot change configuratio..." [ref=e392]:
                  - generic [ref=e395]: Donot change configuratio...
                - cell "Document0" [ref=e396]:
                  - generic [ref=e399]: Document0
                - cell "Jun 29 - Jun 29, 2026" [ref=e400]:
                  - generic [ref=e403]: Jun 29 - Jun 29, 2026
                - cell "1" [ref=e404]:
                  - generic [ref=e407]: "1"
                - cell "Jun 14, 2026, 03:38 PM" [ref=e408]:
                  - generic [ref=e411]: Jun 14, 2026, 03:38 PM
                - cell "Approved" [ref=e412]:
                  - generic [ref=e413]: Approved
                - cell "Reject Preview" [ref=e414]:
                  - generic [ref=e415]:
                    - button "Reject" [ref=e417] [cursor=pointer]:
                      - img "Reject" [ref=e418]
                    - button "Preview" [ref=e420] [cursor=pointer]:
                      - img "Preview" [ref=e421]
              - row "Select Row REQ-2026-983 Donot change configuratio... Document0 Jun 28 - Jun 28, 2026 1 Jun 14, 2026, 03:28 PM Pending Reject Preview" [ref=e422]:
                - cell "Select Row" [ref=e423]:
                  - checkbox "Select Row" [ref=e424] [cursor=pointer]
                - cell "REQ-2026-983" [ref=e425]:
                  - generic [ref=e428]: REQ-2026-983
                - cell "Donot change configuratio..." [ref=e429]:
                  - generic [ref=e432]: Donot change configuratio...
                - cell "Document0" [ref=e433]:
                  - generic [ref=e436]: Document0
                - cell "Jun 28 - Jun 28, 2026" [ref=e437]:
                  - generic [ref=e440]: Jun 28 - Jun 28, 2026
                - cell "1" [ref=e441]:
                  - generic [ref=e444]: "1"
                - cell "Jun 14, 2026, 03:28 PM" [ref=e445]:
                  - generic [ref=e448]: Jun 14, 2026, 03:28 PM
                - cell "Pending" [ref=e449]:
                  - generic [ref=e450]: Pending
                - cell "Reject Preview" [ref=e451]:
                  - generic [ref=e452]:
                    - button "Reject" [ref=e454] [cursor=pointer]:
                      - img "Reject" [ref=e455]
                    - button "Preview" [ref=e457] [cursor=pointer]:
                      - img "Preview" [ref=e458]
              - row "Select Row REQ-2026-957 Donot change configuratio... Maternity Leave0 Nov 03 - Nov 05, 2026 3 D Jun 13, 2026, 11:31 PM Pending Approve Reject Preview" [ref=e459]:
                - cell "Select Row" [ref=e460]:
                  - checkbox "Select Row" [ref=e461] [cursor=pointer]
                - cell "REQ-2026-957" [ref=e462]:
                  - generic [ref=e465]: REQ-2026-957
                - cell "Donot change configuratio..." [ref=e466]:
                  - generic [ref=e469]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e470]:
                  - generic [ref=e473]: Maternity Leave0
                - cell "Nov 03 - Nov 05, 2026" [ref=e474]:
                  - generic [ref=e477]: Nov 03 - Nov 05, 2026
                - cell "3 D" [ref=e478]:
                  - generic [ref=e481]: 3 D
                - cell "Jun 13, 2026, 11:31 PM" [ref=e482]:
                  - generic [ref=e485]: Jun 13, 2026, 11:31 PM
                - cell "Pending" [ref=e486]:
                  - generic [ref=e487]: Pending
                - cell "Approve Reject Preview" [ref=e488]:
                  - generic [ref=e489]:
                    - button "Approve" [ref=e491] [cursor=pointer]:
                      - img "Approve" [ref=e492]
                    - button "Reject" [ref=e494] [cursor=pointer]:
                      - img "Reject" [ref=e495]
                    - button "Preview" [ref=e497] [cursor=pointer]:
                      - img "Preview" [ref=e498]
              - row "Select Row REQ-2026-923 Donot change configuratio... Sick Leave1 Oct 01 - Oct 03, 2026 2 D Jun 09, 2026, 05:13 PM Pending Preview" [ref=e499]:
                - cell "Select Row" [ref=e500]:
                  - checkbox "Select Row" [ref=e501] [cursor=pointer]
                - cell "REQ-2026-923" [ref=e502]:
                  - generic [ref=e505]: REQ-2026-923
                - cell "Donot change configuratio..." [ref=e506]:
                  - generic [ref=e509]: Donot change configuratio...
                - cell "Sick Leave1" [ref=e510]:
                  - generic [ref=e513]: Sick Leave1
                - cell "Oct 01 - Oct 03, 2026" [ref=e514]:
                  - generic [ref=e517]: Oct 01 - Oct 03, 2026
                - cell "2 D" [ref=e518]:
                  - generic [ref=e521]: 2 D
                - cell "Jun 09, 2026, 05:13 PM" [ref=e522]:
                  - generic [ref=e525]: Jun 09, 2026, 05:13 PM
                - cell "Pending" [ref=e526]:
                  - generic [ref=e527]: Pending
                - cell "Preview" [ref=e528]:
                  - button "Preview" [ref=e531] [cursor=pointer]:
                    - img "Preview" [ref=e532]
              - row "Select Row REQ-2026-922 Donot change configuratio... Sick Leave1 Sep 14 - Sep 16, 2026 3 D Jun 09, 2026, 05:12 PM Pending Preview" [ref=e533]:
                - cell "Select Row" [ref=e534]:
                  - checkbox "Select Row" [ref=e535] [cursor=pointer]
                - cell "REQ-2026-922" [ref=e536]:
                  - generic [ref=e539]: REQ-2026-922
                - cell "Donot change configuratio..." [ref=e540]:
                  - generic [ref=e543]: Donot change configuratio...
                - cell "Sick Leave1" [ref=e544]:
                  - generic [ref=e547]: Sick Leave1
                - cell "Sep 14 - Sep 16, 2026" [ref=e548]:
                  - generic [ref=e551]: Sep 14 - Sep 16, 2026
                - cell "3 D" [ref=e552]:
                  - generic [ref=e555]: 3 D
                - cell "Jun 09, 2026, 05:12 PM" [ref=e556]:
                  - generic [ref=e559]: Jun 09, 2026, 05:12 PM
                - cell "Pending" [ref=e560]:
                  - generic [ref=e561]: Pending
                - cell "Preview" [ref=e562]:
                  - button "Preview" [ref=e565] [cursor=pointer]:
                    - img "Preview" [ref=e566]
              - row "Select Row REQ-2026-921 Donot change configuratio... Maternity Leave0 Aug 10 - Aug 13, 2026 4 D Jun 09, 2026, 05:00 PM Pending Reject Preview" [ref=e567]:
                - cell "Select Row" [ref=e568]:
                  - checkbox "Select Row" [ref=e569] [cursor=pointer]
                - cell "REQ-2026-921" [ref=e570]:
                  - generic [ref=e573]: REQ-2026-921
                - cell "Donot change configuratio..." [ref=e574]:
                  - generic [ref=e577]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e578]:
                  - generic [ref=e581]: Maternity Leave0
                - cell "Aug 10 - Aug 13, 2026" [ref=e582]:
                  - generic [ref=e585]: Aug 10 - Aug 13, 2026
                - cell "4 D" [ref=e586]:
                  - generic [ref=e589]: 4 D
                - cell "Jun 09, 2026, 05:00 PM" [ref=e590]:
                  - generic [ref=e593]: Jun 09, 2026, 05:00 PM
                - cell "Pending" [ref=e594]:
                  - generic [ref=e595]: Pending
                - cell "Reject Preview" [ref=e596]:
                  - generic [ref=e597]:
                    - button "Reject" [ref=e599] [cursor=pointer]:
                      - img "Reject" [ref=e600]
                    - button "Preview" [ref=e602] [cursor=pointer]:
                      - img "Preview" [ref=e603]
              - row "Select Row REQ-2026-918 Donot change configuratio... Maternity Leave0 Edited Jun 18 - Jun 21, 2026 3 D Jun 09, 2026, 04:16 PM Pending Reject Preview" [ref=e604]:
                - cell "Select Row" [ref=e605]:
                  - checkbox "Select Row" [ref=e606] [cursor=pointer]
                - cell "REQ-2026-918" [ref=e607]:
                  - generic [ref=e610]: REQ-2026-918
                - cell "Donot change configuratio..." [ref=e611]:
                  - generic [ref=e614]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e615]:
                  - generic [ref=e616]:
                    - generic [ref=e618]: Maternity Leave0
                    - generic [ref=e620]: Edited
                - cell "Jun 18 - Jun 21, 2026" [ref=e621]:
                  - generic [ref=e624]: Jun 18 - Jun 21, 2026
                - cell "3 D" [ref=e625]:
                  - generic [ref=e628]: 3 D
                - cell "Jun 09, 2026, 04:16 PM" [ref=e629]:
                  - generic [ref=e632]: Jun 09, 2026, 04:16 PM
                - cell "Pending" [ref=e633]:
                  - generic [ref=e634]: Pending
                - cell "Reject Preview" [ref=e635]:
                  - generic [ref=e636]:
                    - button "Reject" [ref=e638] [cursor=pointer]:
                      - img "Reject" [ref=e639]
                    - button "Preview" [ref=e641] [cursor=pointer]:
                      - img "Preview" [ref=e642]
              - row "Select Row REQ-2026-916 eslam qa Hajj Leave Jun 12 - Jun 13, 2026 2 D Jun 09, 2026, 11:02 AM Pending Reject Preview" [ref=e643]:
                - cell "Select Row" [ref=e644]:
                  - checkbox "Select Row" [ref=e645] [cursor=pointer]
                - cell "REQ-2026-916" [ref=e646]:
                  - generic [ref=e649]: REQ-2026-916
                - cell "eslam qa" [ref=e650]:
                  - generic [ref=e653]: eslam qa
                - cell "Hajj Leave" [ref=e654]:
                  - generic [ref=e657]: Hajj Leave
                - cell "Jun 12 - Jun 13, 2026" [ref=e658]:
                  - generic [ref=e661]: Jun 12 - Jun 13, 2026
                - cell "2 D" [ref=e662]:
                  - generic [ref=e665]: 2 D
                - cell "Jun 09, 2026, 11:02 AM" [ref=e666]:
                  - generic [ref=e669]: Jun 09, 2026, 11:02 AM
                - cell "Pending" [ref=e670]:
                  - generic [ref=e671]: Pending
                - cell "Reject Preview" [ref=e672]:
                  - generic [ref=e673]:
                    - button "Reject" [ref=e675] [cursor=pointer]:
                      - img "Reject" [ref=e676]
                    - button "Preview" [ref=e678] [cursor=pointer]:
                      - img "Preview" [ref=e679]
              - row "Select Row REQ-2026-915 Donot change configuratio... Sick Leave1 Edited Sep 07 - Sep 10, 2026 4 D Jun 04, 2026, 04:18 PM Pending Approve Reject Preview" [ref=e680]:
                - cell "Select Row" [ref=e681]:
                  - checkbox "Select Row" [ref=e682] [cursor=pointer]
                - cell "REQ-2026-915" [ref=e683]:
                  - generic [ref=e686]: REQ-2026-915
                - cell "Donot change configuratio..." [ref=e687]:
                  - generic [ref=e690]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e691]:
                  - generic [ref=e692]:
                    - generic [ref=e694]: Sick Leave1
                    - generic [ref=e696]: Edited
                - cell "Sep 07 - Sep 10, 2026" [ref=e697]:
                  - generic [ref=e700]: Sep 07 - Sep 10, 2026
                - cell "4 D" [ref=e701]:
                  - generic [ref=e704]: 4 D
                - cell "Jun 04, 2026, 04:18 PM" [ref=e705]:
                  - generic [ref=e708]: Jun 04, 2026, 04:18 PM
                - cell "Pending" [ref=e709]:
                  - generic [ref=e710]: Pending
                - cell "Approve Reject Preview" [ref=e711]:
                  - generic [ref=e712]:
                    - button "Approve" [ref=e714] [cursor=pointer]:
                      - img "Approve" [ref=e715]
                    - button "Reject" [ref=e717] [cursor=pointer]:
                      - img "Reject" [ref=e718]
                    - button "Preview" [ref=e720] [cursor=pointer]:
                      - img "Preview" [ref=e721]
              - row "Select Row REQ-2026-913 Donot change configuratio... Sick Leave1 Edited Jul 23 - Jul 26, 2026 2 D Jun 04, 2026, 03:40 PM Pending Approve Reject Preview" [ref=e722]:
                - cell "Select Row" [ref=e723]:
                  - checkbox "Select Row" [ref=e724] [cursor=pointer]
                - cell "REQ-2026-913" [ref=e725]:
                  - generic [ref=e728]: REQ-2026-913
                - cell "Donot change configuratio..." [ref=e729]:
                  - generic [ref=e732]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e733]:
                  - generic [ref=e734]:
                    - generic [ref=e736]: Sick Leave1
                    - generic [ref=e738]: Edited
                - cell "Jul 23 - Jul 26, 2026" [ref=e739]:
                  - generic [ref=e742]: Jul 23 - Jul 26, 2026
                - cell "2 D" [ref=e743]:
                  - generic [ref=e746]: 2 D
                - cell "Jun 04, 2026, 03:40 PM" [ref=e747]:
                  - generic [ref=e750]: Jun 04, 2026, 03:40 PM
                - cell "Pending" [ref=e751]:
                  - generic [ref=e752]: Pending
                - cell "Approve Reject Preview" [ref=e753]:
                  - generic [ref=e754]:
                    - button "Approve" [ref=e756] [cursor=pointer]:
                      - img "Approve" [ref=e757]
                    - button "Reject" [ref=e759] [cursor=pointer]:
                      - img "Reject" [ref=e760]
                    - button "Preview" [ref=e762] [cursor=pointer]:
                      - img "Preview" [ref=e763]
              - row "Select Row REQ-2026-912 Donot change configuratio... Hajj Leave Edited Jul 09 - Jul 10, 2026 2 D Jun 04, 2026, 12:29 PM Pending Approve Reject Preview" [ref=e764]:
                - cell "Select Row" [ref=e765]:
                  - checkbox "Select Row" [ref=e766] [cursor=pointer]
                - cell "REQ-2026-912" [ref=e767]:
                  - generic [ref=e770]: REQ-2026-912
                - cell "Donot change configuratio..." [ref=e771]:
                  - generic [ref=e774]: Donot change configuratio...
                - cell "Hajj Leave Edited" [ref=e775]:
                  - generic [ref=e776]:
                    - generic [ref=e778]: Hajj Leave
                    - generic [ref=e780]: Edited
                - cell "Jul 09 - Jul 10, 2026" [ref=e781]:
                  - generic [ref=e784]: Jul 09 - Jul 10, 2026
                - cell "2 D" [ref=e785]:
                  - generic [ref=e788]: 2 D
                - cell "Jun 04, 2026, 12:29 PM" [ref=e789]:
                  - generic [ref=e792]: Jun 04, 2026, 12:29 PM
                - cell "Pending" [ref=e793]:
                  - generic [ref=e794]: Pending
                - cell "Approve Reject Preview" [ref=e795]:
                  - generic [ref=e796]:
                    - button "Approve" [ref=e798] [cursor=pointer]:
                      - img "Approve" [ref=e799]
                    - button "Reject" [ref=e801] [cursor=pointer]:
                      - img "Reject" [ref=e802]
                    - button "Preview" [ref=e804] [cursor=pointer]:
                      - img "Preview" [ref=e805]
              - row "Select Row REQ-2026-911 Donot change configuratio... Casual Leave Edited Jul 05 - Jul 07, 2026 3 D Jun 04, 2026, 12:26 PM Pending Approve Reject Preview" [ref=e806]:
                - cell "Select Row" [ref=e807]:
                  - checkbox "Select Row" [ref=e808] [cursor=pointer]
                - cell "REQ-2026-911" [ref=e809]:
                  - generic [ref=e812]: REQ-2026-911
                - cell "Donot change configuratio..." [ref=e813]:
                  - generic [ref=e816]: Donot change configuratio...
                - cell "Casual Leave Edited" [ref=e817]:
                  - generic [ref=e818]:
                    - generic [ref=e820]: Casual Leave
                    - generic [ref=e822]: Edited
                - cell "Jul 05 - Jul 07, 2026" [ref=e823]:
                  - generic [ref=e826]: Jul 05 - Jul 07, 2026
                - cell "3 D" [ref=e827]:
                  - generic [ref=e830]: 3 D
                - cell "Jun 04, 2026, 12:26 PM" [ref=e831]:
                  - generic [ref=e834]: Jun 04, 2026, 12:26 PM
                - cell "Pending" [ref=e835]:
                  - generic [ref=e836]: Pending
                - cell "Approve Reject Preview" [ref=e837]:
                  - generic [ref=e838]:
                    - button "Approve" [ref=e840] [cursor=pointer]:
                      - img "Approve" [ref=e841]
                    - button "Reject" [ref=e843] [cursor=pointer]:
                      - img "Reject" [ref=e844]
                    - button "Preview" [ref=e846] [cursor=pointer]:
                      - img "Preview" [ref=e847]
              - row "Select Row REQ-2026-910 Donot change configuratio... Sick Leave1 Edited Jun 15 - Jun 16, 2026 2 D Jun 04, 2026, 12:21 PM Pending Approve Reject Preview" [ref=e848]:
                - cell "Select Row" [ref=e849]:
                  - checkbox "Select Row" [ref=e850] [cursor=pointer]
                - cell "REQ-2026-910" [ref=e851]:
                  - generic [ref=e854]: REQ-2026-910
                - cell "Donot change configuratio..." [ref=e855]:
                  - generic [ref=e858]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e859]:
                  - generic [ref=e860]:
                    - generic [ref=e862]: Sick Leave1
                    - generic [ref=e864]: Edited
                - cell "Jun 15 - Jun 16, 2026" [ref=e865]:
                  - generic [ref=e868]: Jun 15 - Jun 16, 2026
                - cell "2 D" [ref=e869]:
                  - generic [ref=e872]: 2 D
                - cell "Jun 04, 2026, 12:21 PM" [ref=e873]:
                  - generic [ref=e876]: Jun 04, 2026, 12:21 PM
                - cell "Pending" [ref=e877]:
                  - generic [ref=e878]: Pending
                - cell "Approve Reject Preview" [ref=e879]:
                  - generic [ref=e880]:
                    - button "Approve" [ref=e882] [cursor=pointer]:
                      - img "Approve" [ref=e883]
                    - button "Reject" [ref=e885] [cursor=pointer]:
                      - img "Reject" [ref=e886]
                    - button "Preview" [ref=e888] [cursor=pointer]:
                      - img "Preview" [ref=e889]
              - row "Select Row REQ-2026-909 Donot change configuratio... Maternity Leave0 Edited Jun 25 - Jun 30, 2026 5 D Jun 04, 2026, 12:18 PM Approved Reject Preview" [ref=e890]:
                - cell "Select Row" [ref=e891]:
                  - checkbox "Select Row" [ref=e892] [cursor=pointer]
                - cell "REQ-2026-909" [ref=e893]:
                  - generic [ref=e896]: REQ-2026-909
                - cell "Donot change configuratio..." [ref=e897]:
                  - generic [ref=e900]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e901]:
                  - generic [ref=e902]:
                    - generic [ref=e904]: Maternity Leave0
                    - generic [ref=e906]: Edited
                - cell "Jun 25 - Jun 30, 2026" [ref=e907]:
                  - generic [ref=e910]: Jun 25 - Jun 30, 2026
                - cell "5 D" [ref=e911]:
                  - generic [ref=e914]: 5 D
                - cell "Jun 04, 2026, 12:18 PM" [ref=e915]:
                  - generic [ref=e918]: Jun 04, 2026, 12:18 PM
                - cell "Approved" [ref=e919]:
                  - generic [ref=e920]: Approved
                - cell "Reject Preview" [ref=e921]:
                  - generic [ref=e922]:
                    - button "Reject" [ref=e924] [cursor=pointer]:
                      - img "Reject" [ref=e925]
                    - button "Preview" [ref=e927] [cursor=pointer]:
                      - img "Preview" [ref=e928]
              - row "Select Row REQ-2026-908 Donot change configuratio... Annual Vacation7 Edited Jun 04 - Jun 09, 2026 5 D Jun 04, 2026, 12:16 PM Pending Approve Reject Preview" [ref=e929]:
                - cell "Select Row" [ref=e930]:
                  - checkbox "Select Row" [ref=e931] [cursor=pointer]
                - cell "REQ-2026-908" [ref=e932]:
                  - generic [ref=e935]: REQ-2026-908
                - cell "Donot change configuratio..." [ref=e936]:
                  - generic [ref=e939]: Donot change configuratio...
                - cell "Annual Vacation7 Edited" [ref=e940]:
                  - generic [ref=e941]:
                    - generic [ref=e943]: Annual Vacation7
                    - generic [ref=e945]: Edited
                - cell "Jun 04 - Jun 09, 2026" [ref=e946]:
                  - generic [ref=e949]: Jun 04 - Jun 09, 2026
                - cell "5 D" [ref=e950]:
                  - generic [ref=e953]: 5 D
                - cell "Jun 04, 2026, 12:16 PM" [ref=e954]:
                  - generic [ref=e957]: Jun 04, 2026, 12:16 PM
                - cell "Pending" [ref=e958]:
                  - generic [ref=e959]: Pending
                - cell "Approve Reject Preview" [ref=e960]:
                  - generic [ref=e961]:
                    - button "Approve" [ref=e963] [cursor=pointer]:
                      - img "Approve" [ref=e964]
                    - button "Reject" [ref=e966] [cursor=pointer]:
                      - img "Reject" [ref=e967]
                    - button "Preview" [ref=e969] [cursor=pointer]:
                      - img "Preview" [ref=e970]
              - row "Select Row REQ-2026-907 Donot change configuratio... Maternity Leave0 Edited Jun 11 - Jun 12, 2026 2 D Jun 04, 2026, 12:12 PM Pending Approve Reject Preview" [ref=e971]:
                - cell "Select Row" [ref=e972]:
                  - checkbox "Select Row" [ref=e973] [cursor=pointer]
                - cell "REQ-2026-907" [ref=e974]:
                  - generic [ref=e977]: REQ-2026-907
                - cell "Donot change configuratio..." [ref=e978]:
                  - generic [ref=e981]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e982]:
                  - generic [ref=e983]:
                    - generic [ref=e985]: Maternity Leave0
                    - generic [ref=e987]: Edited
                - cell "Jun 11 - Jun 12, 2026" [ref=e988]:
                  - generic [ref=e991]: Jun 11 - Jun 12, 2026
                - cell "2 D" [ref=e992]:
                  - generic [ref=e995]: 2 D
                - cell "Jun 04, 2026, 12:12 PM" [ref=e996]:
                  - generic [ref=e999]: Jun 04, 2026, 12:12 PM
                - cell "Pending" [ref=e1000]:
                  - generic [ref=e1001]: Pending
                - cell "Approve Reject Preview" [ref=e1002]:
                  - generic [ref=e1003]:
                    - button "Approve" [ref=e1005] [cursor=pointer]:
                      - img "Approve" [ref=e1006]
                    - button "Reject" [ref=e1008] [cursor=pointer]:
                      - img "Reject" [ref=e1009]
                    - button "Preview" [ref=e1011] [cursor=pointer]:
                      - img "Preview" [ref=e1012]
              - row "Select Row REQ-2026-906 mostafa essam Casual Leave Nov 11 - Nov 14, 2026 4 D May 31, 2026, 11:10 AM Pending Approve Reject Preview" [ref=e1013]:
                - cell "Select Row" [ref=e1014]:
                  - checkbox "Select Row" [ref=e1015] [cursor=pointer]
                - cell "REQ-2026-906" [ref=e1016]:
                  - generic [ref=e1019]: REQ-2026-906
                - cell "mostafa essam" [ref=e1020]:
                  - generic [ref=e1023]: mostafa essam
                - cell "Casual Leave" [ref=e1024]:
                  - generic [ref=e1027]: Casual Leave
                - cell "Nov 11 - Nov 14, 2026" [ref=e1028]:
                  - generic [ref=e1031]: Nov 11 - Nov 14, 2026
                - cell "4 D" [ref=e1032]:
                  - generic [ref=e1035]: 4 D
                - cell "May 31, 2026, 11:10 AM" [ref=e1036]:
                  - generic [ref=e1039]: May 31, 2026, 11:10 AM
                - cell "Pending" [ref=e1040]:
                  - generic [ref=e1041]: Pending
                - cell "Approve Reject Preview" [ref=e1042]:
                  - generic [ref=e1043]:
                    - button "Approve" [ref=e1045] [cursor=pointer]:
                      - img "Approve" [ref=e1046]
                    - button "Reject" [ref=e1048] [cursor=pointer]:
                      - img "Reject" [ref=e1049]
                    - button "Preview" [ref=e1051] [cursor=pointer]:
                      - img "Preview" [ref=e1052]
          - generic [ref=e1055]:
            - generic [ref=e1056]:
              - generic [ref=e1057] [cursor=pointer]:
                - text: Show Entries
                - generic [ref=e1058]:
                  - combobox "20" [ref=e1059]
                  - button "dropdown trigger" [ref=e1060]:
                    - img [ref=e1061]
              - generic [ref=e1063]: Showing 1-20 of 120 row
            - generic [ref=e1065]:
              - button "Previous" [disabled] [ref=e1066]:
                - img "previous" [ref=e1067]
                - generic [ref=e1068]: Previous
              - navigation "PAGINATION.PAGE_NAVIGATION" [ref=e1069]:
                - button "PAGINATION.GO_TO_PAGE" [ref=e1070] [cursor=pointer]: "1"
                - button "PAGINATION.GO_TO_PAGE" [ref=e1071] [cursor=pointer]: "2"
                - generic [ref=e1072]: ...
                - button "PAGINATION.GO_TO_PAGE" [ref=e1073] [cursor=pointer]: "5"
                - button "PAGINATION.GO_TO_PAGE" [ref=e1074] [cursor=pointer]: "6"
              - button "Next" [ref=e1075] [cursor=pointer]:
                - generic [ref=e1076]: Next
                - img "next" [ref=e1077]
  - dialog [ref=e1079]:
    - generic [ref=e1084]:
      - generic [ref=e1085]:
        - heading "Create Request" [level=3] [ref=e1088]
        - button "Close" [ref=e1089] [cursor=pointer]
      - generic [ref=e1090]:
        - generic [ref=e1091]:
          - generic [ref=e1092]: Request Type *
          - generic [ref=e1093] [cursor=pointer]:
            - combobox "Maternity Leave0" [active] [ref=e1094]
            - img [ref=e1095]
            - button "dropdown trigger" [ref=e1097]:
              - img [ref=e1098]
        - generic [ref=e1100]:
          - generic [ref=e1101]: Employee name *
          - generic [ref=e1102] [cursor=pointer]:
            - combobox "Select employee" [ref=e1103]
            - button "dropdown trigger" [ref=e1104]:
              - img [ref=e1105]
        - generic [ref=e1109]:
          - generic [ref=e1110]:
            - generic [ref=e1111]: Request Date *
            - generic [ref=e1116] [cursor=pointer]:
              - img [ref=e1118]
              - generic [ref=e1120]: Select request date
          - generic [ref=e1121]:
            - generic [ref=e1122]: Notes *
            - generic [ref=e1123]:
              - textbox "Notes *" [ref=e1124]:
                - /placeholder: Add Notes
              - generic [ref=e1125]: Maximum 250 characters
          - generic [ref=e1126]:
            - generic [ref=e1127]: Attachments *
            - generic [ref=e1131] [cursor=pointer]:
              - img "upload" [ref=e1133]
              - generic [ref=e1134]:
                - generic [ref=e1135]:
                  - paragraph [ref=e1136]: Click to upload
                  - paragraph [ref=e1137]: or drag and drop
                - paragraph [ref=e1138]: PDF, DOC, DOCX, JPG, JPEG, PNG (max. 5MB)
      - generic [ref=e1139]:
        - button "Cancel" [ref=e1140] [cursor=pointer]
        - button "Continue" [disabled] [ref=e1141]
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