import { Page, expect } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { MyRequestsLocators } from "../Locators/myRequestsLocators";

export class MyRequestsPage extends Actions {
    private readonly locators: MyRequestsLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new MyRequestsLocators(page);
    }

    async navigateToMyRequests() {
        await this.click(this.locators.requestsTab);
        await this.waitForElement(this.locators.myRequestsTab);
        await this.click(this.locators.myRequestsTab);
        await this.page.waitForLoadState('networkidle');
    }

    async createNewRequestFunction() {
        await this.navigateToMyRequests();
        await this.waitForElement(this.locators.createRequestButton);
        await this.click(this.locators.createRequestButton);
        await this.waitForElement(this.locators.requestTypeList);
        await this.click(this.locators.requestTypeList);
    }
    async createNewMaternityRequest(notes: string) {
        await this.createNewRequestFunction();
        await this.click(this.locators.maternityRequestTypeOption);
        await this.click(this.locators.requestDate);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.waitForElement(this.locators.firstDaySelection);
        await this.click(this.locators.firstDaySelection);
        await this.waitForElement(this.locators.secondDaySelection);
        await this.click(this.locators.secondDaySelection);
        await this.click(this.locators.requestDeliveryDate);
        await this.waitForElement(this.locators.deliveryDatePicker);
        await this.click(this.locators.deliveryDatePicker);
        await this.enterText(this.locators.requestNotes, notes);
        await this.click(this.locators.continueRequestButton);
    }

    async fillNewSickLeaveRequest() {
        await this.createNewRequestFunction();
        await this.click(this.locators.sickLeaveRequestTypeOption);
        await this.click(this.locators.requestDate);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.waitForElement(this.locators.firstDaySelection);
        await this.click(this.locators.firstDaySelection);
        await this.waitForElement(this.locators.secondDaySelection);
        await this.click(this.locators.secondDaySelection);
    }

    async createNewSickLeaveRequestWithoutAttachments(notes: string) {

        await this.fillNewSickLeaveRequest();
        await this.click(this.locators.continueRequestButton);
    }

    async createNewSickLeaveRequestWithAttachments(notes: string, attachmentFilePath: string) {

        await this.fillNewSickLeaveRequest();
        await this.uploadFile(this.locators.requestAttachmentsSelector, attachmentFilePath);
        await this.scrollIntoView(this.locators.attachementUploadedLabel);
        await this.assertStep('Attachement is uploaded', () => expect(this.locators.attachementUploadedLabel).toContainText('100% uploaded', { timeout: 10000 }));
        await this.click(this.locators.continueRequestButton);
    }

    async submitRequest() {
        await this.click(this.locators.submitRequestButton);
    }

    async openRequestPreview() {
        await this.waitForElement(this.locators.previewRequestButton);
        await this.click(this.locators.previewRequestButton);
    }

    async editMaternityRequest(notes: string, attachmentFilePath: string) {
        await this.openRequestPreview();
        await this.click(this.locators.editRequestButton);
        await this.assertStep('Edit request popup is visible', () => expect(this.locators.editRequestPopupHeader).toBeVisible({ timeout: 10000 }));
        await this.assertStep('Maternity request type option is disabled', () => expect(this.locators.maternityRequestTypeField).toBeDisabled());
        await this.page.waitForTimeout(500);
        await this.click(this.locators.requestDate);
        await this.waitForElement(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.waitForElement(this.locators.firstDaySelection);
        await this.click(this.locators.firstDaySelection);
        await this.waitForElement(this.locators.secondDaySelection);
        await this.click(this.locators.secondDaySelection);
        await this.click(this.locators.requestDeliveryDate);
        await this.waitForElement(this.locators.deliveryDatePicker);
        await this.click(this.locators.editdeliveryDatePicker);
        await this.enterText(this.locators.requestNotes, notes);
        await this.uploadFile(this.locators.requestAttachmentsSelector, attachmentFilePath);
        await this.scrollIntoView(this.locators.attachementUploadedLabel);
        await this.assertStep('Attachement is uploaded', () => expect(this.locators.attachementUploadedLabel).toContainText('100% uploaded', { timeout: 10000 }));
        await this.click(this.locators.continueRequestButton);
        await this.assertStep('Fields are edited', () => expect(this.locators.requestDateEditLabel).toBeVisible({ timeout: 10000 }));
    }

    async editSickLeaveRequestWithAttachments(notes: string, attachmentFilePath: string) {
        await this.openRequestPreview();
        await this.click(this.locators.editRequestButton);
        await this.assertStep('Edit request popup is visible', () => expect(this.locators.editRequestPopupHeader).toBeVisible({ timeout: 10000 }));
        await this.assertStep('Sick leave request type option is disabled', () => expect(this.locators.sickLeaveRequestTypeField).toBeDisabled());
        await this.page.waitForTimeout(500);
        await this.click(this.locators.editRequestDatePicker);
        await this.waitForElement(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.waitForElement(this.locators.firstDaySelection);
        await this.click(this.locators.firstDaySelection);
        await this.waitForElement(this.locators.secondDaySelection);
        await this.click(this.locators.secondDaySelection);
        await this.enterText(this.locators.requestNotes, notes);
        await this.uploadFile(this.locators.requestAttachmentsSelector, attachmentFilePath);
        await this.scrollIntoView(this.locators.attachementUploadedLabel);
        await this.assertStep('Attachement is uploaded', () => expect(this.locators.attachementUploadedLabel).toContainText('100% uploaded', { timeout: 10000 }));
        await this.click(this.locators.continueRequestButton);
        await this.assertStep('Fields are edited', () => expect(this.locators.requestDateEditLabel).toBeVisible({ timeout: 10000 }));

    }

    async confirmCancelRequest() {
        //Cancel the request to make new request creation possible in next test run
        await this.click(this.locators.cancelRequestButton);
        await this.click(this.locators.confirmCancelButton);
        await this.waitForElement(this.locators.cancelSuccessMessage);
    }

    async assertAttachmentDeadlineAlert(): Promise<boolean> {
        try {
            await this.assertStep('Attachment deadline alert is visible', () =>
                expect(this.locators.requestSickAttachmentsAlert).toContainText('Attachment deadline', { timeout: 10000 })
            );
            return true;
        } catch {
            return false;
        }
    }

    async assertAttachementUploaded(): Promise<boolean> {
        try {
            await this.assertStep('Attachement is uploaded', () => expect(this.locators.attchementsubmittedassertion).toContainText('Medical document submitted', { timeout: 10000 }));
            return true;
        } catch {
            return false;
        }
    }
}