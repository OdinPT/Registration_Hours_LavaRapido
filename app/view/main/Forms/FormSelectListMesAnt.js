Ext.define('ConLogin.view.main.Form.FormSelectListMesAnt', {
    extend: 'Ext.form.Panel',
    xtype: 'SelectSelectListMesAnt',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.view.main.Admin.RetornaListTodosContadores'
    ],
    id: 'formSelectListMesAnt',

    frame: false,
    padding:5,

    layout: {
        type: 'hbox'
    },


    items: [

        {
            xtype: 'combobox',
            fieldLabel: 'Mes a Pesquisar: ',

            store: {
                type: 'meses'

            },

            valueField: 'numMes',
            displayField: 'mes',
            typeAhead: true,
            emptyText: 'Selecione o mes a pesquisar...',
            id: 'numMes',
            submitValue:true,

            allowBlank: false,
            blankText: 'Selecione o mes a pesquisar'
        }

        ],


    dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Efetuar Pesquisa',
                glyph: 'f063@FontAwesome',

                formBind: true,
                listeners: {
                    click: 'onClickSearchRegContMensal'
                }

            },{
                text: 'Converter Pesquisa em PDF',
                glyph: 'f1c1@FontAwesome',

                formBind: true,
                handler: function () {

                    var messageBox = Ext.create('Ext.window.MessageBox', {
                        buttonText: {
                            yes: 'Sim',
                            no: 'Não'
                        }
                    });
                    messageBox.confirm('Download', 'Pretende mesmo descarregar a pesquisa?', function(btn){
                        if(btn === 'yes'){
                            window.location.assign('app/php/Gera-pdf/index.php');
                            //messageBox.maskClickAction = this.getMaskClickAction();
                        }
                        else{

                        }
                    });
                }
            }
        ]
    }
});
