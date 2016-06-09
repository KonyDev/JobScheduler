function initializetmpSchedulerHeader() {
    flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox01473a81d8adb4c"
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblHome = new kony.ui.Label({
        "height": "100%",
        "id": "lblHome",
        "isVisible": true,
        "left": "15%",
        "skin": "sknHeader",
        "text": "Home",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "70%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer0e9e13100a10449 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0e9e13100a10449",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "90%",
        "onTouchEnd": AS_FlexContainer_26fba54a9a3f4045bdb0e5bcf5fba84c,
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0e9e13100a10449.setDefaultUnit(kony.flex.DP);
    var Image05e8299f238ee44 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image05e8299f238ee44",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logout.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0e9e13100a10449.add(
    Image05e8299f238ee44);
    flxHeader.add(
    lblHome, FlexContainer0e9e13100a10449);
}