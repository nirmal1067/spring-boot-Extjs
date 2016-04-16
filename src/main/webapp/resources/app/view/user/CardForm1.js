Ext.define('AM.view.user.CardForm1' ,
		
		{
	
    extend: 'Ext.panel.Pane',
    alias: 'widget.cardForm1',
    bodyStyle: 'padding: 20px',
    title: 'Personal Info',
    border: false,
    items: [{
    xtype: 'textfield',
    fieldLabel: 'First Name'
    }, {
    xtype: 'textfield',
    fieldLabel: 'Last Name'
    }, {
    xtype: 'textfield',
    fieldLabel: 'Email Address',
    vtype: 'email'
    }]
}

);