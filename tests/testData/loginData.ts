export const loginData = {
    validUser: {
        email:         'ww221@co.com',
        password:      'Test@1234',
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
