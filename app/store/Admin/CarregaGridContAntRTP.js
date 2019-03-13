Ext.define('ConLogin.store.Admin.CarregaGridContAntRTP', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.GridContAntContagemRTP',
    alias: 'store.carregaGridRegAntRTP',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/CarregaGridContAntRTP.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});