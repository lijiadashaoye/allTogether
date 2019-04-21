import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MyLibraryService {
    constructor() { }
}
MyLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MyLibraryService.ctorParameters = () => [];
/** @nocollapse */ MyLibraryService.ngInjectableDef = defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class OneComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
OneComponent.decorators = [
    { type: Component, args: [{
                selector: 'one-com',
                template: `<p>
    这个是library组件
</p>`,
                styles: [`p{background:#dfafaf}`]
            },] },
];
/** @nocollapse */
OneComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MyLibraryModule {
}
MyLibraryModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [OneComponent],
                exports: [OneComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MyLibraryService, MyLibraryModule, OneComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlicmFyeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktbGlicmFyeS9saWIvbXktbGlicmFyeS5zZXJ2aWNlLnRzIiwibmc6Ly9teS1saWJyYXJ5L2xpYi9vbmUtY29tcG9uZW50L29uZS1jb20udHMiLCJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJyYXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb25lLWNvbScsXG4gICAgdGVtcGxhdGU6IGA8cD5cbiAgICDDqMK/wpnDpMK4wqrDpsKYwq9saWJyYXJ5w6fCu8KEw6TCu8K2XG48L3A+YCxcbiAgICBzdHlsZXM6IFtgcHtiYWNrZ3JvdW5kOiNkZmFmYWZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9uZUNvbXBvbmVudCB9IGZyb20gXCIuL29uZS1jb21wb25lbnQvb25lLWNvbVwiO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW09uZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPbmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15TGlicmFyeU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFVSSxpQkFBaUI7Ozs7SUFFakIsUUFBUSxNQUFZOzs7WUFWdkIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7O0tBRVQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDcEM7Ozs7Ozs7OztBQ1JEOzs7WUFFQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEI7Ozs7Ozs7Ozs7Ozs7OzsifQ==