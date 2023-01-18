const supertest = require('supertest');
// const models = require('../../app/models');
const app = require('../../app');

const request = supertest(app);

const userAttributes = ({ email = 'miguelangel2@wolox.com', password = '12345678' }) => ({
  name: 'Miguelangel',
  lastName: 'Rendon Cuartas',
  password,
  email
});

describe('usersController.signUp', () => {
  // it('succeeds and creates a user', () => {
  //   const user = userAttributes({});
  //   return request
  //     .post('/users')
  //     .send({ ...user })
  //     .expect(200)
  //     .then(() =>
  //       models.users.findOne({ where: { email: user.email } }).then(createdUser => {
  //         expect(createdUser).toHaveProperty('email', user.email);
  //         expect(createdUser).toHaveProperty('firstName', user.first_name);
  //         expect(createdUser).toHaveProperty('lastName', user.last_name);
  //       })
  //     );
  // });

  it('fails due to invalid password', () => {
    const user = userAttributes({ password: '1234567' });
    return request
      .post('/users')
      .send({ ...user })
      .expect(409);
  });

  it('fails due to invalid email', () => {
    const user = userAttributes({ email: 'test@wolo.com' });
    return request
      .post('/users')
      .send({ ...user })
      .expect(409);
  });

  it('fails due to already existing user', () => {
    const user = userAttributes({ email: 'test@wolox.com' });
    return request
      .post('/users')
      .send({ ...user })
      .expect(409)
      .then(response => {
        expect(response.body.internal_code).toBe('data_exist_error');
      });
  });
});
