Ext.define('ConLogin.store.Admin.CarregaWinContagemX', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LoadWindowScoreX',
    alias: 'store.CarregaContagemWinx',
    storeId: 'Staging',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/CarregaStore/WindowContagem.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
            console.log('CONTAGEM CARREGADA');
        }
    }

});