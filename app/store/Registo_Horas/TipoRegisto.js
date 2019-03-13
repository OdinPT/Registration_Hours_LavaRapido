Ext.onReady
Ext.define('ConLogin.store.Registo_Horas.TipoRegisto', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Tipo_Registo',
    alias: 'store.TipoReg',
    storeId: 'Staging',
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/TipoRegisto.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});