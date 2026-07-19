# Appium Test Keys â QC Reference

The app is automated with Appium via the **Flutter Integration driver** (`appium_flutter_server`), which locates elements by Flutter `ValueKey` (`byValueKey`). The Appium debug build is **forced to English**, so every key below is English and stable across locales.

## How to predict a key

`key = <prefix>_<slug(english_label)>`

`slug` = the on-screen English label, lowercased, every run of non-alphanumeric characters replaced by a single `_`, trimmed. `"Submit Request"` â `submit_request`, `"Forgot Password?"` â `forgot_password`.

| prefix | element |
|---|---|
| `btn_` | button / tappable action |
| `field_` | text input |
| `dropdown_` | select / dropdown / picker trigger |
| `radio_` | radio option |
| `checkbox_` | checkbox / toggle |
| `tab_` | tab-bar item |
| `item_` | repeated list row/card (see dynamic patterns) |

Most keys follow the rule directly, e.g. `btn_login`, `btn_submit`, `btn_approve`, `btn_reject`, `field_email`, `field_username`, `field_password`, `field_notes`, `btn_apply`, `radio_check_in`.

## Dynamic patterns (predict the pattern, read the id at runtime)

| pattern | where |
|---|---|
| `item_request_<id>` | a request row/card in a list |
| `item_employee_<id>` | employee picker row |
| `item_attachment_<id \| index>` | attachment row |
| `item_address_<index>` | address autocomplete suggestion |
| `field_ext_<fieldKey>` | dynamic (server-driven) extension text field |
| `radio_ext_<fieldKey>_<optionValue>` | extension radio option |
| `btn_ext_<fieldKey>_date` | extension date trigger |
| `btn_ext_<fieldKey>_increment` / `_decrement` | extension stepper |
| `btn_ext_<fieldKey>_time` | extension time trigger |

`<fieldKey>` / `<id>` come from the API response for that request type â not guessable from the label.

## Icon-only / non-label keys (lookup)

These have no readable English label, so they use an action verb:

| key | action |
|---|---|
| `btn_back` | back arrow |
| `btn_close` | close (X) |
| `btn_sort` | sort trigger |
| `btn_toggle_password_visibility` | show/hide password (login) |
| `btn_toggle_new_password_visibility` / `btn_toggle_confirm_password_visibility` | show/hide password (create-password) |
| `checkbox_remember_me` | remember-me toggle |
| `field_otp` | OTP / verification code input |
| `btn_resend_code` | resend OTP |
| `btn_via_email` / `btn_via_sms` | verification method choice |
| `btn_create_request` | create-request FAB |
| `btn_open_location` / `btn_open_map` | open location/map |
| `btn_open_employee` | open employee info sheet |
| `btn_click_to_upload` | attachment upload trigger |
| `btn_remove_attachment` / `btn_retry_upload` | attachment row actions |
| `btn_camera` / `btn_gallery` / `btn_file_manager` | attachment source options |
| `btn_select_date` / `btn_select_date_range` | date picker triggers |
| `btn_select_location` / `btn_current_location` | mission location |
| `btn_start_time` / `btn_end_time` | mission time pickers |
| `btn_plan_details` | medical plan details |
| `dropdown_employee` | employee select trigger |
| `dropdown_request_date` / `dropdown_submission_date` | manager filter date pickers |
| `btn_filter` | filter button |

## Coverage

Keyed flows: **login / forgot-password**, **my-requests** (list + preview), **managerial approvals**, and **request creation for all request types** (leave, mission, medical, excuse, attendance correction, missing punch, document, WFH, and their extension fields). Interactive widgets outside these flows will be keyed as those screens are automated â every new widget ships with a key per `.claude/rules/appium-test-keys.md`.
