Ext.define('ConLogin.store.Admin.CarregaGridContagemDiaAnt', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaGridContagemDiaAnt',
    alias: 'store.CarregaGridContagemDiaAnt',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaGridContagemDiaAnt.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});