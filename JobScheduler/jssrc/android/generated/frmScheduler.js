function addWidgetsfrmScheduler() {
    frmScheduler.setDefaultUnit(kony.flex.DP);
    var tabPaneScheduler = new kony.ui.TabPane({
        "activeSkin": "CopytabCanvas0daddbe2d5e4b4d",
        "activeTabs": [0],
        "height": "100%",
        "id": "tabPaneScheduler",
        "inactiveSkin": "CopytabCanvasInactive01ab4b400112841",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "left": "0dp",
        "top": "0dp",
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "collapsibleviewconfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "imageposition": "right",
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "tabnamealignment": "left",
                "toggleTabs": false,
                "toggletabs": false
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "panoramaViewConfig": {},
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                "image1": "tableftarrow.png",
                "image2": "tabrightarrow.png"
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
        "width": "100.00%"
    }, {
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tabHeaderHeight": 25
    });
    var tabSchedule = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "92%",
        "id": "tabSchedule",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab05211d4b667d145",
        "tabName": "Schedule",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabSchedule.setDefaultUnit(kony.flex.DP);
    var FlexContainer07800686bed244d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "62%",
        "id": "FlexContainer07800686bed244d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxScheduleJob",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer07800686bed244d.setDefaultUnit(kony.flex.DP);
    var flxConstraints = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flxConstraints",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxConstraints.setDefaultUnit(kony.flex.DP);
    var lblConst = new kony.ui.Label({
        "height": "100%",
        "id": "lblConst",
        "isVisible": true,
        "left": "5.00%",
        "skin": "lblSchedule",
        "text": "Constraints",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0b5c3143f396043 = new kony.ui.Label({
        "height": "100%",
        "id": "Label0b5c3143f396043",
        "isVisible": true,
        "left": "40.00%",
        "skin": "slLabel",
        "text": ":",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listBoxConstraintsVaule1 = new kony.ui.ListBox({
        "height": "100%",
        "id": "listBoxConstraintsVaule1",
        "isVisible": true,
        "left": "45%",
        "masterData": [
            ["small", "30 KB"],
            ["medium", "500KB"],
            ["5mb", "5MB"],
            ["20mb", "20MB"],
            ["100mb", "100MB"]
        ],
        "selectedKey": "small",
        "selectedKeyValue": ["small", "30 KB"],
        "skin": "CopyslListBox0db67a2acebe94f",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var Label0f654a579fdb043 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1%",
        "id": "Label0f654a579fdb043",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0e771b050b54f4a",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConstraints.add(
    lblConst, Label0b5c3143f396043, listBoxConstraintsVaule1, Label0f654a579fdb043);
    var flxConnectivity = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flxConnectivity",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "17%",
        "width": "100%"
    }, {}, {});
    flxConnectivity.setDefaultUnit(kony.flex.DP);
    var lblConnectivity = new kony.ui.Label({
        "height": "100%",
        "id": "lblConnectivity",
        "isVisible": true,
        "left": "5%",
        "skin": "lblSchedule",
        "text": "Connectivity",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel040057c46e74d49 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel040057c46e74d49",
        "isVisible": true,
        "left": "40%",
        "skin": "slLabel",
        "text": ":",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var rdbConnectivity = new kony.ui.RadioButtonGroup({
        "height": "60%",
        "id": "rdbConnectivity",
        "isVisible": true,
        "left": "45%",
        "masterData": [
            ["Any", "Any"],
            ["Wifi", "Wifi"]
        ],
        "selectedKey": "Any",
        "selectedKeyValue": ["Any", "Any"],
        "skin": "CopyslRadioButtonGroup0e2d82276d5a64b",
        "top": "25%",
        "width": "50%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {});
    var CopyLabel029e9a40d357e49 = new kony.ui.Label({
        "bottom": 0,
        "height": "1%",
        "id": "CopyLabel029e9a40d357e49",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0f78bb987494f49",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConnectivity.add(
    lblConnectivity, CopyLabel040057c46e74d49, rdbConnectivity, CopyLabel029e9a40d357e49);
    var flxTimeDeadline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flxTimeDeadline",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "51%",
        "width": "100%"
    }, {}, {});
    flxTimeDeadline.setDefaultUnit(kony.flex.DP);
    var lblDeadLine = new kony.ui.Label({
        "height": "100%",
        "id": "lblDeadLine",
        "isVisible": true,
        "left": "5%",
        "skin": "lblSchedule",
        "text": "Time Deadline",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel09d04cbc041324e = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel09d04cbc041324e",
        "isVisible": true,
        "left": "40%",
        "skin": "slLabel",
        "text": ":",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtDeadline = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtDeadline",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "left": "45%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0112972e52e8a4d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": 0,
        "width": "50%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Label01b856ca7ea434e = new kony.ui.Label({
        "bottom": 0,
        "height": "1%",
        "id": "Label01b856ca7ea434e",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0f78bb987494f49",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTimeDeadline.add(
    lblDeadLine, CopyLabel09d04cbc041324e, txtDeadline, Label01b856ca7ea434e);
    var flxCharging = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flxCharging",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "68%",
        "width": "100%"
    }, {}, {});
    flxCharging.setDefaultUnit(kony.flex.DP);
    var lblCharging = new kony.ui.Label({
        "height": "100%",
        "id": "lblCharging",
        "isVisible": true,
        "left": "5%",
        "skin": "lblSchedule",
        "text": "Charging",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblColon = new kony.ui.Label({
        "height": "100%",
        "id": "lblColon",
        "isVisible": true,
        "left": "40%",
        "skin": "slLabel",
        "text": ":",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var chbxCharging = new kony.ui.CheckBoxGroup({
        "height": "60%",
        "id": "chbxCharging",
        "isVisible": true,
        "left": "45.00%",
        "masterData": [
            ["devReq", "Required Plugin"]
        ],
        "selectedKeyValues": [
            ["devReq", "Required Plugin"]
        ],
        "selectedKeys": ["devReq"],
        "skin": "CopyslCheckBoxGroup0804202fc84ef46",
        "top": "25%",
        "width": "50%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLine = new kony.ui.Label({
        "bottom": "0%",
        "height": "1%",
        "id": "lblLine",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel03de99b44550e4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxCharging.add(
    lblCharging, lblColon, chbxCharging, lblLine);
    var flxIdealMode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flxIdealMode",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "85%",
        "width": "100%"
    }, {}, {});
    flxIdealMode.setDefaultUnit(kony.flex.DP);
    var lblIdealMode = new kony.ui.Label({
        "height": "100%",
        "id": "lblIdealMode",
        "isVisible": true,
        "left": "5%",
        "skin": "lblSchedule",
        "text": "Ideal Mode",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel032b5978ab4284d = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel032b5978ab4284d",
        "isVisible": true,
        "left": "40%",
        "skin": "slLabel",
        "text": ":",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var chbxIdle = new kony.ui.CheckBoxGroup({
        "height": "60%",
        "id": "chbxIdle",
        "isVisible": true,
        "left": "45%",
        "masterData": [
            ["idleMode", "Required"]
        ],
        "skin": "Required",
        "top": "25%",
        "width": "50%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel03af4c062225644 = new kony.ui.Label({
        "bottom": "0%",
        "height": "0%",
        "id": "CopyLabel03af4c062225644",
        "isVisible": true,
        "left": "0%",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxIdealMode.add(
    lblIdealMode, CopyLabel032b5978ab4284d, chbxIdle, CopyLabel03af4c062225644);
    var flxTimeDelay = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "flxTimeDelay",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "33%",
        "width": "100%"
    }, {}, {});
    flxTimeDelay.setDefaultUnit(kony.flex.DP);
    var lblTimeDelay = new kony.ui.Label({
        "height": "100%",
        "id": "lblTimeDelay",
        "isVisible": true,
        "left": "5%",
        "skin": "lblSchedule",
        "text": "Time Delay",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel059afc5a09b7142 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel059afc5a09b7142",
        "isVisible": true,
        "left": "40%",
        "skin": "slLabel",
        "text": ":",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "3%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtTimeDelay = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "88%",
        "id": "txtTimeDelay",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "left": "45%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0112972e52e8a4d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "10%",
        "width": "50%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel055f0e015db574d = new kony.ui.Label({
        "bottom": 0,
        "height": "1%",
        "id": "CopyLabel055f0e015db574d",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0f78bb987494f49",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTimeDelay.add(
    lblTimeDelay, CopyLabel059afc5a09b7142, txtTimeDelay, CopyLabel055f0e015db574d);
    FlexContainer07800686bed244d.add(
    flxConstraints, flxConnectivity, flxTimeDeadline, flxCharging, flxIdealMode, flxTimeDelay);
    var flxScheduleCancleBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxScheduleCancleBtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "slFbox",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScheduleCancleBtn.setDefaultUnit(kony.flex.DP);
    var btnScheduleJob = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "CopyslButtonGlossBlue042aed482b92547",
        "height": "100%",
        "id": "btnScheduleJob",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_4270ed5fc5b04ba0b801016be2107003,
        "skin": "skbBtnSchedule",
        "text": "Schedule Job",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCancel = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "skbBtnSchedule",
        "height": "100%",
        "id": "btnCancel",
        "isVisible": true,
        "left": "50%",
        "onClick": AS_Button_9aff3daa3ee0408b90cb107d116d7f93,
        "skin": "CopyslButtonGlossBlue042aed482b92547",
        "text": "Cancel",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxScheduleCancleBtn.add(
    btnScheduleJob, btnCancel);
    tabSchedule.add(
    FlexContainer07800686bed244d, flxScheduleCancleBtn);
    tabPaneScheduler.addTab("tabSchedule", "Schedule", null, tabSchedule, null);
    var tabJobsRunning = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "92%",
        "id": "tabJobsRunning",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "CopyslTab05211d4b667d145",
        "tabName": "Running Jobs",
        "width": "100%"
    }, {
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    tabJobsRunning.setDefaultUnit(kony.flex.DP);
    var flxNoRunningJobs = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100.00%",
        "id": "flxNoRunningJobs",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09f11185c19d84f",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxNoRunningJobs.setDefaultUnit(kony.flex.DP);
    var Label080a5157b5ebe4c = new kony.ui.Label({
        "id": "Label080a5157b5ebe4c",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknNoRunningJobs",
        "text": "No Running Jobs",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0c9db645ea2d04f = new kony.ui.Label({
        "id": "Label0c9db645ea2d04f",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0141bb1d228b140",
        "text": "Currently there are no running jobs.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "27%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label050cd1ef3060d4f = new kony.ui.Label({
        "id": "Label050cd1ef3060d4f",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0141bb1d228b140",
        "text": "Please schedule.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxNoRunningJobs.add(
    Label080a5157b5ebe4c, Label0c9db645ea2d04f, Label050cd1ef3060d4f);
    var flxRunningJobs = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxRunningJobs",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09ca0a1e693c149",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRunningJobs.setDefaultUnit(kony.flex.DP);
    var segRunningJobs = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgDelete": "delete.png",
            "lblJobId": "Label",
            "lblRunningJobDesc": "Description ",
            "lblRunningJobName": "Job Name"
        }, {
            "imgDelete": "delete.png",
            "lblJobId": "Label",
            "lblRunningJobDesc": "Description ",
            "lblRunningJobName": "Job Name"
        }, {
            "imgDelete": "delete.png",
            "lblJobId": "Label",
            "lblRunningJobDesc": "Description ",
            "lblRunningJobName": "Job Name"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segRunningJobs",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0e6245176c3b043",
        "rowTemplate": flxTmpRunningjobs1,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "b9b9b900",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer02f5da4f4604247": "FlexContainer02f5da4f4604247",
            "flxTmpRunningjobs": "flxTmpRunningjobs",
            "flxTmpRunningjobs1": "flxTmpRunningjobs1",
            "imgDelete": "imgDelete",
            "lblJobId": "lblJobId",
            "lblRunningJobDesc": "lblRunningJobDesc",
            "lblRunningJobName": "lblRunningJobName"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxRunningJobs.add(
    segRunningJobs);
    tabJobsRunning.add(
    flxNoRunningJobs, flxRunningJobs);
    tabPaneScheduler.addTab("tabJobsRunning", "Running Jobs", null, tabJobsRunning, null);
    frmScheduler.add(
    tabPaneScheduler);
};

function frmSchedulerGlobals() {
    frmScheduler = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmScheduler,
        "enabledForIdleTimeout": false,
        "headers": [flxHeader],
        "id": "frmScheduler",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_46f4196916a94f5fa2bb102be63d9aad,
        "skin": "sknFormBG"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmScheduler.info = {
        "kuid": "dce4329935824bc08f82f0623d2a0039"
    };
};