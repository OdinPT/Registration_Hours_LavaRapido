Ext.define('ConLogin.store.Admin.Func', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaFunc',
    alias: 'store.Func',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaFunc.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});