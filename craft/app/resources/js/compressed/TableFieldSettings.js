/*!
 * Craft by Pixel & Tonic
 *
 * @package   Craft
 * @author    Pixel & Tonic, Inc.
 * @copyright Copyright (c) 2013, Pixel & Tonic, Inc.
 * @license   http://buildwithcraft.com/license Craft License Agreement
 * @link      http://buildwithcraft.com
 */
(function(d){var b="types-Table-columns",a="types[Table][columns]",c="types-Table-defaults",e="types[Table][defaults]";Craft.TableFieldSettings=Garnish.Base.extend({defaults:null,columnSettings:null,columnsTable:null,defaultsTable:null,init:function(g,h,f){this.defaults=h;this.columnSettings=f;this.initColumnsTable();this.initDefaultsTable(g)},initColumnsTable:function(){this.columnsTable=new Craft.EditableTable(b,a,this.columnSettings,{rowIdPrefix:"col",onAddRow:d.proxy(this,"onAddColumn"),onDeleteRow:d.proxy(this,"reconstructDefaultsTable")});this.initColumnSettingInputs(this.columnsTable.$tbody);this.columnsTable.sorter.settings.onSortChange=d.proxy(this,"reconstructDefaultsTable")},initDefaultsTable:function(f){this.defaultsTable=new Craft.EditableTable(c,e,f,{rowIdPrefix:"row"})},onAddColumn:function(f){this.reconstructDefaultsTable();this.initColumnSettingInputs(f)},initColumnSettingInputs:function(h){var g=h.find("td:first-child textarea, td:nth-child(3) textarea"),f=h.find("td:nth-child(4) select");this.addListener(g,"textchange","reconstructDefaultsTable");this.addListener(f,"change","reconstructDefaultsTable")},reconstructDefaultsTable:function(){var i=Craft.expandPostArray(Garnish.getPostData(this.columnsTable.$tbody)),f=Craft.expandPostArray(Garnish.getPostData(this.defaultsTable.$tbody)),h=i.types.Table.columns,l=f.types.Table.defaults;var g='<table id="'+c+'" class="editable shadow-box"><thead><tr>';for(var j in h){g+='<th scope="col" class="header">'+(h[j].heading?h[j].heading:"&nbsp;")+"</th>"}g+='<th class="header" colspan="2"></th></tr></thead><tbody>';for(var k in l){g+=Craft.EditableTable.getRowHtml(k,h,e,l[k])}g+="</tbody></table>";this.defaultsTable.$table.replaceWith(g);this.defaultsTable.destroy();delete this.defaultsTable;this.initDefaultsTable(h)}})})(jQuery);