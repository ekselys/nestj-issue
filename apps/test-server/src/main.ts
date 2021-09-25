import { SalePointSnippet } from '@github-issue/dtos';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
    /**
     * Issue reproduction
     */
    console.log('--------------- ISSUE REPRODUCTION ---------------');  // prints undefined
    const salePointSnippet = new SalePointSnippet('id1', 'sale point 1');
    console.log(salePointSnippet);  // prints undefined
    console.log('Sale point snippet id: ', salePointSnippet.id);  // prints undefined
    console.log('Sale point snippet name: ', salePointSnippet.name);  // prints undefined
    console.log('--------------- ISSUE REPRODUCTION END ---------------');  // prints undefined

    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3333;
    await app.listen(port, () => {
        Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
}

bootstrap();
