document.querySelectorAll('[data-type="vue"]').forEach(dom => {
	let appId = dom.id
	vueApp[dom.id] = new Vue ({
		el: '#' + appId,
		data:{
			showMenu: false,
			currentTab: appId,
			gallery:[
				'assets/food-1.jpg',
				'assets/food-2.jpg',
				'assets/food-3.jpg',
				'assets/food-4.jpg',
				'assets/food-5.jpg',
				'assets/food-6.jpg',
			],
		},
		// delimiters:['%{', '}'],
		watch:{

		},
		methods:{
			toggleMenu(){
				this.showMenu = !this.showMenu
			},
			navigateHome(){
				location.href='/'
			}
		},
		mounted(){
			
		},
		created(){
			
		}
	})
})