const bcrypt = require('bcrypt');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt use password', async () => {
        const user = await User.create({
            name: 'Rafael',
            email: 'rafa.melo@gmail.com',
            password: '123456789'
        });

        const compareHash = await bcrypt.compare('123456789', user.password_hash);

        expect(compareHash).toBe(true);
    });
});