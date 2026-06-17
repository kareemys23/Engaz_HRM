import { Page, expect } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { ManagerRequestsLocators } from "../Locators/managerRequestsLocators";

export class ManagerRequestsPage extends Actions {
    private readonly locators: ManagerRequestsLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new ManagerRequestsLocators(page);
    }

    async navigateToManagerRequests() {
        await this.click(this.locators.requestsTab);
        await this.waitForElement(this.locators.managerRequestsTab);
        await this.click(this.locators.managerRequestsTab);
        await this.assertStep('Page header is visible', () => expect(this.locators.pageHeader).toBeVisible());
        await this.page.waitForLoadState('networkidle');
    }

    async createNewRequestFunction() {
        await this.waitForElement(this.locators.createRequestButton);
        await this.click(this.locators.createRequestButton);
        await this.assertStep('Create request popup header is visible', () => expect(this.locators.createRequestPopupHeader).toBeVisible());
        await this.waitForElement(this.locators.requestTypeList);
        await this.click(this.locators.requestTypeList);
    }
    async createNewMaternityRequest(notes: string) {
        await this.click(this.locators.maternityRequestTypeOption);
        await this.click(this.locators.employeeNamefield);
        await this.click(this.locators.employeeNameSelector);
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

    async createNewSickLeaveRequest(notes: string) {
        await this.click(this.locators.sickLeaveRequestTypeOption);
        await this.click(this.locators.employeeNamefield);
        await this.click(this.locators.employeeNameSelector);
        await this.click(this.locators.requestDate);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.waitForElement(this.locators.firstDaySelection);
        await this.click(this.locators.firstDaySelection);
        await this.waitForElement(this.locators.secondDaySelection);
        await this.click(this.locators.secondDaySelection);
        await this.click(this.locators.continueRequestButton);
    }

    async submitRequest() {
        await this.click(this.locators.submitRequestButton);
    }

    async previewRequest() {
        await this.waitForElement(this.locators.previewRequestButton);
        await this.click(this.locators.previewRequestButton);
        await this.waitForElement(this.locators.closePreviewFormButton);
        await this.click(this.locators.closePreviewFormButton);
    }

    async rejectSickLeaveRequest() {
        await this.waitForElement(this.locators.rejectRequestButton);
        await this.click(this.locators.rejectRequestButton);

    }

    async rejectRequest() {
        //Reject the request to make new request creation possible in next test run
        await this.waitForElement(this.locators.rejectRequestButton);
        await this.click(this.locators.rejectRequestButton);
        await this.click(this.locators.rejectionReasonField);
        await this.click(this.locators.rejectionReasonOption);
        await this.enterText(this.locators.rejectionReasonNotesField, "Test rejection");
        await this.click(this.locators.rejectionReasonconfirmButton);
        await this.waitForElement(this.locators.rejectSuccessLabel);
        await this.assertStep('Reject success label is visible', () => expect(this.locators.rejectSuccessLabel).toBeVisible());
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
}