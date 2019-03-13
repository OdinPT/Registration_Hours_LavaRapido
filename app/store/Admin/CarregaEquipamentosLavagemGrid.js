Ext.define('ConLogin.store.Admin.CarregaEquipamentosLavagemGrid', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaEquipamentosLavagem',
    alias: 'store.CarregaEquiLabGrid',
    storeId: 'Staging',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaEquipamentosLavagem.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
            console.log('Grid Registos Equipamentos Lavagem ');
        }
    }

});