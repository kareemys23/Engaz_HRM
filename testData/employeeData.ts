import { faker } from '@faker-js/faker';

const ARABIC_FIRST_NAMES = ['أحمد', 'محمد', 'مصطفى', 'إبراهيم', 'يوسف', 'عمر'];
const ARABIC_LAST_NAMES = ['حسن', 'محمود', 'عبدالله', 'الشريف', 'سليمان', 'عزت'];

export interface DateParts {
    day: number;
    monthShort: string;
    year: number;
}

export interface EmployeeData {
    legalFullNameArabic: string;
    firstName: string;
    lastName: string;
    nationality: string;
    idType: string;
    nationalId: string;
    nationalIdExpiry: DateParts;
    dateOfBirth: DateParts;
    gender: 'Male' | 'Female';
    maritalStatus: string;
    religion: string;
    militaryStatus: string;
    personalEmail: string;
    personalPhone: string;
    workEmail: string;
    workPhone: string;
    address: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
}

export function generateEmployeeData(): EmployeeData {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
        legalFullNameArabic: `${faker.helpers.arrayElement(ARABIC_FIRST_NAMES)} ${faker.helpers.arrayElement(ARABIC_LAST_NAMES)} ${faker.helpers.arrayElement(ARABIC_LAST_NAMES)}`,
        firstName,
        lastName,
        nationality: 'Egyptian',
        idType: 'National ID',
        nationalId: faker.string.numeric(14),
        nationalIdExpiry: { day: 15, monthShort: 'Jun', year: 2030 },
        dateOfBirth: { day: 1, monthShort: 'Jan', year: 1995 },
        gender: 'Male',
        maritalStatus: 'Single',
        religion: 'Muslim',
        militaryStatus: 'Exempted',
        personalEmail: faker.internet.email({ firstName, lastName }),
        personalPhone: faker.string.numeric(11),
        workEmail: faker.internet.email({ firstName, lastName, provider: 'engazhr.co' }),
        workPhone: faker.string.numeric(11),
        address: faker.location.streetAddress(),
        emergencyContactName: faker.person.fullName(),
        emergencyContactPhone: faker.string.numeric(11),
    };
}

export const employeeData = generateEmployeeData();
