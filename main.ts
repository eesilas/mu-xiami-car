let var_res = 0
muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
muvision.visionBegin(MuId.Mu00, MuStatus.Enable, MuVsMessageVisionType.kVisionTrafficCard)
muvision.cameraSetAwb(MuId.Mu00, MuVsCameraWhiteBalance.kAutoWhiteBalance)
muvision.cameraSetZoom(MuId.Mu00, MuVsCameraZoom.kZoomDefault)
muvisionAT.wifiSet("EVI-LINKSYS", "88888888", MuAtMode.ModeAP)
basic.forever(function () {
    if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardForward)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardLeft)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 45)
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardRight)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 45)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardPark)) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardTURN_AROUND)) {
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
