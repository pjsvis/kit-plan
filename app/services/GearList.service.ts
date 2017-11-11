interface GearList{
    Item: string;
    Ranking: string;
    // Description or Purpose: string;
    Example: string;
// More Info: string
Selection: string;
Weight: number;
// Pre Hike Comments: string;
// Certain? boolean;
Alternate: string;
// Weighed?: boolean;
// In-hand?: boolean;
Packed: boolean;
// Other Notes: string;
// Post-hike Comments: string;

}
interface IGearListService {
    all():  any;
}
angular
    .module('app')
    .factory('GearListService', function($http: ng.IHttpService) {
        let fac: any = {
            all: all
        };
        return fac;
        function all() {
            return $http
                .get('app/services/gear-list.json')
                .then(function(response:any) {
                    return response;
                });
        }
    });
