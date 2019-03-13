Ext.define('ConLogin.store.Registo_Horas.RegistoHorasSelecionadas', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.Registo_Horas',
    alias: 'store.Registo_Horas',
    storeId: 'Regseleccionado',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Registo_Horas_List/MostraRegHorasSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
           // console.log('loaded reg selecionado');
        }
    }

});