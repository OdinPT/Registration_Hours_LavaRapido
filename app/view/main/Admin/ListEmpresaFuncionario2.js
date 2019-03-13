Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.define('ConLogin.view.main.Admin.ListEmpresaFuncionario2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.EmpresasFunc',
    id: 'gridEmpresa_func2',

    xtype: 'mainlistEmpresaFunc2',



    requires: [
        'ConLogin.store.Admin.EmpresaFuncionario',
        'Ext.toolbar.Paging',
        'ConLogin.view.main.Admin.ListEmpresas'
    ],
    config: {
        autoLoad: true,
        scroll:true,
        style:{overflow: 'auto',overflowX: 'hidden'}
    },

    store: {
        type: 'EmpresaFunc'
    },

    plugins: [{
        ptype: 'gridfilters'
    }],


    columns: [
        {text: 'ID ',  dataIndex: 'ID_ef', flex: 0.9 ,
            filter: {
            type: 'string'
            }},
        { text: 'Username :',  dataIndex: 'username', flex: 1.2 ,
            filter: {
                type: 'string'
            }},
        { text: 'Nome Empresa', dataIndex: 'Nome_Empresa', flex: 0.8 ,
            filter: {
                type: 'string'
            }}
    ],


    listeners: {
        itemclick: function(view, record, item, index, e) {
            var id = record.get('ID_ef');
            Ext.util.Cookies.set('cookieID_EF', id);

            myRequest4 = Ext.Ajax.request({
                url: 'app/php/VerificaAcessos/AcessoATodosPostos.php',
                success: function (response, opts) {
                    var myWin = Ext.create("Ext.window.Window", {
                        title: 'Registo Selecionado',
                        modal: true,
                        items: [{
                            xtype: 'MostraRegFuncEmp'
                        }]

                    });
                    myWin.show();
                }
            })
        }
    },

    GridAfterRender: function(gridEmpresa_func){
        setInterval(function(){
            grid.store.load();
        }, 1200);
    }
});
