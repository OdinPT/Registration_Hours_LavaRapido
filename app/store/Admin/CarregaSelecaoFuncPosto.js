Ext.define('ConLogin.store.Admin.CarregaSelecaoFuncPosto', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.FuncPostos',

    alias: 'store.CarregaSelecaoFuncPosto',
    storeId: 'CarregaSelecaoFuncPosto',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/CarregaEmpFunc.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
        }
    }

});