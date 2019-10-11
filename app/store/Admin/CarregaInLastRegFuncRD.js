Ext.define('ConLogin.store.Admin.CarregaInLastRegFuncRD', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaInFuncRD',
    alias: 'store.CarregaInLastRegFuncRD',
    storeId: 'CarregaInLastRegFuncRD',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaInFuncLastRegRD.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});