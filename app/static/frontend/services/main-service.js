MainService.$inject = ['$http','$rootScope'];
export default function MainService($http,$rootScope){
  var MainService = {
    getJson:getJson,
    getGraph:getGraph
  };

return MainService

function getJson(){
  return $http.get('/api/trading_partners')
}
function getGraph(features_data,fileName){
  return $http.post('/api/create_chart', {'partners_data':features_data, 'fileName':fileName})
}

}
