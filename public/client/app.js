window.Shortly = Backbone.View.extend({

  template: Templates['navigation'],

  events: {
    "click li a.index":  "renderIndexView",
    "click li a.create": "renderCreateView",
    "keyup .search": function(e){
      //if(e.keyCode == 13){ // check for "enter" key
        this.filter();
      //}
    }
  },

  filter: function(){
    var targetString = $('.search').val();
    if(targetString){
      $('.link').css('display','none');
      $('.title:contains('+targetString+')').parent().parent().css('display','block');
    }else{
      $('.link').css('display','block');
    }
  },

  initialize: function(){
    console.log( "Shortly is running" );
    $('body').append(this.render().el);
    this.router = new Shortly.Router({el: this.$el.find('#container')});
    this.router.on("route", this.updateNav, this);
    Backbone.history.start({pushState: true});
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e){
    e && e.preventDefault();
    this.router.navigate("/", {trigger:true});
  },

  renderCreateView: function(e){
    e && e.preventDefault();
    this.router.navigate("/create", {trigger:true});
  },

  updateNav: function(className){
    this.$el.find('.navigation li a')
            .removeClass('selected')
            .filter('.'+className)
            .addClass('selected');
  }

});