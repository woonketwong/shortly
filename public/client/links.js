Shortly.Links = Backbone.Collection.extend({
  comparator: function(link){
     return -link.get('visits');
  },
  model: Shortly.Link,
  url: '/links',
  // comparator: function(link, attr) {
  //   attr = attr || 'visits';
  //   return -link.get(attr);
  // }
  changeSort: function(keyString){
    this.comparator = function(link){
      return -link.get(keyString);
    };
    // } else if (keyString === "title"){
    //   this.comparator = function(link){
    //     return -link.get('title');
    //   };
    // }
  }
});