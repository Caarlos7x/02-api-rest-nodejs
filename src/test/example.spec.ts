import { expect, test, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '../app';

beforeAll(async () => {
  await app.ready();
});

afterAll(async () => {
  await app.close();
});

test('user can create a new tranction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New transaction',
    amount: 100,
    type: 'credit',
  });

  expect(response.statusCode).toEqual(201);
});