angular
.module('avocado')
.factory('Period', periodFactory);

periodFactory.$inject = ['API', '$resource'];
function periodFactory(API, $resource){
  return $resource(`${API}/periods/:id`, { id: '@_id'}, {
    'new': { method: 'POST', url: `${API}//periods/new` },
    'update': { method: 'PUT'}
  });
}
