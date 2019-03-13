Ext.define('ConLogin.store.Admin.LocalSelecionado', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaLocais',

    alias: 'store.reg_select_local',
    xtype: 'Reglocalselect',
    storeId: 'Reglocseleccionado',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Admin/MostraLocalSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
           // console.log('loaded reg locais selecionado');
        }
    }

});