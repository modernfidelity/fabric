import {NgModule, ModuleWithProviders} from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
})
export class FabCoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FabCoreModule,
            providers: [],
        };
    }
}
