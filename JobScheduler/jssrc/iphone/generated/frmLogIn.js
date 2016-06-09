function addWidgetsfrmLogIn() {
    frmLogIn.setDefaultUnit(kony.flex.DP);
    var Image07eb5f302b8484c = new kony.ui.Image2({
        "id": "Image07eb5f302b8484c",
        "isVisible": true,
        "left": "32%",
        "skin": "slImage",
        "src": "logo.png",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label099ab380adc1d41 = new kony.ui.Label({
        "id": "Label099ab380adc1d41",
        "isVisible": true,
        "left": "0.00%",
        "skin": "CopyslLabel0539f2f19933747",
        "text": "Welcome to ",
        "top": "19.98%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label05a1e81705ad841 = new kony.ui.Label({
        "id": "Label05a1e81705ad841",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0cf9b3c7113d24f",
        "text": "Job Scheduler",
        "top": "23%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxUser = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxUser",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "8%",
        "skin": "sknFlxUser",
        "top": "40%",
        "width": "84%",
        "zIndex": 1
    }, {}, {});
    flxUser.setDefaultUnit(kony.flex.DP);
    var Image0e9bc5118352c42 = new kony.ui.Image2({
        "id": "Image0e9bc5118352c42",
        "isVisible": true,
        "left": "5.00%",
        "skin": "slImage",
        "src": "user.png",
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0445d03cc70fb46 = new kony.ui.Label({
        "height": "60%",
        "id": "Label0445d03cc70fb46",
        "isVisible": true,
        "left": "15%",
        "skin": "CopyslLabel0eb3762ca565e4c",
        "text": "Label",
        "top": "20%",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtbxUserName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "80%",
        "id": "txtbxUserName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "19.97%",
        "placeholder": "john@kony.com",
        "secureTextEntry": false,
        "skin": "sknUserLogin",
        "text": "john@kony.com",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10%",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxUser.add(Image0e9bc5118352c42, Label0445d03cc70fb46, txtbxUserName);
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "8%",
        "skin": "sknFlxUser",
        "top": "53%",
        "width": "84%",
        "zIndex": 1
    }, {}, {});
    flxPassword.setDefaultUnit(kony.flex.DP);
    var imgPassword = new kony.ui.Image2({
        "id": "imgPassword",
        "isVisible": true,
        "left": "5.00%",
        "skin": "slImage",
        "src": "password.png",
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var linePassword = new kony.ui.Label({
        "height": "60%",
        "id": "linePassword",
        "isVisible": true,
        "left": "15%",
        "skin": "CopyslLabel0132661d3efd142",
        "text": "Label",
        "top": "20%",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtbxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "80%",
        "id": "txtbxPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "20%",
        "secureTextEntry": true,
        "skin": "sknUserLogin",
        "text": "john@kony.com",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10%",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxPassword.add(imgPassword, linePassword, txtbxPassword);
    var flxSwitch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxSwitch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "8%",
        "skin": "CopysknFlxUser03abfbba9fc3f47",
        "top": "65%",
        "width": "84%",
        "zIndex": 1
    }, {}, {});
    flxSwitch.setDefaultUnit(kony.flex.DP);
    var CopyLabel0757804f712f744 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0757804f712f744",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0b9dbd61476f042",
        "text": "Remember Me",
        "top": "0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer0c0e0d18d669343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0c0e0d18d669343",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "60%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c0e0d18d669343.setDefaultUnit(kony.flex.DP);
    var imgSwitch = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSwitch",
        "isVisible": true,
        "onTouchEnd": AS_Image_7bc501af9b794b28a59abcd3e93cb9a7,
        "right": "0%",
        "skin": "slImage",
        "src": "switch_on.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0c0e0d18d669343.add(imgSwitch);
    flxSwitch.add(CopyLabel0757804f712f744, FlexContainer0c0e0d18d669343);
    var btnLogin = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue056bff0ba708745",
        "height": "8%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "8.00%",
        "onClick": AS_Button_4c055e96468a44b6a31f9bc5fb12c7ea,
        "skin": "CopyslButtonGlossBlue056bff0ba708745",
        "text": "LOGIN",
        "top": "78%",
        "width": "84%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmLogIn.add(Image07eb5f302b8484c, Label099ab380adc1d41, Label05a1e81705ad841, flxUser, flxPassword, flxSwitch, btnLogin);
};

function frmLogInGlobals() {
    frmLogIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogIn,
        "enabledForIdleTimeout": false,
        "id": "frmLogIn",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "sknFormBG"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
    frmLogIn.info = {
        "kuid": "9a7a86262c1c417482ab4a13ad17bcbd"
    };
};