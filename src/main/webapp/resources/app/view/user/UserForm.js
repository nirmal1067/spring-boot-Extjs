Ext.define('AM.view.user.UserForm' ,
		
		{
	
	extend  : 'Ext.panel.Panel',
    alias   : 'widget.userForm',
    title   : 'Add User',
    width   : 350,
    config  : {
      recordIndex : 0,
      action : ''
    },
    items   : [{
      xtype : 'form',
      layout: 'anchor',
      bodyStyle: {
        background: 'none',
        padding: '10px',
        border: '0'
      },
      defaults: {
        xtype : 'textfield',
        anchor: '100%'
      },
      items : [{
        name  : 'title',
        fieldLabel: 'Name'
      },{
        name: 'author',
        fieldLabel: 'Nodes'
      },{
        name: 'price',
        fieldLabel: 'Price'
      },{
        name: 'qty',
        fieldLabel: 'Quantity'
      }]
    }],
    buttons: [{
      text: 'OK',
      action: 'add'
    },{
      text    : 'Reset',
      handler : function () { 
        this.up('window').down('form').getForm().reset(); 
      }
    },{
      text   : 'Cancel',
      handler: function () { 
        this.up('window').close();
      }
    }]
}

);