import { Locator, Page } from "@playwright/test";

export class MyRequestsLocators {
    readonly requestsTab: Locator;
    readonly myRequestsTab: Locator;
    readonly createRequestButton: Locator;
    readonly requestTypeList: Locator;
    readonly maternityRequestTypeOption: Locator;
    readonly maternityRequestTypeField: Locator;
    readonly sickLeaveRequestTypeOption: Locator;
    readonly sickLeaveRequestTypeField: Locator;
    readonly requestDate: Locator;
    readonly editRequestDatePicker: Locator;
    readonly monthSelection: Locator;
    readonly firstDaySelection: Locator;
    readonly secondDaySelection: Locator;
    readonly requestDeliveryDate: Locator;
    readonly deliveryDatePicker: Locator;
    readonly editdeliveryDatePicker: Locator;
    readonly requestNotes: Locator;
    readonly requestAttachments: Locator;
    readonly requestAttachmentsSelector: Locator;
    readonly attachementUploadedLabel: Locator;
    readonly continueRequestButton: Locator;
    readonly submitRequestButton: Locator;
    readonly successMessage: Locator;
    readonly previewRequestButton: Locator;
    readonly attchementsubmittedassertion: Locator;
    readonly requestSickAttachmentsAlert: Locator;
    readonly editRequestButton: Locator;
    readonly editRequestPopupHeader: Locator;
    readonly requestDateEditLabel: Locator;
    readonly ExpectedDeliveryDateEditLabel: Locator;
    readonly NotesEditLabel: Locator
    readonly attachementUploadedEditLabel: Locator;
    readonly cancelRequestButton: Locator;
    readonly confirmCancelButton: Locator;
    readonly cancelSuccessMessage: Locator;

    constructor(page: Page) {
        this.requestsTab = page.getByText('Requests', { exact: true });
        this.myRequestsTab = page.getByText('My Request', { exact: true });
        this.createRequestButton = page.getByRole('button', { name: 'Create New Request' }).first();
        this.requestTypeList = page.getByRole('combobox', { name: 'Select request type' });
        this.maternityRequestTypeOption = page.getByRole('option', { name: /Maternity/i });
        this.maternityRequestTypeField = page.getByRole('combobox', { name: /Maternity/i });
        this.sickLeaveRequestTypeOption = page.getByRole('option', { name: /Sick Leave/i });
        this.sickLeaveRequestTypeField = page.getByRole('combobox', { name: /Sick Leave/i });
        this.requestDate = page.locator('.date-picker-icon > svg > path').first();
        this.editRequestDatePicker = page.getByRole('dialog').locator('.date-picker-icon > svg').first();
        this.monthSelection = page.locator('.calendar-header > button:nth-child(3)');
        this.firstDaySelection = page.getByText('21', { exact: true });
        this.secondDaySelection = page.getByText('24', { exact: true });
        this.requestDeliveryDate = page.locator('.date-picker-icon > svg').nth(1);
        this.deliveryDatePicker = page.locator('div').filter({ hasText: /^28$/ }).nth(1);
        this.editdeliveryDatePicker = page.locator('div').filter({ hasText: /^29$/ }).nth(1);
        this.requestNotes = page.locator('#reason');
        this.requestAttachments = page.getByRole('img', { name: 'upload' });
        this.requestAttachmentsSelector = page.locator('input[type="file"]');
        this.attachementUploadedLabel = page.locator('app-file-upload-input');
        this.continueRequestButton = page.getByRole('button', { name: 'Continue' });
        this.submitRequestButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.getByText('Sep 21 - Sep 24,').first();
        this.previewRequestButton = page.getByRole('button', { name: 'View' }).first();
        this.attchementsubmittedassertion = page.locator('app-file-display');
        this.requestSickAttachmentsAlert = page.locator('section');
        this.editRequestButton = page.getByRole('button', { name: 'Edit' });
        this.editRequestPopupHeader = page.locator('app-request-dynamic-popup');
        this.requestDateEditLabel = page.getByText('Edited').nth(2);
        this.ExpectedDeliveryDateEditLabel = page.getByText('Edited').nth(3);
        this.NotesEditLabel = page.getByText('Edited').nth(4);
        this.attachementUploadedEditLabel = page.getByText('Edited').nth(5);
        this.cancelRequestButton = page.getByRole('button', { name: 'cancel Cancel Request' });
        this.confirmCancelButton = page.getByRole('button', { name: 'Yes, Cancel Request' });
        this.cancelSuccessMessage = page.getByText('Request canceled successfully.');
    }
}