$(document).ready(function() {
 if (!!sessionStorage.user_id) {
 } else {
   new AuthenticationController()
 }

})
