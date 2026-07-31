import { Locator, Page } from "@playwright/test";

function byFcn(page: Page, name: string): Locator {
    return page.locator(`input[formcontrolname="${name}"], textarea[formcontrolname="${name}"], [formcontrolname="${name}"] input`).first();
}

export class EmployeeFormLocators {

    readonly employeeManagementTab: Locator;
    readonly employeeFormHeader: Locator;
    readonly addEmployeeBtn: Locator
    readonly createEmployeeHeader: Locator;

    // ── Personal Information (verified working) ─────────────────────────────
    readonly legalFullNameInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly nationalIdInput: Locator;
    readonly nationalIdExpiryDatepicker: Locator;
    readonly workPermitNumberInput: Locator;
    readonly workPermitExpiryDatepicker: Locator;
    readonly birthdayDatepicker: Locator;

    // ── Contact Information (verified working) ───────────────────────────────
    readonly personalEmailInput: Locator;
    readonly personalPhoneInput: Locator;
    readonly workEmailInput: Locator;
    readonly workPhoneInput: Locator;
    readonly addressInput: Locator;
    readonly emergencyContactNameInput: Locator;
    readonly emergencyContactPhoneInput: Locator;

    // ── Wizard navigation ────────────────────────────────────────────────────
    readonly nextButton: Locator;
    readonly backButton: Locator;
    readonly discardCancelButton: Locator;
    readonly createEmployeeButton: Locator;

    constructor(page: Page) {
        this.employeeManagementTab = page.getByText('Employee Management', { exact: true });
        this.employeeFormHeader = page.getByRole('heading', { name: 'Employees' });
        this.addEmployeeBtn = page.getByRole('button', { name: /add employee/i });
        this.createEmployeeHeader = page.getByRole('heading', { name: 'Create Employee' });

        this.legalFullNameInput = byFcn(page, 'full_name');
        this.firstNameInput = byFcn(page, 'first_name');
        this.lastNameInput = byFcn(page, 'last_name');
        this.nationalIdInput = byFcn(page, 'national_id');
        this.nationalIdExpiryDatepicker = byFcn(page, 'national_id_expiry');
        this.workPermitNumberInput = byFcn(page, 'work_permit');
        this.workPermitExpiryDatepicker = byFcn(page, 'work_permit_expiry');
        this.birthdayDatepicker = byFcn(page, 'birthday');

        this.personalEmailInput = byFcn(page, 'email_private');
        this.personalPhoneInput = byFcn(page, 'phone_private');
        this.workEmailInput = byFcn(page, 'email');
        this.workPhoneInput = byFcn(page, 'phone');
        this.addressInput = byFcn(page, 'address');
        this.emergencyContactNameInput = byFcn(page, 'emergency_contact');
        this.emergencyContactPhoneInput = byFcn(page, 'emergency_phone');

        this.nextButton = page.getByRole('button', { name: 'Next', exact: true });
        this.backButton = page.getByRole('button', { name: 'Back', exact: true });
        this.discardCancelButton = page.getByRole('button', { name: 'Discard & Cancel', exact: true });
        this.createEmployeeButton = page.getByRole('button', { name: 'Create Employee', exact: true });

        /**
         * Employment Details, Financials & Payroll, System Access and Assets & Documents
         * (steps 3-6) are not scaffolded yet. Step 3's "Parent Manager" dropdown returns
         * "No results found" for every Department/Position combination available in this
         * QA environment's test data, blocking automation of the rest of the wizard until
         * a Department/Position with a real assigned manager is identified.
         */
    }
}
