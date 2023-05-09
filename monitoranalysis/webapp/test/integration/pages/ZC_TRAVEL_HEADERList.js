sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sap.fica.digi.monitoranalysis',
            componentId: 'ZC_TRAVEL_HEADERList',
            entitySet: 'ZC_TRAVEL_HEADER'
        },
        CustomPageDefinitions
    );
});