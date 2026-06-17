# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\managerRequests.spec.ts >> Manager Requests >> create new request Maternity Request successfully
- Location: tests\specs\managerRequests.spec.ts:19:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: getByText('Rejected') resolved to 2 elements:
    1) <span _ngcontent-ng-c944489365="" class="badge badge-requests-manager-rejected ng-star-inserted"> Rejected </span> aka getByText('Rejected').first()
    2) <span _ngcontent-ng-c944489365="" class="badge badge-requests-manager-rejected ng-star-inserted"> Rejected </span> aka getByText('Rejected').nth(1)

Call log:
  - waiting for getByText('Rejected') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
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
              - row "Select Row REQ-2026-1011 Donot change configuratio... Maternity Leave0 Oct 21 - Oct 24, 2026 3 D Jun 17, 2026, 05:14 PM Rejected Preview" [ref=e263]:
                - cell "Select Row" [ref=e264]:
                  - checkbox "Select Row" [ref=e265] [cursor=pointer]
                - cell "REQ-2026-1011" [ref=e266]:
                  - generic [ref=e269]: REQ-2026-1011
                - cell "Donot change configuratio..." [ref=e270]:
                  - generic [ref=e273]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e274]:
                  - generic [ref=e277]: Maternity Leave0
                - cell "Oct 21 - Oct 24, 2026" [ref=e278]:
                  - generic [ref=e281]: Oct 21 - Oct 24, 2026
                - cell "3 D" [ref=e282]:
                  - generic [ref=e285]: 3 D
                - cell "Jun 17, 2026, 05:14 PM" [ref=e286]:
                  - generic [ref=e289]: Jun 17, 2026, 05:14 PM
                - cell "Rejected" [ref=e290]:
                  - generic [ref=e291]: Rejected
                - cell "Preview" [ref=e292]:
                  - button "Preview" [ref=e295] [cursor=pointer]:
                    - img "Preview" [ref=e296]
              - row "Select Row REQ-2026-1010 Donot change configuratio... Maternity Leave0 Oct 21 - Oct 24, 2026 3 D Jun 17, 2026, 05:12 PM Rejected Preview" [ref=e297]:
                - cell "Select Row" [ref=e298]:
                  - checkbox "Select Row" [ref=e299] [cursor=pointer]
                - cell "REQ-2026-1010" [ref=e300]:
                  - generic [ref=e303]: REQ-2026-1010
                - cell "Donot change configuratio..." [ref=e304]:
                  - generic [ref=e307]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e308]:
                  - generic [ref=e311]: Maternity Leave0
                - cell "Oct 21 - Oct 24, 2026" [ref=e312]:
                  - generic [ref=e315]: Oct 21 - Oct 24, 2026
                - cell "3 D" [ref=e316]:
                  - generic [ref=e319]: 3 D
                - cell "Jun 17, 2026, 05:12 PM" [ref=e320]:
                  - generic [ref=e323]: Jun 17, 2026, 05:12 PM
                - cell "Rejected" [ref=e324]:
                  - generic [ref=e325]: Rejected
                - cell "Preview" [ref=e326]:
                  - button "Preview" [ref=e329] [cursor=pointer]:
                    - img "Preview" [ref=e330]
              - row "Select Row REQ-2026-1009 Donot change configuratio... Maternity Leave0 Oct 21 - Oct 24, 2026 3 D Jun 17, 2026, 04:56 PM Rejected Preview" [ref=e331]:
                - cell "Select Row" [ref=e332]:
                  - checkbox "Select Row" [ref=e333] [cursor=pointer]
                - cell "REQ-2026-1009" [ref=e334]:
                  - generic [ref=e337]: REQ-2026-1009
                - cell "Donot change configuratio..." [ref=e338]:
                  - generic [ref=e341]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e342]:
                  - generic [ref=e345]: Maternity Leave0
                - cell "Oct 21 - Oct 24, 2026" [ref=e346]:
                  - generic [ref=e349]: Oct 21 - Oct 24, 2026
                - cell "3 D" [ref=e350]:
                  - generic [ref=e353]: 3 D
                - cell "Jun 17, 2026, 04:56 PM" [ref=e354]:
                  - generic [ref=e357]: Jun 17, 2026, 04:56 PM
                - cell "Rejected" [ref=e358]:
                  - generic [ref=e359]: Rejected
                - cell "Preview" [ref=e360]:
                  - button "Preview" [ref=e363] [cursor=pointer]:
                    - img "Preview" [ref=e364]
              - row "Select Row REQ-2026-1004 eslam qa Casual Leave Jun 27 - Jun 30, 2026 4 D Jun 17, 2026, 02:55 PM Pending Approve Reject Preview" [ref=e365]:
                - cell "Select Row" [ref=e366]:
                  - checkbox "Select Row" [ref=e367] [cursor=pointer]
                - cell "REQ-2026-1004" [ref=e368]:
                  - generic [ref=e371]: REQ-2026-1004
                - cell "eslam qa" [ref=e372]:
                  - generic [ref=e375]: eslam qa
                - cell "Casual Leave" [ref=e376]:
                  - generic [ref=e379]: Casual Leave
                - cell "Jun 27 - Jun 30, 2026" [ref=e380]:
                  - generic [ref=e383]: Jun 27 - Jun 30, 2026
                - cell "4 D" [ref=e384]:
                  - generic [ref=e387]: 4 D
                - cell "Jun 17, 2026, 02:55 PM" [ref=e388]:
                  - generic [ref=e391]: Jun 17, 2026, 02:55 PM
                - cell "Pending" [ref=e392]:
                  - generic [ref=e393]: Pending
                - cell "Approve Reject Preview" [ref=e394]:
                  - generic [ref=e395]:
                    - button "Approve" [ref=e397] [cursor=pointer]:
                      - img "Approve" [ref=e398]
                    - button "Reject" [ref=e400] [cursor=pointer]:
                      - img "Reject" [ref=e401]
                    - button "Preview" [ref=e403] [cursor=pointer]:
                      - img "Preview" [ref=e404]
              - row "Select Row REQ-2026-994 Donot change configuratio... Document0 Jun 30 - Jun 30, 2026 5 Jun 15, 2026, 11:40 AM Pending Approve Reject Preview" [ref=e405]:
                - cell "Select Row" [ref=e406]:
                  - checkbox "Select Row" [ref=e407] [cursor=pointer]
                - cell "REQ-2026-994" [ref=e408]:
                  - generic [ref=e411]: REQ-2026-994
                - cell "Donot change configuratio..." [ref=e412]:
                  - generic [ref=e415]: Donot change configuratio...
                - cell "Document0" [ref=e416]:
                  - generic [ref=e419]: Document0
                - cell "Jun 30 - Jun 30, 2026" [ref=e420]:
                  - generic [ref=e423]: Jun 30 - Jun 30, 2026
                - cell "5" [ref=e424]:
                  - generic [ref=e427]: "5"
                - cell "Jun 15, 2026, 11:40 AM" [ref=e428]:
                  - generic [ref=e431]: Jun 15, 2026, 11:40 AM
                - cell "Pending" [ref=e432]:
                  - generic [ref=e433]: Pending
                - cell "Approve Reject Preview" [ref=e434]:
                  - generic [ref=e435]:
                    - button "Approve" [ref=e437] [cursor=pointer]:
                      - img "Approve" [ref=e438]
                    - button "Reject" [ref=e440] [cursor=pointer]:
                      - img "Reject" [ref=e441]
                    - button "Preview" [ref=e443] [cursor=pointer]:
                      - img "Preview" [ref=e444]
              - row "Select Row REQ-2026-986 Donot change configuratio... Document0 Edited Jul 03 - Jul 03, 2026 1 Jun 14, 2026, 04:04 PM Pending Approve Reject Preview" [ref=e445]:
                - cell "Select Row" [ref=e446]:
                  - checkbox "Select Row" [ref=e447] [cursor=pointer]
                - cell "REQ-2026-986" [ref=e448]:
                  - generic [ref=e451]: REQ-2026-986
                - cell "Donot change configuratio..." [ref=e452]:
                  - generic [ref=e455]: Donot change configuratio...
                - cell "Document0 Edited" [ref=e456]:
                  - generic [ref=e457]:
                    - generic [ref=e459]: Document0
                    - generic [ref=e461]: Edited
                - cell "Jul 03 - Jul 03, 2026" [ref=e462]:
                  - generic [ref=e465]: Jul 03 - Jul 03, 2026
                - cell "1" [ref=e466]:
                  - generic [ref=e469]: "1"
                - cell "Jun 14, 2026, 04:04 PM" [ref=e470]:
                  - generic [ref=e473]: Jun 14, 2026, 04:04 PM
                - cell "Pending" [ref=e474]:
                  - generic [ref=e475]: Pending
                - cell "Approve Reject Preview" [ref=e476]:
                  - generic [ref=e477]:
                    - button "Approve" [ref=e479] [cursor=pointer]:
                      - img "Approve" [ref=e480]
                    - button "Reject" [ref=e482] [cursor=pointer]:
                      - img "Reject" [ref=e483]
                    - button "Preview" [ref=e485] [cursor=pointer]:
                      - img "Preview" [ref=e486]
              - row "Select Row REQ-2026-985 Donot change configuratio... Document0 Jun 29 - Jun 29, 2026 1 Jun 14, 2026, 03:38 PM Approved Reject Preview" [ref=e487]:
                - cell "Select Row" [ref=e488]:
                  - checkbox "Select Row" [ref=e489] [cursor=pointer]
                - cell "REQ-2026-985" [ref=e490]:
                  - generic [ref=e493]: REQ-2026-985
                - cell "Donot change configuratio..." [ref=e494]:
                  - generic [ref=e497]: Donot change configuratio...
                - cell "Document0" [ref=e498]:
                  - generic [ref=e501]: Document0
                - cell "Jun 29 - Jun 29, 2026" [ref=e502]:
                  - generic [ref=e505]: Jun 29 - Jun 29, 2026
                - cell "1" [ref=e506]:
                  - generic [ref=e509]: "1"
                - cell "Jun 14, 2026, 03:38 PM" [ref=e510]:
                  - generic [ref=e513]: Jun 14, 2026, 03:38 PM
                - cell "Approved" [ref=e514]:
                  - generic [ref=e515]: Approved
                - cell "Reject Preview" [ref=e516]:
                  - generic [ref=e517]:
                    - button "Reject" [ref=e519] [cursor=pointer]:
                      - img "Reject" [ref=e520]
                    - button "Preview" [ref=e522] [cursor=pointer]:
                      - img "Preview" [ref=e523]
              - row "Select Row REQ-2026-983 Donot change configuratio... Document0 Jun 28 - Jun 28, 2026 1 Jun 14, 2026, 03:28 PM Pending Reject Preview" [ref=e524]:
                - cell "Select Row" [ref=e525]:
                  - checkbox "Select Row" [ref=e526] [cursor=pointer]
                - cell "REQ-2026-983" [ref=e527]:
                  - generic [ref=e530]: REQ-2026-983
                - cell "Donot change configuratio..." [ref=e531]:
                  - generic [ref=e534]: Donot change configuratio...
                - cell "Document0" [ref=e535]:
                  - generic [ref=e538]: Document0
                - cell "Jun 28 - Jun 28, 2026" [ref=e539]:
                  - generic [ref=e542]: Jun 28 - Jun 28, 2026
                - cell "1" [ref=e543]:
                  - generic [ref=e546]: "1"
                - cell "Jun 14, 2026, 03:28 PM" [ref=e547]:
                  - generic [ref=e550]: Jun 14, 2026, 03:28 PM
                - cell "Pending" [ref=e551]:
                  - generic [ref=e552]: Pending
                - cell "Reject Preview" [ref=e553]:
                  - generic [ref=e554]:
                    - button "Reject" [ref=e556] [cursor=pointer]:
                      - img "Reject" [ref=e557]
                    - button "Preview" [ref=e559] [cursor=pointer]:
                      - img "Preview" [ref=e560]
              - row "Select Row REQ-2026-957 Donot change configuratio... Maternity Leave0 Nov 03 - Nov 05, 2026 3 D Jun 13, 2026, 11:31 PM Pending Approve Reject Preview" [ref=e561]:
                - cell "Select Row" [ref=e562]:
                  - checkbox "Select Row" [ref=e563] [cursor=pointer]
                - cell "REQ-2026-957" [ref=e564]:
                  - generic [ref=e567]: REQ-2026-957
                - cell "Donot change configuratio..." [ref=e568]:
                  - generic [ref=e571]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e572]:
                  - generic [ref=e575]: Maternity Leave0
                - cell "Nov 03 - Nov 05, 2026" [ref=e576]:
                  - generic [ref=e579]: Nov 03 - Nov 05, 2026
                - cell "3 D" [ref=e580]:
                  - generic [ref=e583]: 3 D
                - cell "Jun 13, 2026, 11:31 PM" [ref=e584]:
                  - generic [ref=e587]: Jun 13, 2026, 11:31 PM
                - cell "Pending" [ref=e588]:
                  - generic [ref=e589]: Pending
                - cell "Approve Reject Preview" [ref=e590]:
                  - generic [ref=e591]:
                    - button "Approve" [ref=e593] [cursor=pointer]:
                      - img "Approve" [ref=e594]
                    - button "Reject" [ref=e596] [cursor=pointer]:
                      - img "Reject" [ref=e597]
                    - button "Preview" [ref=e599] [cursor=pointer]:
                      - img "Preview" [ref=e600]
              - row "Select Row REQ-2026-923 Donot change configuratio... Sick Leave1 Oct 01 - Oct 03, 2026 2 D Jun 09, 2026, 05:13 PM Pending Preview" [ref=e601]:
                - cell "Select Row" [ref=e602]:
                  - checkbox "Select Row" [ref=e603] [cursor=pointer]
                - cell "REQ-2026-923" [ref=e604]:
                  - generic [ref=e607]: REQ-2026-923
                - cell "Donot change configuratio..." [ref=e608]:
                  - generic [ref=e611]: Donot change configuratio...
                - cell "Sick Leave1" [ref=e612]:
                  - generic [ref=e615]: Sick Leave1
                - cell "Oct 01 - Oct 03, 2026" [ref=e616]:
                  - generic [ref=e619]: Oct 01 - Oct 03, 2026
                - cell "2 D" [ref=e620]:
                  - generic [ref=e623]: 2 D
                - cell "Jun 09, 2026, 05:13 PM" [ref=e624]:
                  - generic [ref=e627]: Jun 09, 2026, 05:13 PM
                - cell "Pending" [ref=e628]:
                  - generic [ref=e629]: Pending
                - cell "Preview" [ref=e630]:
                  - button "Preview" [ref=e633] [cursor=pointer]:
                    - img "Preview" [ref=e634]
              - row "Select Row REQ-2026-922 Donot change configuratio... Sick Leave1 Sep 14 - Sep 16, 2026 3 D Jun 09, 2026, 05:12 PM Pending Preview" [ref=e635]:
                - cell "Select Row" [ref=e636]:
                  - checkbox "Select Row" [ref=e637] [cursor=pointer]
                - cell "REQ-2026-922" [ref=e638]:
                  - generic [ref=e641]: REQ-2026-922
                - cell "Donot change configuratio..." [ref=e642]:
                  - generic [ref=e645]: Donot change configuratio...
                - cell "Sick Leave1" [ref=e646]:
                  - generic [ref=e649]: Sick Leave1
                - cell "Sep 14 - Sep 16, 2026" [ref=e650]:
                  - generic [ref=e653]: Sep 14 - Sep 16, 2026
                - cell "3 D" [ref=e654]:
                  - generic [ref=e657]: 3 D
                - cell "Jun 09, 2026, 05:12 PM" [ref=e658]:
                  - generic [ref=e661]: Jun 09, 2026, 05:12 PM
                - cell "Pending" [ref=e662]:
                  - generic [ref=e663]: Pending
                - cell "Preview" [ref=e664]:
                  - button "Preview" [ref=e667] [cursor=pointer]:
                    - img "Preview" [ref=e668]
              - row "Select Row REQ-2026-921 Donot change configuratio... Maternity Leave0 Aug 10 - Aug 13, 2026 4 D Jun 09, 2026, 05:00 PM Pending Reject Preview" [ref=e669]:
                - cell "Select Row" [ref=e670]:
                  - checkbox "Select Row" [ref=e671] [cursor=pointer]
                - cell "REQ-2026-921" [ref=e672]:
                  - generic [ref=e675]: REQ-2026-921
                - cell "Donot change configuratio..." [ref=e676]:
                  - generic [ref=e679]: Donot change configuratio...
                - cell "Maternity Leave0" [ref=e680]:
                  - generic [ref=e683]: Maternity Leave0
                - cell "Aug 10 - Aug 13, 2026" [ref=e684]:
                  - generic [ref=e687]: Aug 10 - Aug 13, 2026
                - cell "4 D" [ref=e688]:
                  - generic [ref=e691]: 4 D
                - cell "Jun 09, 2026, 05:00 PM" [ref=e692]:
                  - generic [ref=e695]: Jun 09, 2026, 05:00 PM
                - cell "Pending" [ref=e696]:
                  - generic [ref=e697]: Pending
                - cell "Reject Preview" [ref=e698]:
                  - generic [ref=e699]:
                    - button "Reject" [ref=e701] [cursor=pointer]:
                      - img "Reject" [ref=e702]
                    - button "Preview" [ref=e704] [cursor=pointer]:
                      - img "Preview" [ref=e705]
              - row "Select Row REQ-2026-918 Donot change configuratio... Maternity Leave0 Edited Jun 18 - Jun 21, 2026 3 D Jun 09, 2026, 04:16 PM Pending Reject Preview" [ref=e706]:
                - cell "Select Row" [ref=e707]:
                  - checkbox "Select Row" [ref=e708] [cursor=pointer]
                - cell "REQ-2026-918" [ref=e709]:
                  - generic [ref=e712]: REQ-2026-918
                - cell "Donot change configuratio..." [ref=e713]:
                  - generic [ref=e716]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e717]:
                  - generic [ref=e718]:
                    - generic [ref=e720]: Maternity Leave0
                    - generic [ref=e722]: Edited
                - cell "Jun 18 - Jun 21, 2026" [ref=e723]:
                  - generic [ref=e726]: Jun 18 - Jun 21, 2026
                - cell "3 D" [ref=e727]:
                  - generic [ref=e730]: 3 D
                - cell "Jun 09, 2026, 04:16 PM" [ref=e731]:
                  - generic [ref=e734]: Jun 09, 2026, 04:16 PM
                - cell "Pending" [ref=e735]:
                  - generic [ref=e736]: Pending
                - cell "Reject Preview" [ref=e737]:
                  - generic [ref=e738]:
                    - button "Reject" [ref=e740] [cursor=pointer]:
                      - img "Reject" [ref=e741]
                    - button "Preview" [ref=e743] [cursor=pointer]:
                      - img "Preview" [ref=e744]
              - row "Select Row REQ-2026-916 eslam qa Hajj Leave Jun 12 - Jun 13, 2026 2 D Jun 09, 2026, 11:02 AM Pending Reject Preview" [ref=e745]:
                - cell "Select Row" [ref=e746]:
                  - checkbox "Select Row" [ref=e747] [cursor=pointer]
                - cell "REQ-2026-916" [ref=e748]:
                  - generic [ref=e751]: REQ-2026-916
                - cell "eslam qa" [ref=e752]:
                  - generic [ref=e755]: eslam qa
                - cell "Hajj Leave" [ref=e756]:
                  - generic [ref=e759]: Hajj Leave
                - cell "Jun 12 - Jun 13, 2026" [ref=e760]:
                  - generic [ref=e763]: Jun 12 - Jun 13, 2026
                - cell "2 D" [ref=e764]:
                  - generic [ref=e767]: 2 D
                - cell "Jun 09, 2026, 11:02 AM" [ref=e768]:
                  - generic [ref=e771]: Jun 09, 2026, 11:02 AM
                - cell "Pending" [ref=e772]:
                  - generic [ref=e773]: Pending
                - cell "Reject Preview" [ref=e774]:
                  - generic [ref=e775]:
                    - button "Reject" [ref=e777] [cursor=pointer]:
                      - img "Reject" [ref=e778]
                    - button "Preview" [ref=e780] [cursor=pointer]:
                      - img "Preview" [ref=e781]
              - row "Select Row REQ-2026-915 Donot change configuratio... Sick Leave1 Edited Sep 07 - Sep 10, 2026 4 D Jun 04, 2026, 04:18 PM Pending Approve Reject Preview" [ref=e782]:
                - cell "Select Row" [ref=e783]:
                  - checkbox "Select Row" [ref=e784] [cursor=pointer]
                - cell "REQ-2026-915" [ref=e785]:
                  - generic [ref=e788]: REQ-2026-915
                - cell "Donot change configuratio..." [ref=e789]:
                  - generic [ref=e792]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e793]:
                  - generic [ref=e794]:
                    - generic [ref=e796]: Sick Leave1
                    - generic [ref=e798]: Edited
                - cell "Sep 07 - Sep 10, 2026" [ref=e799]:
                  - generic [ref=e802]: Sep 07 - Sep 10, 2026
                - cell "4 D" [ref=e803]:
                  - generic [ref=e806]: 4 D
                - cell "Jun 04, 2026, 04:18 PM" [ref=e807]:
                  - generic [ref=e810]: Jun 04, 2026, 04:18 PM
                - cell "Pending" [ref=e811]:
                  - generic [ref=e812]: Pending
                - cell "Approve Reject Preview" [ref=e813]:
                  - generic [ref=e814]:
                    - button "Approve" [ref=e816] [cursor=pointer]:
                      - img "Approve" [ref=e817]
                    - button "Reject" [ref=e819] [cursor=pointer]:
                      - img "Reject" [ref=e820]
                    - button "Preview" [ref=e822] [cursor=pointer]:
                      - img "Preview" [ref=e823]
              - row "Select Row REQ-2026-913 Donot change configuratio... Sick Leave1 Edited Jul 23 - Jul 26, 2026 2 D Jun 04, 2026, 03:40 PM Pending Approve Reject Preview" [ref=e824]:
                - cell "Select Row" [ref=e825]:
                  - checkbox "Select Row" [ref=e826] [cursor=pointer]
                - cell "REQ-2026-913" [ref=e827]:
                  - generic [ref=e830]: REQ-2026-913
                - cell "Donot change configuratio..." [ref=e831]:
                  - generic [ref=e834]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e835]:
                  - generic [ref=e836]:
                    - generic [ref=e838]: Sick Leave1
                    - generic [ref=e840]: Edited
                - cell "Jul 23 - Jul 26, 2026" [ref=e841]:
                  - generic [ref=e844]: Jul 23 - Jul 26, 2026
                - cell "2 D" [ref=e845]:
                  - generic [ref=e848]: 2 D
                - cell "Jun 04, 2026, 03:40 PM" [ref=e849]:
                  - generic [ref=e852]: Jun 04, 2026, 03:40 PM
                - cell "Pending" [ref=e853]:
                  - generic [ref=e854]: Pending
                - cell "Approve Reject Preview" [ref=e855]:
                  - generic [ref=e856]:
                    - button "Approve" [ref=e858] [cursor=pointer]:
                      - img "Approve" [ref=e859]
                    - button "Reject" [ref=e861] [cursor=pointer]:
                      - img "Reject" [ref=e862]
                    - button "Preview" [ref=e864] [cursor=pointer]:
                      - img "Preview" [ref=e865]
              - row "Select Row REQ-2026-912 Donot change configuratio... Hajj Leave Edited Jul 09 - Jul 10, 2026 2 D Jun 04, 2026, 12:29 PM Pending Approve Reject Preview" [ref=e866]:
                - cell "Select Row" [ref=e867]:
                  - checkbox "Select Row" [ref=e868] [cursor=pointer]
                - cell "REQ-2026-912" [ref=e869]:
                  - generic [ref=e872]: REQ-2026-912
                - cell "Donot change configuratio..." [ref=e873]:
                  - generic [ref=e876]: Donot change configuratio...
                - cell "Hajj Leave Edited" [ref=e877]:
                  - generic [ref=e878]:
                    - generic [ref=e880]: Hajj Leave
                    - generic [ref=e882]: Edited
                - cell "Jul 09 - Jul 10, 2026" [ref=e883]:
                  - generic [ref=e886]: Jul 09 - Jul 10, 2026
                - cell "2 D" [ref=e887]:
                  - generic [ref=e890]: 2 D
                - cell "Jun 04, 2026, 12:29 PM" [ref=e891]:
                  - generic [ref=e894]: Jun 04, 2026, 12:29 PM
                - cell "Pending" [ref=e895]:
                  - generic [ref=e896]: Pending
                - cell "Approve Reject Preview" [ref=e897]:
                  - generic [ref=e898]:
                    - button "Approve" [ref=e900] [cursor=pointer]:
                      - img "Approve" [ref=e901]
                    - button "Reject" [ref=e903] [cursor=pointer]:
                      - img "Reject" [ref=e904]
                    - button "Preview" [ref=e906] [cursor=pointer]:
                      - img "Preview" [ref=e907]
              - row "Select Row REQ-2026-911 Donot change configuratio... Casual Leave Edited Jul 05 - Jul 07, 2026 3 D Jun 04, 2026, 12:26 PM Pending Approve Reject Preview" [ref=e908]:
                - cell "Select Row" [ref=e909]:
                  - checkbox "Select Row" [ref=e910] [cursor=pointer]
                - cell "REQ-2026-911" [ref=e911]:
                  - generic [ref=e914]: REQ-2026-911
                - cell "Donot change configuratio..." [ref=e915]:
                  - generic [ref=e918]: Donot change configuratio...
                - cell "Casual Leave Edited" [ref=e919]:
                  - generic [ref=e920]:
                    - generic [ref=e922]: Casual Leave
                    - generic [ref=e924]: Edited
                - cell "Jul 05 - Jul 07, 2026" [ref=e925]:
                  - generic [ref=e928]: Jul 05 - Jul 07, 2026
                - cell "3 D" [ref=e929]:
                  - generic [ref=e932]: 3 D
                - cell "Jun 04, 2026, 12:26 PM" [ref=e933]:
                  - generic [ref=e936]: Jun 04, 2026, 12:26 PM
                - cell "Pending" [ref=e937]:
                  - generic [ref=e938]: Pending
                - cell "Approve Reject Preview" [ref=e939]:
                  - generic [ref=e940]:
                    - button "Approve" [ref=e942] [cursor=pointer]:
                      - img "Approve" [ref=e943]
                    - button "Reject" [ref=e945] [cursor=pointer]:
                      - img "Reject" [ref=e946]
                    - button "Preview" [ref=e948] [cursor=pointer]:
                      - img "Preview" [ref=e949]
              - row "Select Row REQ-2026-910 Donot change configuratio... Sick Leave1 Edited Jun 15 - Jun 16, 2026 2 D Jun 04, 2026, 12:21 PM Pending Approve Reject Preview" [ref=e950]:
                - cell "Select Row" [ref=e951]:
                  - checkbox "Select Row" [ref=e952] [cursor=pointer]
                - cell "REQ-2026-910" [ref=e953]:
                  - generic [ref=e956]: REQ-2026-910
                - cell "Donot change configuratio..." [ref=e957]:
                  - generic [ref=e960]: Donot change configuratio...
                - cell "Sick Leave1 Edited" [ref=e961]:
                  - generic [ref=e962]:
                    - generic [ref=e964]: Sick Leave1
                    - generic [ref=e966]: Edited
                - cell "Jun 15 - Jun 16, 2026" [ref=e967]:
                  - generic [ref=e970]: Jun 15 - Jun 16, 2026
                - cell "2 D" [ref=e971]:
                  - generic [ref=e974]: 2 D
                - cell "Jun 04, 2026, 12:21 PM" [ref=e975]:
                  - generic [ref=e978]: Jun 04, 2026, 12:21 PM
                - cell "Pending" [ref=e979]:
                  - generic [ref=e980]: Pending
                - cell "Approve Reject Preview" [ref=e981]:
                  - generic [ref=e982]:
                    - button "Approve" [ref=e984] [cursor=pointer]:
                      - img "Approve" [ref=e985]
                    - button "Reject" [ref=e987] [cursor=pointer]:
                      - img "Reject" [ref=e988]
                    - button "Preview" [ref=e990] [cursor=pointer]:
                      - img "Preview" [ref=e991]
              - row "Select Row REQ-2026-909 Donot change configuratio... Maternity Leave0 Edited Jun 25 - Jun 30, 2026 5 D Jun 04, 2026, 12:18 PM Approved Reject Preview" [ref=e992]:
                - cell "Select Row" [ref=e993]:
                  - checkbox "Select Row" [ref=e994] [cursor=pointer]
                - cell "REQ-2026-909" [ref=e995]:
                  - generic [ref=e998]: REQ-2026-909
                - cell "Donot change configuratio..." [ref=e999]:
                  - generic [ref=e1002]: Donot change configuratio...
                - cell "Maternity Leave0 Edited" [ref=e1003]:
                  - generic [ref=e1004]:
                    - generic [ref=e1006]: Maternity Leave0
                    - generic [ref=e1008]: Edited
                - cell "Jun 25 - Jun 30, 2026" [ref=e1009]:
                  - generic [ref=e1012]: Jun 25 - Jun 30, 2026
                - cell "5 D" [ref=e1013]:
                  - generic [ref=e1016]: 5 D
                - cell "Jun 04, 2026, 12:18 PM" [ref=e1017]:
                  - generic [ref=e1020]: Jun 04, 2026, 12:18 PM
                - cell "Approved" [ref=e1021]:
                  - generic [ref=e1022]: Approved
                - cell "Reject Preview" [ref=e1023]:
                  - generic [ref=e1024]:
                    - button "Reject" [ref=e1026] [cursor=pointer]:
                      - img "Reject" [ref=e1027]
                    - button "Preview" [ref=e1029] [cursor=pointer]:
                      - img "Preview" [ref=e1030]
          - generic [ref=e1033]:
            - generic [ref=e1034]:
              - generic [ref=e1035] [cursor=pointer]:
                - text: Show Entries
                - generic [ref=e1036]:
                  - combobox "20" [ref=e1037]
                  - button "dropdown trigger" [ref=e1038]:
                    - img [ref=e1039]
              - generic [ref=e1041]: Showing 1-20 of 123 row
            - generic [ref=e1043]:
              - button "Previous" [disabled] [ref=e1044]:
                - img "previous" [ref=e1045]
                - generic [ref=e1046]: Previous
              - navigation "PAGINATION.PAGE_NAVIGATION" [ref=e1047]:
                - button "PAGINATION.GO_TO_PAGE" [ref=e1048] [cursor=pointer]: "1"
                - button "PAGINATION.GO_TO_PAGE" [ref=e1049] [cursor=pointer]: "2"
                - generic [ref=e1050]: ...
                - button "PAGINATION.GO_TO_PAGE" [ref=e1051] [cursor=pointer]: "6"
                - button "PAGINATION.GO_TO_PAGE" [ref=e1052] [cursor=pointer]: "7"
              - button "Next" [ref=e1053] [cursor=pointer]:
                - generic [ref=e1054]: Next
                - img "next" [ref=e1055]
  - generic [ref=e1058]:
    - img "success" [ref=e1060]
    - generic [ref=e1062]:
      - generic [ref=e1063]: Request rejected successfully. The employee has been notified with your feedback.
      - generic [ref=e1065] [cursor=pointer]: 
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
  12  |         await element.click();
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
> 79  |         await element.waitFor({ state: 'visible', timeout });
      |                       ^ Error: locator.waitFor: Error: strict mode violation: getByText('Rejected') resolved to 2 elements:
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
  113 |         return this.page.url();
  114 |     }
  115 | 
  116 |     // ── Form Controls ─────────────────────────────────────────────────────────
  117 | 
  118 |     protected async selectOption(element: Locator, option: string) {
  119 |         await element.selectOption(option);
  120 |     }
  121 | 
  122 |     protected async check(element: Locator) {
  123 |         await element.check();
  124 |     }
  125 | 
  126 |     protected async uncheck(element: Locator) {
  127 |         await element.uncheck();
  128 |     }
  129 | 
  130 |     protected async uploadFile(element: Locator, filePath: string) {
  131 |         await element.setInputFiles(filePath);
  132 |     }
  133 | 
  134 |     // ── Scroll ────────────────────────────────────────────────────────────────
  135 | 
  136 |     protected async scrollIntoView(element: Locator) {
  137 |         await element.scrollIntoViewIfNeeded();
  138 |     }
  139 | 
  140 |     // ── Screenshot ────────────────────────────────────────────────────────────
  141 | 
  142 |     protected async takeScreenshot(name: string) {
  143 |         await this.page.screenshot({ path: `screenshots/${name}.png` });
  144 |     }
  145 | }
```