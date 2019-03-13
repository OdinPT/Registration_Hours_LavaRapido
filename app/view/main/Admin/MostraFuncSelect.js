Ext.onReady
Ext.define('ConLogin.view.main.Admin.MostraFuncSelect', {
    extend: 'Ext.form.Panel',
    xtype: 'MostrafuncSelect',

    controller: 'adminController',

    requires: [
        'ConLogin.view.main.Admin.ListFuncionario',
        'ConLogin.store.Admin.FuncionarioSelecionado',
        'ConLogin.view.main.Admin.FormRegistaHorarioFunc',

        'ConLogin.view.main.Admin.AdministracaoController',
        'ConLogin.view.main.Admin.FormRegistaContactosFunc'
    ],

    id: 'staticPageForm',

    layout: {
            type: 'form',
            align: 'stretch'
        },

    store: {
        type: 'Regfuncseleccionado'
    },

    items: [
       {
            xtype: 'textfield',
            fieldLabel: 'Nome de Utilizador',
            id: 'username02',
           emptyText: 'Insira o username do utilizador',
           blankText: 'Insira o username do utilizador'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Passe: ',
            submitValue : true,
            id: 'pass02',
            emptyText: 'Insira a nova password',
            blankText: 'Insira a nova password'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'NIFF :',
            id: 'NIFF_funcionario',
            emptyText: 'Insira o NIFF',
            blankText: 'Insira o NIFF'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Contacto Pré-definido :',
            id: 'Contacto_predef',
            emptyText: 'Insira o Contacto',
            blankText: 'Insira o Contacto'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Tipo de funcionário ',

            store: {
                type: 'Tipos_Func'

            },

            queryMode: 'remote',

            valueField: 'TF',
            displayField: 'Descricao_TipoFunc',
            typeAhead: true,
            emptyText: 'Selecione Tipo Funcionário...',
            id: 'TFx',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o Tipo de Funcionário'

        },
        {
            xtype: 'combobox',
            fieldLabel: 'Tolerância ',

            store: {
                type: 'Tolerancias'

            },

            queryMode: 'remote',

            valueField: 'ID_Tolerancia',
            displayField: 'Hora_Tolerancia',
            typeAhead: true,
            emptyText: 'Selecione Tipo Funcionário...',
            id: 'ID_Toleranciax',
            submitValue:true,
            allowBlank: false,
            blankText: 'Selecione o Tipo de Funcionário'

        },

        {
            fieldLabel: 'Pode Iniciar sessão ?:',
            xtype: 'checkbox',

            name: 'system',
            inputValue: '1',
            id:'login',

            listeners: {
                check: function (checkbox, isChecked) {
                    var sample = Ext.getCmp('login');
                }
            }
        },

        {
            fieldLabel: 'Validar computador:',
            xtype: 'checkbox',

            name: 'system',
            inputValue: '1',
            id:'Ccookie_funcionario',

            listeners: {
                check: function (checkbox, isChecked) {
                    var sample = Ext.getCmp('Ccookie_funcionario');
                }
            }
        },
        { //1.2
            hidden:true,
            xtype: 'textfield',
            fieldLabel: ' ',
            id: 'Tipo_validacao12',
            name: 'Tipo_validacao12'
        }
    ],

   dockedItems: {
       dock: 'bottom',
        xtype: 'toolbar',
        items: [
            {
                text: 'Concluir Edição',
                iconCls:'fa fa-save',

                formBind: true,
                listeners: {
                    click: 'onClickEditFunc'
                }
            },
           {
                text: 'Apagar',
                iconCls:'fa fa-minus-square',

                formBind: true,
                listeners: {
                    click: 'onClickApagafuncionario'
                }

            },{
                text: 'Adiconar Contacto',
                iconCls:'fa fa-plus',
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Adicionar novo contacto do funcionário',
                            modal: true,
                            width: 420,
                            height: 190,
                            items: {
                                xtype: 'registaContactosFunc'
                            }
                        });
                        myWin.show();
                    }
                }
            },{
                text: 'Adicionar a um posto',
                iconCls:'far fa-map-marked-alt',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Adicionar funcionário ao posto',

                            modal: true,
                            width: 420,
                            height: 190,
                            items: {
                                xtype: 'registaLocalFuncionarios'
                            }
                        });
                        myWin.show();
                    }
                }
            },{         //form para associar funcinario a uma empresa
                text: 'Adicionar a uma Empresa',
                iconCls:'fa fa-building',
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Adicionar funcionário a uma Empresa',
                            modal: true,
                            width: 420,
                            height: 190,
                            items: {
                                xtype: 'registaEmpFunc0'
                            }
                        });
                        myWin.show();
                    }
                }
            },{
                text: 'Adiconar Horário',
                glyph: 43,
                listeners: {
                    click: function(){
                        var myWin = Ext.create("Ext.window.Window", {
                            title: 'Adicionar novo horário ao funcionário',
                            modal: true,
                            width: 460,
                            height: 280,
                            items: {
                                xtype: 'registaHorarioFunc'
                            }
                        });
                        myWin.show();
                    }
                }
            }]
    },

    listeners: {
        afterrender: function () {
            var store = Ext.getStore('Regfuncseleccionado');
            store.load({
                callback: function (records, operation, success) {
                    var record = store.getAt(0);
                    var a = Ext.getCmp('username02').setValue(record.data.username02);
                    var b = Ext.getCmp('pass02').setValue(record.data.pass02);
                    var c = Ext.getCmp('NIFF_funcionario').setValue(record.data.NIFF_funcionario);
                    var d = Ext.getCmp('TFx').setValue(record.data.Descricao__tipofunc);
                    var e = Ext.getCmp('login').setValue(record.data.login);
                    var f = Ext.getCmp('Ccookie_funcionario').setValue(record.data.Ccookie_funcionario);
                    var g = Ext.getCmp('Contacto_predef').setValue(record.data.Contacto_predef);
                    var h = Ext.getCmp('ID_Toleranciax').setValue(record.data.Hora_Tolerancia);

                }
            });
        }
    }

});
