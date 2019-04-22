Ext.define('ConLogin.store.Admin.CarregaGridBackup', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaGridBackups',
    alias: 'store.CarregaGridBackups',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaGridBackup.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});