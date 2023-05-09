sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fica/digi/monitoranalysis/test/integration/FirstJourney',
		'sap/fica/digi/monitoranalysis/test/integration/pages/ZC_TRAVEL_HEADERList',
		'sap/fica/digi/monitoranalysis/test/integration/pages/ZC_TRAVEL_HEADERObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_TRAVEL_HEADERList, ZC_TRAVEL_HEADERObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fica/digi/monitoranalysis') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_TRAVEL_HEADERList: ZC_TRAVEL_HEADERList,
					onTheZC_TRAVEL_HEADERObjectPage: ZC_TRAVEL_HEADERObjectPage
                }
            },
            opaJourney.run
        );
    }
);