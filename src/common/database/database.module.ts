import { Global, Logger, Module } from '@nestjs/common';
import dataSource from 'ormconfig';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: DataSource,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        let dbName = configService.get('DB_NAME');
        let db = await dataSource.initialize();
        // const queryRunner = await db.createQueryRunner();
        // try {
        //   console.log('called');
        //   if (dbName) {
        //     let result = await queryRunner.manager.query(
        //       `CREATE DATABASE IF NOT EXISTS ${dbName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
        //     );
        //     Logger.log(`${dbName} db created`);
        //   }
        //
        // } catch (e) {
        //   console.log('DB Cannot Created ', e);
        // }

        return dataSource;
      }
    }

  ],
  exports: [DataSource]
})
export class DatabaseModule {
}
