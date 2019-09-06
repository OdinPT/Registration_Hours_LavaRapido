Ext.define('ConLogin.store.Admin.CarregaInFuncRD', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaInFuncRD',
    alias: 'store.CarregaInFuncRD',
    storeId: 'CarregaInFuncRD',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaInFuncRD.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});