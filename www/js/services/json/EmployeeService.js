var EmployeeService = function() {

    var url;

    this.initialize = function(serviceURL) {
	  //   alert("employservice.js ");
        //url = serviceURL ? serviceURL : "http://filippo-Studio-XPS-1640:5000/employees";
        url = serviceURL ? serviceURL : "http://fsdemosails.herokuapp.com/utenti";	    
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
	     //alert("employservice.js  - findById");
        return $.ajax({url: url + "/" + id});
    }

    this.findByName = function(searchKey) {
	     //alert("employservice.js  - findByName");
	     //alert("employservice.js  - findByName: url " + url  );
        return $.ajax({url: url + "?name=" + searchKey });
	//return $.ajax({url: url });

	    
    }
     this.findAll = function(searchKey) {
	     //alert("employservice.js  - findByName");
	     //alert("employservice.js  - findByName: url " + url  );
        return $.ajax({url: url });
	}


}