import { expect } from 'chai';
import request from 'supertest';
import app from '../index'; // Assuming your Express app is exported from app.ts

describe('Health Check API', () => {
  it('should return status 200 and a message', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message').includes('Health check ok');
  });
});

describe('Counts API', () => {
  it('should return total of two numbers', async () => {
    const res = await request(app)
      .post('/counts')
      .send({
        num1: 5,
        num2: 10
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('result').to.equal(15);
  });
  it('should return all counts', async () => {
    const res = await request(app).get('/counts');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('counts').to.be.an('array');
    expect(res.body.counts[0]).to.have.property('count', 15);
  });
});