Ext.define('ConLogin.store.Registo_Horas.RegistosTodosPostoSelect', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.RegistosContagemSelect',

    alias: 'store.RegPostoSelect',
    storeId: 'RegPostoSelect',


    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaRegistosContadorSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    listeners: {
        load: function(){
            console.log('loaded reg posto  selecionado');
        }
    }


});