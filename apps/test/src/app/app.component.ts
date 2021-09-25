import { Component } from '@angular/core';
import { SalePointSnippet } from '@github-issue/dtos';

@Component({
    selector: 'github-issue-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
})
export class AppComponent {
    title = 'test';

    constructor() {
        console.log(new SalePointSnippet('1', '2'));
    }
}
