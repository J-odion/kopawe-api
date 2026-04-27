import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityModule } from './modules/identity/identity.module';
import { AuthModule } from './modules/auth/auth.module';
import { FinanceModule } from './modules/finance/finance.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { EscrowModule } from './modules/escrow/escrow.module';
import { AccommodationModule } from './modules/accommodation/accommodation.module';
import { AdminModule } from './modules/admin/admin.module';
import { CareerModule } from './modules/career/career.module';
import { InsuranceModule } from './modules/insurance/insurance.module';
import { CreditModule } from './modules/credit/credit.module';
import { ChatModule } from './modules/chat/chat.module';
import { WelfareModule } from './modules/welfare/welfare.module';
import { CommunityModule } from './modules/community/community.module';
import { UploadsModule } from './modules/uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    IdentityModule,
    AuthModule,
    FinanceModule,
    MarketplaceModule,
    EscrowModule,
    AccommodationModule,
    AdminModule,
    CareerModule,
    InsuranceModule,
    CreditModule,
    ChatModule,
    WelfareModule,
    CommunityModule,
    UploadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
