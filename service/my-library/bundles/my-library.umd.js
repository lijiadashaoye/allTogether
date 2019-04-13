(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-library', ['exports', '@angular/core'], factory) :
    (factory((global['my-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyLibraryService = (function () {
        function MyLibraryService() {
        }
        MyLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MyLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });
        return MyLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OneComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var MyLibraryModule = (function () {
        function MyLibraryModule() {
        }
        MyLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.MyLibraryService = MyLibraryService;
    exports.MyLibraryModule = MyLibraryModule;
    exports.OneComponent = OneComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlicmFyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vbXktbGlicmFyeS9saWIvb25lLWNvbXBvbmVudC9vbmUtY29tLnRzIiwibmc6Ly9teS1saWJyYXJ5L2xpYi9teS1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE15TGlicmFyeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ29uZS1jb20nLFxuICAgIHRlbXBsYXRlOiBgPHA+XG4gICAgw6jCv8KZw6TCuMKqw6bCmMKvbGlicmFyecOnwrvChMOkwrvCtlxuPC9wPmAsXG4gICAgc3R5bGVzOiBbYHB7YmFja2dyb3VuZDojZGZhZmFmfWBdXG59KVxuZXhwb3J0IGNsYXNzIE9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPbmVDb21wb25lbnQgfSBmcm9tIFwiLi9vbmUtY29tcG9uZW50L29uZS1jb21cIjtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtPbmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT25lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYnJhcnlNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OytCQUpEOzs7Ozs7O0FDQUE7UUFVSTtTQUFpQjs7OztRQUVqQiwrQkFBUTs7O1lBQVIsZUFBb0I7O29CQVZ2QkMsWUFBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsc0RBRVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUM7cUJBQ3BDOzs7OzJCQVJEOzs7Ozs7O0FDQUE7Ozs7b0JBRUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDeEI7OzhCQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9