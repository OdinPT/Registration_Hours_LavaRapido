Ext.define('ConLogin.store.Admin.ToleranciaSelecionada', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Tolerancias',
    alias: 'store.ToleranciaSelecionada',
    storeId: 'ToleranciaSelecionada',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaToleranciaSelecionada.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
           // console.log('loaded Tolerancia Selecionada selecionado');

        }
    }

});