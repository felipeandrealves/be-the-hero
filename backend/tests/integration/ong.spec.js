const request = require('supertest');
const app = require('../../src/App');
const connection = require('../../src/database/index');

describe('ONG', ()=> {

  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('shoud be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: "AANO",
      email: "contato@aano.org.com.br",
      whatsapp: "19993826053",
      city: "Nova odessa",
      uf: "SP"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
})