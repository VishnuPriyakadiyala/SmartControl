sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sap.fica.digi.monitoranalysis',
            componentId: 'ZC_TRAVEL_HEADERObjectPage',
            entitySet: 'ZC_TRAVEL_HEADER'
        },
        CustomPageDefinitions
    );
});