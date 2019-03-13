Ext.define('ConLogin.store.Admin.TotalRegistosContadores', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.RegistosPosto',
    alias: 'store.RegContadores',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaRegistosContadores.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});