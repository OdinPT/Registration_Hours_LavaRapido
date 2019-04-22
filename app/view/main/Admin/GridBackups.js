Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.GridBackups', {
    extend: 'Ext.grid.Panel',
    id: 'gridBackups',

    requires: [
        //'ConLogin.store.Admin.CarregaWinContagemX',
        'ConLogin.store.Admin.CarregaGridBackup',
        'Ext.toolbar.Paging'
    ],

    title:'Grid de Backups',
    xtype: 'mainBackups',

    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },


    store: {
        type: 'CarregaGridBackups'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],

    columns: [
        {text: 'ID ',  dataIndex: 'ID_Backup', flex: 0.9 ,hidden:false,
            filter: {
            type: 'string'
            }},
        { text: 'Nome Backup :',  dataIndex: 'Nome_Backup', flex: 1.2,hidden:false,
            filter: {
                type: 'string'
            }},
        { text: 'Data Backup :',  dataIndex: 'Data_Backup', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Tipo Backup',  dataIndex: 'Tipo_Backup', flex: 1.2 ,hidden:true,
            filter: {
                type: 'string'
            }},
        { text: 'username :',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }}
    ],



    tbar: {
        defaultButtonUI: 'default',
        items: [
            {
                text: 'Download BD',
                glyph: 'f1c1@FontAwesome',

                formBind: true,
                handler: function (grid) {

                    var messageBox = Ext.create('Ext.window.MessageBox', {
                        buttonText: {
                            yes: 'Sim',
                            no: 'Não'
                        }
                    });
                    messageBox.confirm('Download', 'Pretende mesmo descarregar a pesquisa?', function(btn){
                        if(btn === 'yes'){
                            window.location.assign('app/php/Admin/Backup_BD/Download.php');

                            Ext.getCmp('gridBackups').getStore().load();
                        }
                        else{

                        }
                    });

                }
            }
        ]
    },
    GridAfterRender: function(gridBackups){
        setInterval(function(){
            grid.store.load();
        }, 10);
    }
});