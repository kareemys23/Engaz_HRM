export const loginData = {
    validUser: {
        email:         'test1@gmail.com',
        password:      'Aa@123456',
        redirectURL:   'https://qa.engazhr.co/en/dashboard',
    },
    invalidUser: {
        email:         'wrong@example.com',
        password:      'Aa@00000k0wrong',
        expectedError: 'Invalid email or password',
    },
    emptyUser: {
        email:         '',
        password:      '',
        expectedError: 'This field is required',
    },
};
