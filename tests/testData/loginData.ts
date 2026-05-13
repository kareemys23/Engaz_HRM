export const loginData = {
    validUser: {
        email:         'test1@gmail.com',
        password:      'Aa@123456',
        redirectURL:   'https://qa.engazhr.co/en/login',
    },
    invalidUser: {
        email:         'wrong@example.com',
        password:      'wrongpass',
        expectedError: 'Invalid email or password',
    },
    emptyUser: {
        email:         '',
        password:      '',
        expectedError: 'This field is required',
    },
};
