Ext.define('AM.view.user.TreeMenu' ,
		
		{
	requires: ['AM.view.user.CardMain','AM.view.user.List','AM.view.user.UserForm'],
    extend: 'Ext.tree.Panel',
    alias: 'widget.treeMenu',
    title: 'Simple Tree',
    width: 200,
    height: 150,
    store: Ext.create('Ext.data.Store',{}),
    rootVisible: false,
}

);