function getEnv(key: string): string {
    const value = process.env[key];
    if (!value) throw new Error(`Missing required environment variable: ${key}`);
    return value;
}

export const loginData = {
    validUser: {
        email:         getEnv('VALID_USER_EMAIL'),
        password:      getEnv('VALID_USER_PASSWORD'),
        redirectURL:   /dashboard/,
    },
    invalidUser: {
        email:         getEnv('INVALID_USER_EMAIL'),
        password:      getEnv('INVALID_USER_PASSWORD'),
        expectedError: 'Invalid email or password',
    },
    emptyUser: {
        email:         '',
        password:      '',
        expectedError: 'This field is required',
    },
};
