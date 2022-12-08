import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { AppConfigModule } from '@common/app-config/app-config.module';


@Module({
  imports: [AppConfigModule, IndexModule],
  controllers: [],
  providers: []
})
export class ApiModule {

}
