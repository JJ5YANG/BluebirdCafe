document.querySelectorAll('[data-type="vue"]').forEach(dom => {
	let appId = dom.id
	vueApp[dom.id] = new Vue ({
		el: '#' + appId,
		data:{
			showMenu: false,
			currentTab: appId
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