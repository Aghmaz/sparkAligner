import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmModuleOptions } from "./config/database.config"
import { UserModule } from './user/user.module';

console.log("=================",typeOrmModuleOptions)
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...typeOrmModuleOptions

      }),
      inject: [ConfigService],
    }),
    UserModule
    // MarksModule,
    // StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
