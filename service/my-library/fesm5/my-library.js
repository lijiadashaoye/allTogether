import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyLibraryService = /** @class */ (function () {
    function MyLibraryService() {
    }
    MyLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    MyLibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibraryService.ngInjectableDef = defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });
    return MyLibraryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OneComponent = /** @class */ (function () {
    function OneComponent() {
    }
    /**
     * @return {?}
     */
    OneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    OneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'one-com',
                    template: "<p>\n    \u8FD9\u4E2A\u662Flibrary\u7EC4\u4EF6\n</p>",
                    styles: ["p{background:#dfafaf}"]
                },] },
    ];
    /** @nocollapse */
    OneComponent.ctorParameters = function () { return []; };
    return OneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyLibraryModule = /** @class */ (function () {
    function MyLibraryModule() {
    }
    MyLibraryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [OneComponent],
                    exports: [OneComponent]
                },] },
    ];
    return MyLibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MyLibraryService, MyLibraryModule, OneComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlicmFyeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktbGlicmFyeS9saWIvbXktbGlicmFyeS5zZXJ2aWNlLnRzIiwibmc6Ly9teS1saWJyYXJ5L2xpYi9vbmUtY29tcG9uZW50L29uZS1jb20udHMiLCJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJyYXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb25lLWNvbScsXG4gICAgdGVtcGxhdGU6IGA8cD5cbiAgICDDqMK/wpnDpMK4wqrDpsKYwq9saWJyYXJ5w6fCu8KEw6TCu8K2XG48L3A+YCxcbiAgICBzdHlsZXM6IFtgcHtiYWNrZ3JvdW5kOiNkZmFmYWZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9uZUNvbXBvbmVudCB9IGZyb20gXCIuL29uZS1jb21wb25lbnQvb25lLWNvbVwiO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW09uZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPbmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15TGlicmFyeU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkFKRDs7Ozs7OztBQ0FBO0lBVUk7S0FBaUI7Ozs7SUFFakIsK0JBQVE7OztJQUFSLGVBQW9COztnQkFWdkIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsc0RBRVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3BDOzs7O3VCQVJEOzs7Ozs7O0FDQUE7Ozs7Z0JBRUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7MEJBTkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==