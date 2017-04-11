angular.module("drdipaula", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","ngMap","drdipaula.controllers", "drdipaula.services"])
	.run(function($ionicPlatform,$window,$interval) {
		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			localforage.config({
				driver : localforage.INDEXEDDB,
				name : "drdipaula",
				storeName : "drdipaula",
				description : "The offline datastore for drdipaula app"
			});



		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider,$ionicConfigProvider){
	try{
		// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("drdipaula",{
		url: "/drdipaula",
			abstract: true,
			templateUrl: "templates/drdipaula-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("drdipaula.about_us", {
		url: "/about_us",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.casos", {
		url: "/casos",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-casos.html",
						controller: "casosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.casos_singles", {
		url: "/casos_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-casos_singles.html",
						controller: "casos_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.clinica_singles", {
		url: "/clinica_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-clinica_singles.html",
						controller: "clinica_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.contactar", {
		url: "/contactar",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-contactar.html",
						controller: "contactarCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.dashboard", {
		url: "/dashboard",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.datos_de_la_clnica", {
		url: "/datos_de_la_clnica",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-datos_de_la_clnica.html",
						controller: "datos_de_la_clnicaCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.doctores_singles", {
		url: "/doctores_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-doctores_singles.html",
						controller: "doctores_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.especialidades", {
		url: "/especialidades/:categories",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-especialidades.html",
						controller: "especialidadesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.especialidades_singles", {
		url: "/especialidades_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-especialidades_singles.html",
						controller: "especialidades_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.faqs", {
		url: "/faqs",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-faqs.html",
						controller: "faqsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.frame", {
		url: "/frame",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-frame.html",
						controller: "frameCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.google_map", {
		url: "/google_map",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-google_map.html",
						controller: "google_mapCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.home", {
		url: "/home",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-home.html",
						controller: "homeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.la_clicnica", {
		url: "/la_clicnica",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-la_clicnica.html",
						controller: "la_clicnicaCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.menu1", {
		url: "/menu1",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-menu1.html",
						controller: "menu1Ctrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.menu_1", {
		url: "/menu_1",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-menu_1.html",
						controller: "menu_1Ctrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.menu_2", {
		url: "/menu_2",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-menu_2.html",
						controller: "menu_2Ctrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.noticias", {
		url: "/noticias/:categories",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-noticias.html",
						controller: "noticiasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.noticias_singles", {
		url: "/noticias_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-noticias_singles.html",
						controller: "noticias_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.profecionaels", {
		url: "/profecionaels/:categories",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-profecionaels.html",
						controller: "profecionaelsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.profesionales", {
		url: "/profesionales",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-profesionales.html",
						controller: "profesionalesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.profesionales_singles", {
		url: "/profesionales_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-profesionales_singles.html",
						controller: "profesionales_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.reservas", {
		url: "/reservas",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-reservas.html",
						controller: "reservasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.video_singles", {
		url: "/video_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-video_singles.html",
						controller: "video_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.videos", {
		url: "/videos",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-videos.html",
						controller: "videosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("drdipaula.videos_singles", {
		url: "/videos_singles/:id",
		cache:false,
		views: {
			"drdipaula-side_menus" : {
						templateUrl:"templates/drdipaula-videos_singles.html",
						controller: "videos_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/drdipaula/dashboard");
});
