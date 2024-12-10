muvisionAT.wifiSet("EVI-LINKSYS", "88888888", MuAtMode.ModeAP)
muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
muvision.visionBegin(MuId.Mu00, MuStatus.Enable, MuVsMessageVisionType.kVisionTrafficCard)
basic.forever(function () {
    if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardForward)) {
    	
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardLeft)) {
    	
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardRight)) {
    	
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardPark)) {
    	
    } else if (muvision.trafficCardType(MuId.Mu00, muvision.TrafficCardType.TrafficCardTURN_AROUND)) {
    	
    } else {
    	
    }
})
