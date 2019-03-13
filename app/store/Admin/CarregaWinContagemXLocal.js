Ext.define('ConLogin.store.Admin.CarregaWinContagemXLocal', {
    extend: 'Ext.data.Store',
    model: 'ConLogin.model.LoadWindowScore',
    alias: 'store.CarregaContagemWinxLocal',
    storeId: 'Staging',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'app/php/Pesquisa-mes_ant_lavagem/CarregaRequestLocalContagem.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: function(){
            console.log('CONTAGEM CARREGADA Local Selecionado');
        }
    }

});