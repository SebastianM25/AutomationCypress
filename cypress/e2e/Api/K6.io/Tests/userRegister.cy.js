import K6ClientApiService from "../Client/K6ClientApiService";

describe('User Registration API Test', () => {
    it('should register a new user successfully', () => {
        const uniqueId = Date.now();
        const newUser = {
            username: `testUser${uniqueId}`,
            first_name: `test${uniqueId}`,
            last_name: `test${uniqueId}`,
            email: `test${uniqueId}@email.com`,
            password: "test12345"
        };

        K6ClientApiService.registerUser(newUser).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.include({
                username: newUser.username,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email
            });
        });
    });
});
