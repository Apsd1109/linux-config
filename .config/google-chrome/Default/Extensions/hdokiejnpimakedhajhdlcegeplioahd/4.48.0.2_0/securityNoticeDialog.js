var SecurityNoticeDialog=function(t){Dialog.call(this,t,{title:Strings.translateString("Security Notice"),dynamicHeight:!0,responsive:!1,closeButtonEnabled:!0,buttonsInsideContent:!0})};SecurityNoticeDialog.prototype=Object.create(Dialog.prototype),(SecurityNoticeDialog.prototype.constructor=SecurityNoticeDialog).prototype.initialize=function(){var t;Dialog.prototype.initialize.apply(this,arguments),t=this,$("#securityNoticeDialogDisableSite").bind("click",function(){bg.addDomainToMPWNever(),t.close()}),$("#securityNoticeDialogDisableAll").bind("click",function(){bg.MPWNoNag(),t.close()}),$("#securityNoticeDialogAction").bind("click",function(){t.submit()})},SecurityNoticeDialog.prototype.setupButtons=function(){},SecurityNoticeDialog.prototype.close=function(){Dialog.prototype.close.apply(this,arguments),LPPlatform.closePopup()},SecurityNoticeDialog.prototype.setDynamicHeight=function(){var t=Dialog.prototype.setDynamicHeight.apply(this,arguments);t&&this.data.resizer(t,this.$element.width())},SecurityNoticeDialog.prototype.setup=function(t,i){i.notification&&$(".securityNoticeDialogName").each(function(){$(this).text(" "+i.notification.tld)}),Dialog.prototype.setup.apply(this,arguments)},SecurityNoticeDialog.prototype.handleSubmit=function(){bg.openvault(!1,"opensettings"),this.close()};
//# sourceMappingURL=sourcemaps/securityNoticeDialog.js.map
