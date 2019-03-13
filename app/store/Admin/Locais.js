Ext.define('ConLogin.store.Admin.Locais', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaLocais',
    alias: 'store.Locais',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaLocais.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});