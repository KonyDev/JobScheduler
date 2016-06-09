function initializetmpRunningJobs() {
    flxTmpRunningjobs1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxTmpRunningjobs1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchEnd": AS_FlexContainer_e7e934ce4085427f8e0b388b9e964d8f,
        "skin": "CopyslFbox0f9d37e16102345"
    }, {}, {});
    flxTmpRunningjobs1.setDefaultUnit(kony.flex.DP);
    var flxTmpRunningjobs = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "CopyslFbox0dca1a8f6305c45",
        "height": "100%",
        "id": "flxTmpRunningjobs",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0dca1a8f6305c45",
        "top": "0dp",
        "width": "100.03%",
        "zIndex": 10
    }, {}, {});
    flxTmpRunningjobs.setDefaultUnit(kony.flex.DP);
    var lblRunningJobName = new kony.ui.Label({
        "id": "lblRunningJobName",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": null,
        "skin": "CopyslLabel0400153b0e14b4a",
        "text": "Job Name",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblRunningJobDesc = new kony.ui.Label({
        "id": "lblRunningJobDesc",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 2,
        "skin": "CopyslLabel0379f9a6ef24046",
        "text": "Description regarding running job will be displayed here.",
        "top": "30%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblJobId = new kony.ui.Label({
        "id": "lblJobId",
        "isVisible": false,
        "left": "41dp",
        "skin": "CopyslLabel0038b0cdf80c643",
        "text": "jobId",
        "top": "33dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxTmpRunningjobs.add(lblRunningJobName, lblRunningJobDesc, lblJobId);
    var FlexContainer02f5da4f4604247 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer02f5da4f4604247",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80%",
        "skin": "CopyslFbox0a303398478ed48",
        "top": "0%",
        "width": "20%",
        "zIndex": 3
    }, {}, {});
    FlexContainer02f5da4f4604247.setDefaultUnit(kony.flex.DP);
    var imgDelete = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDelete",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "trash.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {});
    FlexContainer02f5da4f4604247.add(imgDelete);
    flxTmpRunningjobs1.add(flxTmpRunningjobs, FlexContainer02f5da4f4604247);
}