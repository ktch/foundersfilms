/*!
 * Craft by Pixel & Tonic
 *
 * @package   Craft
 * @author    Pixel & Tonic, Inc.
 * @copyright Copyright (c) 2013, Pixel & Tonic, Inc.
 * @license   http://buildwithcraft.com/license Craft License Agreement
 * @link      http://buildwithcraft.com
 */
(function(a){Craft.QuickPostWidget=Garnish.Base.extend({params:null,initFields:null,$widget:null,$form:null,$formClone:null,$spinner:null,$errorList:null,loading:false,init:function(b,c,d){this.params=c;this.initFields=d;this.$widget=a("#widget"+b);this.$form=this.$widget.find("form:first");this.$spinner=this.$form.find(".spinner");this.$formClone=this.$form.clone();this.initForm()},initForm:function(){this.addListener(this.$form,"submit","onSubmit");this.initFields()},onSubmit:function(b){b.preventDefault();if(this.loading){return}this.loading=true;this.$spinner.removeClass("hidden");var d=Garnish.getPostData(this.$form),c=a.extend({enabled:1},d,this.params);Craft.postActionRequest("entries/saveEntry",c,a.proxy(function(e){if(this.$errorList){this.$errorList.children().remove()}if(e.success){Craft.cp.displayNotice(Craft.t("Entry saved."));var g=this.$formClone.clone();this.$form.replaceWith(g);this.$form=g;this.initForm();if(typeof Craft.RecentEntriesWidget!="undefined"){for(var h=0;h<Craft.RecentEntriesWidget.instances.length;h++){var k=Craft.RecentEntriesWidget.instances[h];if(!k.params.sectionId||k.params.sectionId==this.params.sectionId){k.addEntry({url:e.cpEditUrl,title:e.entry.title,postDate:e.postDate,username:e.author.username})}}}}else{Craft.cp.displayError(Craft.t("Couldn’t save entry."));if(e.errors){if(!this.$errorList){this.$errorList=a('<ul class="errors"/>').insertAfter(this.$form)}for(var j in e.errors){for(var h=0;h<e.errors[j].length;h++){var f=e.errors[j][h];a("<li>"+f+"</li>").appendTo(this.$errorList)}}}}this.loading=false;this.$spinner.addClass("hidden")},this))}})})(jQuery);