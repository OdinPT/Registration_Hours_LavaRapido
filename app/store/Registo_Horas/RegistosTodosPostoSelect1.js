Ext.define('ConLogin.store.Registo_Horas.RegistosTodosPostoSelect1', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.RegistosContagemSelect',

    alias: 'store.RegPostoSelect1',
    storeId: 'RegPostoSelect1',


    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaRegistosContadorSelectRegDia.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    listeners: {
        load: function(){
            console.log('loaded reg posto  selecionado 1');
        }
    }


});