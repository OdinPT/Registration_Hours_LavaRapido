Ext.define('ConLogin.store.Admin.CarregaGridEquiLavSelect', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.GridRegisto_EquiLav',
    alias: 'store.RegEquilavselect',

    storeId: 'RegEquilavselect',


    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaRegEquiLavSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    listeners: {
        load: function(){
             console.log('CARREGANDO.....');
        }
    }

});