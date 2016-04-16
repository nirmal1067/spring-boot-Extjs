Ext.define('AM.view.navigation.AppToolBar' ,
		
		{
	requires: ['AM.view.menu.TreeMenu'],
	  extend: 'Ext.toolbar.Toolbar',
      alias: 'widget.appToolBar',
      width   : 500,
      items: [
          {
              // xtype: 'button', // default for Toolbars
              text: 'LOGO'
          },
          {
              xtype: 'splitbutton',
              text : 'Menu'
          },
          // begin using the right-justified button container
          '->', // same as { xtype: 'tbfill' }
          {
              xtype    : 'textfield',
              name     : 'field1',
              emptyText: 'enter search term'
          },
          // add a vertical separator bar between toolbar items
          '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
          'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
          { xtype: 'tbspacer' },// same as ' ' to create Ext.toolbar.Spacer
          'Logged User',
          { xtype: 'tbspacer'}, // add a 50px space
          'Santa'
      ]


	  }

);