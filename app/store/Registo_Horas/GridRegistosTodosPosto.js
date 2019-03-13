
Ext.define('ConLogin.store.Registo_Horas.GridRegistosTodosPosto', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.RegistosPosto',
    alias: 'store.RTContadores',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaGridTodosRegistosPosto.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});