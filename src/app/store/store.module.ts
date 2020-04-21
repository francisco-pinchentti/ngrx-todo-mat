import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { reducers } from '@app/store/reducers';

@NgModule({
    imports: [StoreModule.forRoot(reducers), environment.production ? [] : StoreDevtoolsModule.instrument()],
})
export class AppStoreModule {
    constructor(
        // Ensure global state is imported only once
        @Optional() @SkipSelf() parentModule: AppStoreModule
    ) {
        if (parentModule) {
            throw new Error('AppStoreModule is already loaded. Import only in AppModule.');
        }
    }
}
