;/*FB_PKG_DELIM*/

__d("IntlCLDRNumberType01",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType03",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===0||a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("getContextualParent",["ge"],(function(a,b,c,d,e,f,g){function a(a,b){b===void 0&&(b=!1);var d=!1;a=a;do{if(a instanceof Element){var e=a.getAttribute("data-ownerid");if(e){a=c("ge")(e);d=!0;continue}}a=a.parentNode}while(b&&a&&!d);return a}g["default"]=a}),98);