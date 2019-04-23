Ext.define('ConLogin.store.Admin.GridLoginLogout', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.GridLoginLogout',
    alias: 'store.GridLoginLogout',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaLogin-Logout.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});