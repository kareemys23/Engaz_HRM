import { Locator, Page } from "@playwright/test";

export class ManagerRequestsLocators {

    readonly requestsTab: Locator;
    readonly managerRequestsTab: Locator;
    readonly pageHeader: Locator;
    readonly createRequestButton: Locator;
    readonly createRequestPopupHeader: Locator;
    readonly requestTypeList: Locator;
    readonly maternityRequestTypeOption: Locator;
    readonly sickLeaveRequestTypeOption: Locator;
    readonly employeeNamefield: Locator;
    readonly employeeNameSelector: Locator;
    readonly requestDate: Locator;
    readonly monthSelection: Locator;
    readonly firstDaySelection: Locator;
    readonly secondDaySelection: Locator;
    readonly requestDeliveryDate: Locator;
    readonly deliveryDatePicker: Locator;
    readonly requestNotes: Locator;
    readonly requestAttachmentsButton: Locator;
    readonly requestAttachmentsSelector: Locator;
    readonly attachementUploadedLabel: Locator;
    readonly continueRequestButton: Locator;
    readonly submitRequestButton: Locator;
    readonly successMessage: Locator;
    readonly previewRequestButton: Locator;
    readonly attchementsubmittedassertion: Locator;
    readonly closePreviewFormButton: Locator;
    readonly requestSickAttachmentsAlert: Locator;
    readonly rejectRequestButton: Locator;
    readonly rejectionReasonField: Locator;
    readonly rejectionReasonOption: Locator
    readonly rejectionReasonNotesField: Locator;
    readonly rejectionReasonconfirmButton: Locator
    readonly rejectSuccessLabel: Locator;
    readonly confirmCancelButton: Locator;
    readonly cancelSuccessMessage: Locator;

    constructor(page: Page) {
        this.requestsTab = page.getByText('Requests', { exact: true });
        this.managerRequestsTab = page.getByText('Managerial Request', { exact: true });
        this.pageHeader = page.getByRole('heading', { name: 'Manager requests' });
        this.createRequestButton = page.getByRole('button', { name: 'On behalf request' }).first();
        this.createRequestPopupHeader = page.getByRole('heading', { name: 'Create Request' });
        this.requestTypeList = page.getByRole('combobox', { name: 'Select request type' });
        this.maternityRequestTypeOption = page.getByRole('option', { name: /Maternity/i });
        this.sickLeaveRequestTypeOption = page.getByRole('option', { name: /Sick Leave/i });
        this.employeeNamefield = page.getByRole('combobox', { name: 'Select employee' });
        this.employeeNameSelector = page.getByRole('option', { name: 'Donot change configuration' });
        this.requestDate = page.locator('.date-picker-icon > svg > path').first();
        this.monthSelection = page.locator('.calendar-header > button:nth-child(3)');
        this.firstDaySelection = page.getByText('21', { exact: true });
        this.secondDaySelection = page.getByText('24', { exact: true });
        this.requestDeliveryDate = page.locator('.date-picker-icon > svg').nth(1);
        this.deliveryDatePicker = page.locator('div').filter({ hasText: /^28$/ }).nth(1);
        this.requestNotes = page.locator('#reason');
        this.requestAttachmentsButton = page.locator('.file-upload-icon');
        this.requestAttachmentsSelector = page.locator('input[type="file"]');
        this.attachementUploadedLabel = page.locator('app-file-upload-input');
        this.continueRequestButton = page.getByRole('button', { name: 'Continue' });
        this.submitRequestButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.getByText('Sep 21 - Sep 24,').first();
        this.previewRequestButton = page.getByRole('button', { name: 'View' }).first();
        this.attchementsubmittedassertion = page.locator('app-file-display');
        this.closePreviewFormButton = page.getByRole('button', { name: 'Close' });
        this.requestSickAttachmentsAlert = page.locator('section');
        this.rejectRequestButton = page.getByRole('button', { name: 'Reject' }).first();
        this.rejectionReasonField = page.getByRole('combobox', { name: 'Select a rejection reason' });
        this.rejectionReasonOption = page.getByRole('option', { name: 'hanan200' });
        this.rejectionReasonNotesField = page.getByRole('textbox', { name: 'Enter reason for rejection...' });
        this.rejectionReasonconfirmButton = page.getByRole('button', { name: 'Confirm Rejection' });
        this.rejectSuccessLabel = page.getByText('Rejected').first();
        this.confirmCancelButton = page.getByRole('button', { name: 'Yes, Cancel Request' });
        this.cancelSuccessMessage = page.getByText('Request canceled successfully.');
    }
}
