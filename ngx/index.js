import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return cordova(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/StarleyDev/barcodescanner-sdk31";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner.decorators = [
        { type: Injectable }
    ];
    return BarcodeScanner;
}(IonicNativePlugin));
export { BarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25ELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVVGLDZCQUFJLGFBQUMsT0FBK0I7SUFZcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUzs7Ozs7OztnQkFsQy9CLFVBQVU7O3lCQW5IWDtFQW9Ib0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRm9ybWF0cyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBEZWZhdWx0cyB0byBhbGwgZm9ybWF0cyBleGNlcHQgYFBERl80MTdgIGFuZCBgUlNTX0VYUEFOREVEYC5cbiAgICovXG4gIGZvcm1hdHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXG4gICAqL1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgdG9yY2hPbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNhdmUgc2NhbiBoaXN0b3J5LiBEZWZhdWx0cyB0byBgZmFsc2VgLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgc2F2ZUhpc3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6XG4gICAgfCAnUVJfQ09ERSdcbiAgICB8ICdEQVRBX01BVFJJWCdcbiAgICB8ICdVUENfRSdcbiAgICB8ICdVUENfQSdcbiAgICB8ICdFQU5fOCdcbiAgICB8ICdFQU5fMTMnXG4gICAgfCAnQ09ERV8xMjgnXG4gICAgfCAnQ09ERV8zOSdcbiAgICB8ICdDT0RFXzkzJ1xuICAgIHwgJ0NPREFCQVInXG4gICAgfCAnSVRGJ1xuICAgIHwgJ1JTUzE0J1xuICAgIHwgJ1JTU19FWFBBTkRFRCdcbiAgICB8ICdQREZfNDE3J1xuICAgIHwgJ0FaVEVDJ1xuICAgIHwgJ01TSSc7XG4gIGNhbmNlbGxlZDogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhcmNvZGUgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhcmNvZGVTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oYmFyY29kZURhdGEgPT4ge1xuICogIGNvbnNvbGUubG9nKCdCYXJjb2RlIGRhdGEnLCBiYXJjb2RlRGF0YSk7XG4gKiB9KS5jYXRjaChlcnIgPT4ge1xuICogXHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYXJjb2RlU2Nhbm5lck9wdGlvbnNcbiAqIEJhcmNvZGVTY2FuUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFyY29kZVNjYW5uZXInLFxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFyY29kZVNjYW5uZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRW5jb2RlOiB7XG4gICAgVEVYVF9UWVBFOiBzdHJpbmc7XG4gICAgRU1BSUxfVFlQRTogc3RyaW5nO1xuICAgIFBIT05FX1RZUEU6IHN0cmluZztcbiAgICBTTVNfVFlQRTogc3RyaW5nO1xuICB9ID0ge1xuICAgIFRFWFRfVFlQRTogJ1RFWFRfVFlQRScsXG4gICAgRU1BSUxfVFlQRTogJ0VNQUlMX1RZUEUnLFxuICAgIFBIT05FX1RZUEU6ICdQSE9ORV9UWVBFJyxcbiAgICBTTVNfVFlQRTogJ1NNU19UWVBFJyxcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuKG9wdGlvbnM/OiBCYXJjb2RlU2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPEJhcmNvZGVTY2FuUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgZGF0YSBpbnRvIGEgYmFyY29kZS5cbiAgICogTk9URTogbm90IHdlbGwgc3VwcG9ydGVkIG9uIEFuZHJvaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZSBvZiBlbmNvZGluZ1xuICAgKiBAcGFyYW0ge2FueX0gZGF0YSBEYXRhIHRvIGVuY29kZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmNvZGUodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19