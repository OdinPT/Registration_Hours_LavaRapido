Ext.define('ConLogin.store.Admin.CarregaGridLimMaxCont', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaLimMaxCont',
    alias: 'store.CarregaLimMaxCont',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaGridLimMaxCont.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});