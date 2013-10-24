window.Shortly = Backbone.View.extend({

  template: _.template(' \
      <h1>Shortly</h1> \
      <div class="navigation"> \
      <ul> \
        <li><a href="#" class="index">All Links</a></li> \
        <li><a href="#" class="create">Shorten</a></li> \
      </ul> \
      </div> \
      <div> \
        <input type="text" class="search" placeholder="Search URLs"></input> \
        <div class="sort visit">Visit</div> \
        <div class="sort name">Name</div> \
        <div class="sort">Sort by:</div> \
      </div> \
      <div id="container"></div>'
  ),

  events: {
    "click li a.index":  "renderIndexView",
    "click li a.create": "renderCreateView",
    "click .name, .visit": "sort",
    "keyup .search": function(e){
      //if(e.keyCode == 13){ // check for "enter" key
        this.filter();
      //}
    }
  },

  sort: function(e){
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
    $(".search").keyup(function(event){
      if(event.keyCode == 13){
        $(".search").change();
      }
    });
    console.log(this);
    $('body').append(this.render().el);
    this.renderIndexView(); // default view
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e){
    e && e.preventDefault();
    var links = new Shortly.Links();
    console.log(links.sort());
    var linksView = new Shortly.LinksView( {collection: links} );
    this.$el.find('#container').html( linksView.render().el );
    this.updateNav('index');
  },

  renderCreateView: function(e){
    e && e.preventDefault();
    var linkCreateView = new Shortly.LinkCreateView();
    this.$el.find('#container').html( linkCreateView.render().el );
    this.updateNav('create');
  },

  updateNav: function(className){
    this.$el.find('.navigation li a')
            .removeClass('selected')
            .filter('.'+className)
            .addClass('selected');
  }

});