document.querySelectorAll('[data-type="vue"]').forEach(dom => {
	let appId = dom.id
	vueApp[dom.id] = new Vue ({
		el: '#' + appId,
		data:{
			
		},
		// delimiters:['%{', '}'],
		watch:{

		},
		methods:{
			
		},
		mounted(){
			
		},
		created(){
			
		}
	})
})