import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

describe('Kopa We (e2e)', () => {
  let app: INestApplication;
  let memberId: string;
  let jwtToken: string;
  let productId: string;
  let escrowId: string;
  const uniqueId = Date.now();
  process.env.JWT_SECRET = 'test-secret';

  jest.setTimeout(30000);

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Auth & Identity Module', () => {
    it('/api/auth/register (POST)', () => {
      return request(app.getHttpServer())
        .post('/api/auth/register')
        .send({
          callUpNumber: `NYSC/TEST/2024/${uniqueId}`,
          stateCode: `LA/24A/${uniqueId}`,
        })
        .expect(201)
        .then((res) => {
          memberId = res.body.user._id;
          jwtToken = res.body.accessToken;
          expect(res.body.user.isVerified).toBe(true);
          expect(jwtToken).toBeDefined();
        });
    });

    it('/api/identity/profile/:id (GET)', () => {
      return request(app.getHttpServer())
        .get(`/api/identity/profile/${memberId}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.callUpNumber).toBe(`NYSC/TEST/2024/${uniqueId}`);
        });
    });
  });

  describe('Finance Module', () => {
    it('/api/finance/wallet (GET)', () => {
      return request(app.getHttpServer())
        .get(`/api/finance/wallet`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.balance).toBe(0);
        });
    });

    it('/api/finance/loan/request (POST)', () => {
      return request(app.getHttpServer())
        .post(`/api/finance/loan/request`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({
          amount: 10000,
          purpose: 'Transport to PPA',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.status).toBe('APPROVED');
          expect(res.body.amount).toBe(10000);
        });
    });

    it('Wallet balance should be 10000 after loan', () => {
      return request(app.getHttpServer())
        .get(`/api/finance/wallet`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.balance).toBe(10000);
        });
    });
  });

  describe('Marketplace & Safetrade', () => {
    it('/api/marketplace/list (POST)', () => {
      return request(app.getHttpServer())
        .post(`/api/marketplace/list`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({
          title: 'Test Bed Frame',
          description: 'Almost new',
          price: 5000,
          condition: 'USED',
        })
        .expect(201)
        .then((res) => {
          productId = res.body._id;
        });
    });

    it('/api/safetrade/initiate (POST)', () => {
      return request(app.getHttpServer())
        .post(`/api/safetrade/initiate`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({
          productId: productId,
          sellerId: memberId, // Testing with self for simplicity
          amount: 5000,
        })
        .expect(201)
        .then((res) => {
          escrowId = res.body._id;
          expect(res.body.status).toBe('HELD');
        });
    });

    it('/api/safetrade/release/:id (PATCH)', () => {
      return request(app.getHttpServer())
        .patch(`/api/safetrade/release/${escrowId}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('RELEASED');
        });
    });
  });

  describe('Accommodation', () => {
    it('/api/accommodation/list (POST)', () => {
      return request(app.getHttpServer())
        .post(`/api/accommodation/list`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .send({
          title: 'Cozy Room near Camp',
          location: 'Iyana Ipaja',
          price: 20000,
          roommateWanted: true,
        })
        .expect(201);
    });
  });
});
