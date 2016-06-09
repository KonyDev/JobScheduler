//actions.js file 
function AS_AppEvents_8c42552c8067472e8ca39e3f3ed3fbec(eventobject) {
    setGestureRecogniserTofrmScheduler();
    setDeleteButtonCallBack();
}

function AS_Button_2948f79dddad42999b1e44c55c353fea(eventobject) {}

function AS_Button_4270ed5fc5b04ba0b801016be2107003(eventobject) {
    return scheduleJob.call(this);
}

function AS_Button_4c055e96468a44b6a31f9bc5fb12c7ea(eventobject) {
    frmScheduler.show();
}

function AS_Button_86f773c6ff624ca88f1284d7a68ad428(eventobject) {}

function AS_Button_95d1b012e558447eb1c386aca8054d39(eventobject) {}

function AS_Button_9aff3daa3ee0408b90cb107d116d7f93(eventobject) {
    return cancel.call(this);
}

function AS_Button_9d55ca3459fb4f70b09de515d3f1055c(eventobject) {
    getURLToDownlad();
}

function AS_Button_c0338a66005b46b69513e7b13b09dc02(eventobject) {
    return scheduleJob.call(this);
}

function AS_Button_c20993529e1c4208a4f949488ea83002(eventobject) {
    return scheduleJob.call(this);
}

function AS_Button_ce17bd594b424d05a04337bd51efa48f(eventobject) {
    return scheduleJob.call(this);
}

function AS_FlexContainer_26fba54a9a3f4045bdb0e5bcf5fba84c(eventobject, x, y) {
    frmLogIn.show();
}

function AS_FlexContainer_89af671b9d3f41db98dd2ad3a4a8fbc7(eventobject, x, y) {}

function AS_FlexContainer_cfb2a3480a904b22869481d87a6b98bd(eventobject, context) {
    return cancelJob.call(this);
}

function AS_FlexContainer_e7e934ce4085427f8e0b388b9e964d8f(eventobject, x, y) {
    if (frmLogIn.imgSwitch.src === "switch_on") frmLogIn.imgSwitch.src = "switch_off.png";
    else frmLogIn.imgSwitch.src = "switch_on.png";
}

function AS_Form_46f4196916a94f5fa2bb102be63d9aad(eventobject) {
    return onFormPostShow.call(this);
}

function AS_Image_7a0070fb640d44d58bf1cec76b803a70(eventobject, x, y) {}

function AS_Image_7bc501af9b794b28a59abcd3e93cb9a7(eventobject, x, y) {
    if (frmLogIn.imgSwitch.src === "switch_on.png") frmLogIn.imgSwitch.src = "switch_off.png";
    else frmLogIn.imgSwitch.src = "switch_on.png";
}

function AS_Segment_4555d65f4b3f4a52a03798076de1cc5d(eventobject, sectionNumber, rowNumber) {}

function AS_Tab_69945b165e114a9a80baae71931271c1(eventobject, x, y) {}