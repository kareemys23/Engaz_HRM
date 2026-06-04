export const loginData = {
    validUser: {
        email:         process.env.VALID_USER_EMAIL!,
        password:      process.env.VALID_USER_PASSWORD!,
        redirectURL:   /dashboard/,
    },
    invalidUser: {
        email:         process.env.INVALID_USER_EMAIL!,
        password:      process.env.INVALID_USER_PASSWORD!,
        expectedError: 'Invalid email or password',
    },
    emptyUser: {
        email:         '',
        password:      '',
        expectedError: 'This field is required',
    },
};
