Ext.define('ConLogin.store.Admin.EmpresaSelecionada', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.CarregaEmpresa',

    alias: 'store.reg_select_emp',
    xtype: 'Regempselect',

    storeId: 'Regempseleccionado',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaEmpresaSelect.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
           // console.log('loaded emp selecionado');
        }
    }

});