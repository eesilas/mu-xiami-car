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
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard2)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 45)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard3)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 45)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard4)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    } else if (muvision.numberCardType(MuId.Mu00, muvision.NumCardType.NumCard5)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 65)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 65)
        basic.pause(500)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 65)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
