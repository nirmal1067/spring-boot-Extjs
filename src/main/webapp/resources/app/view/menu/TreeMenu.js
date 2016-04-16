Ext.define('AM.view.user.TreeMenu' ,
		
		{
	requires: ['AM.store.MenuStore'],
    extend: 'Ext.tree.Panel',
    alias: 'widget.treeMenu',
    title: 'Simple Tree',
    width: 200,
    height: 150,
    store: Ext.create('AM.store.MenuStore',{}),
    rootVisible: false,
}

);