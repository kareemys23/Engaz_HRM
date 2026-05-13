export const loginData = {
    validUser: {
        email:         'user@example.com',
        password:      'Password123',
        redirectURL:   /dashboard/,
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
