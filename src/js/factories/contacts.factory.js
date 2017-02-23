angular
.module('avocado')
.factory('Contact', contactFactory);

contactFactory.$inject = ['API', '$resource'];
function contactFactory(API, $resource){
  return $resource(`${API}/contacts/:id`, { id: '@_id'}, {
    'new': { method: 'POST', url: `${API}/contacts` },
    'update': { method: 'PUT'}
  });
}
