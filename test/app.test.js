const request = require('supertest');
const express = require('express');

const app = require('../app'); // if you export app from app.js

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World!');
  });
});

