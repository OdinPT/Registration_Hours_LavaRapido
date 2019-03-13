Ext.define('ConLogin.store.Admin.mes', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Mes',
    alias: 'store.meses',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/Carregameses.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});