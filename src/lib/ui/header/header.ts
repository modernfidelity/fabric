import {
    NgModule,
    ModuleWithProviders,
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    Output,
    OnInit
} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'fab-header',
    templateUrl: './header.html',
    styleUrls: ['header.scss'],
    encapsulation: ViewEncapsulation.None,
    
})
export class FabHeader implements OnInit {

    // PROPERTIES TO SHOW/HIDE NESTED COMPONENTS IN THE HEADER
    _isNavOpen = false;
    
    @Input() displaySearch: boolean = true;
    @Input() displayAccountToolbar: boolean = true;

    constructor() {

    }

    toggleNav() {
        this._isNavOpen = (this._isNavOpen) ? false : true;
    };


    ngOnInit() {
    }

    ngOnDestroy() {
    }

}


@NgModule({
    imports: [],
    exports: [
        FabHeader
    ],
    declarations: [
        FabHeader
    ],
    entryComponents: []
})
export class FabHeaderModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FabHeaderModule,
            providers: []
        };
    }
}
