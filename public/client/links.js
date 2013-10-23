Shortly.Links = Backbone.Collection.extend({
  comparator: function(link){
    return -link.get('visits');
  },
  model: Shortly.Link,
  url: '/links'

});