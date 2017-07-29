import {
    NgModule,
    ModuleWithProviders,
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Directive
} from '@angular/core';


/**
 * A basic content container component
 *
 */
@Component({
    moduleId: module.id,
    selector: 'fab-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabFooter {
}



@NgModule({
    imports: [],
    exports: [
        FabFooter,


    ],
    declarations: [
        FabFooter
    ],
})
export class FabFooterModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FabFooterModule,
            providers: []
        };
    }
}
