import {NgModule, ModuleWithProviders} from '@angular/core';

// UX/UI Composites
import {FabHeaderModule} from './ui/header/index';
import {FabFooterModule} from './ui/footer/index';

const FABRIC_MODULES = [
    FabHeaderModule,
    FabFooterModule
];

@NgModule({
    imports: [
        // UX/UI Composites
        FabHeaderModule.forRoot(),
        FabFooterModule.forRoot(),

        // Design
        // @todo - specific design components go here
    ],
    exports: FABRIC_MODULES,
})
export class FabricRootModule {
}


@NgModule({
    imports: FABRIC_MODULES,
    exports: FABRIC_MODULES,
})
export class FabricModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: FabricRootModule};
    }
}
