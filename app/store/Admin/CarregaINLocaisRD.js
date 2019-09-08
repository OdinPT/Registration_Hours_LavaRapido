Ext.define('ConLogin.store.Admin.CarregaINLocaisRD', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Locais_Func',
    alias: 'store.CarregaINLocaisRD',
    storeId: 'Staging',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaINLocaisRD.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});