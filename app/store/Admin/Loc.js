Ext.define('ConLogin.store.Admin.Loc', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaLoc',
    alias: 'store.Loc',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaLoc.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});