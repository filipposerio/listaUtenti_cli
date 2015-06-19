// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
   var htpl = $("#home-tpl").html();
   var homeTpl = Handlebars.compile(htpl);
   var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
	    alert("INITIALIZED");
	renderHomeView();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready',  showDialog, false);
 
  

    /* ---------------------------------- Local Functions ---------------------------------- */
    
    
    function showDialog () {
					if (navigator.notification) { // override default HTML alert with native dialog
						window.alert = function (message) {
										navigator.notification.alert(
											message, // message
											null, // callback
											"native device  alert Workshop", // title
											'OK' // buttonName
										);
									};
					}
	}
   
	
    function findByName() {
	//alert("app.js");
		service.findByName($('.search-key').val()).done(function (employees, err) {
			$('.content').html(employeeListTpl(employees));		
		});
	}
    


   
    
	
    function findAll() {
	service.findAll().done(function (employees, err) {
		 $('.content').html(employeeListTpl(employees));
        });
    }
    
     function find() {
		//alert("app.js");
	        console.log($('.search-key').val());
		if  ($('.search-key').val() == '') {
			findAll()
		}
		else {
			findByName()	;
		}
	}
    
    function renderHomeView() {
	    alert("passo dalla renderHomeView");
	    $('body').html(homeTpl());
	    find();
    	    $('.search-key').on('keyup',find);
    }
   
    function renderHomeViewOld() {
	    var html  =
		"<h1>Lista utenti</h1>" +
		"<input class='search-key' type='search' placeholder='Inserisci il nominativo' />" +
		"<ul class='list employee-list'>elenco</ul>" ;
	    $('body').html(html);
	    $('.search-key').on('keyup',findByName);
    }
  

}());