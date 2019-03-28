Ext.define('ConLogin.store.Admin.CarregaGridContagemDiaAnt2', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaGridContagemDiaAnt',

    alias: 'store.CarregaGridContagemDiaAnt2',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaGridContagemDiaAnt2.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});