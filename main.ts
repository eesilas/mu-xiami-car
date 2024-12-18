let var_res = 0
muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
muvision.visionBegin(MuId.Mu00, MuStatus.Enable, MuVsMessageVisionType.kVisionNumberCard)
muvision.cameraSetAwb(MuId.Mu00, MuVsCameraWhiteBalance.kAutoWhiteBalance)
muvision.cameraSetZoom(MuId.Mu00, MuVsCameraZoom.kZoomDefault)
muvisionAT.wifiSet("EVI-LINKSYS", "88888888", MuAtMode.ModeAP)
basic.forever(function () {
    if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard1)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
        xiamiBoard.setIndexColor(0, 0xff0000)
        xiamiBoard.setIndexColor(1, 0xff0000)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard2)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 45)
        xiamiBoard.setIndexColor(0, 0x00ff00)
        xiamiBoard.setIndexColor(1, 0x00ff00)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard3)) {
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 45)
        xiamiBoard.setIndexColor(0, 0x0000ff)
        xiamiBoard.setIndexColor(1, 0x0000ff)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard4)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
        xiamiBoard.setIndexColor(0, 0x007fff)
        xiamiBoard.setIndexColor(1, 0x007fff)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard5)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 65)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 65)
        xiamiBoard.setIndexColor(0, 0xffff00)
        xiamiBoard.setIndexColor(1, 0xffff00)
        basic.pause(500)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 65)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
        xiamiBoard.setIndexColor(0, 0xff00ff)
        xiamiBoard.setIndexColor(1, 0xff00ff)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
