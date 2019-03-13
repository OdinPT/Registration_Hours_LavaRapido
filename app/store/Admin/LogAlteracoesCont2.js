
Ext.define('ConLogin.store.Admin.LogAlteracoesCont2', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LogRegisto_Horas',
    alias: 'store.LogAlteracoesCont2',

    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/LogRegContagensPP2.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});