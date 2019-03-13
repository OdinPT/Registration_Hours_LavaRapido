Ext.define('ConLogin.store.Admin.Tolerancias', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Tolerancias',
    alias: 'store.Tolerancias',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaTolerancias.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});