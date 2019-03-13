
Ext.define('ConLogin.store.Admin.LogRegistoHoras', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LogRegisto_Horas',
    alias: 'store.LogRhoras',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/LogCarregaRegHoras.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});