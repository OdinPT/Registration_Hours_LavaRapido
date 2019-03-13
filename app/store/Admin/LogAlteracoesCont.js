Ext.define('ConLogin.store.Admin.LogAlteracoesCont', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LogRegisto_Horas',
    alias: 'store.LogAlteracoesCont',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/LogRegContagensPP.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});