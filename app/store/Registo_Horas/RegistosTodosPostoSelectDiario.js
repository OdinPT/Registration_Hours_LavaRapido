Ext.define('ConLogin.store.Registo_Horas.RegistosTodosPostoSelectDiario', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LoadWindowContagemSelect',
    alias: 'store.RegPostoSelectdiario',
    storeId: 'RegPostoSelectdiario',


    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaRegistosContadorDiarioRD.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    listeners: {
        load: function(){
           // console.log('loaded reg posto  selecionado');
        }
    }


});