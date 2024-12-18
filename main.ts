let var_res = 0
muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
basic.forever(function () {
    if (muvision.gestureDetect(MuId.Mu00)) {
        if (muvision.gestureType(MuId.Mu00, MuVsLsGesture.kGestureUp)) {
            xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
            xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
            xiamiBoard.setIndexColor(0, 0xff0000)
            xiamiBoard.setIndexColor(1, 0xff0000)
        } else if (muvision.gestureType(MuId.Mu00, MuVsLsGesture.kGestureLeft)) {
            xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 65)
            xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 45)
            xiamiBoard.setIndexColor(0, 0x00ff00)
            xiamiBoard.setIndexColor(1, 0x00ff00)
        } else if (muvision.gestureType(MuId.Mu00, MuVsLsGesture.kGestureRight)) {
            xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 65)
            xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 45)
            xiamiBoard.setIndexColor(0, 0x0000ff)
            xiamiBoard.setIndexColor(1, 0x0000ff)
        } else if (muvision.gestureType(MuId.Mu00, MuVsLsGesture.kGestureDown)) {
            xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 0)
            xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 0)
            xiamiBoard.setIndexColor(0, 0x007fff)
            xiamiBoard.setIndexColor(1, 0x007fff)
        } else if (muvision.gestureType(MuId.Mu00, MuVsLsGesture.kGesturePull)) {
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
        }
    } else {
        basic.showIcon(IconNames.Silly)
    }
})
