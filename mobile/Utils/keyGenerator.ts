// Generates Appium '-flutter key' values per the documented convention in
// mobile/docs/appium-keys.md: `key = <prefix>_<slug(english_label)>`.

export function slug(label: string): string {
    return label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
}

export const btnKey = (label: string) => `btn_${slug(label)}`;
export const fieldKey = (label: string) => `field_${slug(label)}`;
export const dropdownKey = (label: string) => `dropdown_${slug(label)}`;
export const radioKey = (label: string) => `radio_${slug(label)}`;
export const checkboxKey = (label: string) => `checkbox_${slug(label)}`;
export const tabKey = (label: string) => `tab_${slug(label)}`;

// ── Dynamic patterns ─────────────────────────────────────────────────────
// <fieldKey> / <id> come from the API response for that request type —
// not guessable from the label.

export const itemRequestKey = (id: string) => `item_request_${id}`;
export const itemEmployeeKey = (id: string) => `item_employee_${id}`;
export const itemAttachmentKey = (idOrIndex: string | number) => `item_attachment_${idOrIndex}`;
export const itemAddressKey = (index: number) => `item_address_${index}`;
export const fieldExtKey = (fieldKey: string) => `field_ext_${fieldKey}`;
export const radioExtKey = (fieldKey: string, optionValue: string) => `radio_ext_${fieldKey}_${optionValue}`;
export const btnExtDateKey = (fieldKey: string) => `btn_ext_${fieldKey}_date`;
export const btnExtIncrementKey = (fieldKey: string) => `btn_ext_${fieldKey}_increment`;
export const btnExtDecrementKey = (fieldKey: string) => `btn_ext_${fieldKey}_decrement`;
export const btnExtTimeKey = (fieldKey: string) => `btn_ext_${fieldKey}_time`;

// ── Icon-only / non-label keys ───────────────────────────────────────────
// These have no readable English label, so they're fixed strings rather
// than generated from a label.

export const iconKeys = {
    back: 'btn_back',
    close: 'btn_close',
    sort: 'btn_sort',
    togglePasswordVisibility: 'btn_toggle_password_visibility',
    toggleNewPasswordVisibility: 'btn_toggle_new_password_visibility',
    toggleConfirmPasswordVisibility: 'btn_toggle_confirm_password_visibility',
    rememberMe: 'checkbox_remember_me',
    otp: 'field_otp',
    resendCode: 'btn_resend_code',
    viaEmail: 'btn_via_email',
    viaSms: 'btn_via_sms',
    createRequest: 'btn_create_request',
    openLocation: 'btn_open_location',
    openMap: 'btn_open_map',
    openEmployee: 'btn_open_employee',
    clickToUpload: 'btn_click_to_upload',
    removeAttachment: 'btn_remove_attachment',
    retryUpload: 'btn_retry_upload',
    camera: 'btn_camera',
    gallery: 'btn_gallery',
    fileManager: 'btn_file_manager',
    selectDate: 'btn_select_date',
    selectDateRange: 'btn_select_date_range',
    selectLocation: 'btn_select_location',
    currentLocation: 'btn_current_location',
    startTime: 'btn_start_time',
    endTime: 'btn_end_time',
    planDetails: 'btn_plan_details',
    employeeDropdown: 'dropdown_employee',
    requestDateDropdown: 'dropdown_request_date',
    submissionDateDropdown: 'dropdown_submission_date',
    filter: 'btn_filter',
};
