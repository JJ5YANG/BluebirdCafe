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
			devLocation: {
				logo:'assets/logos/logo.png'
			},
		},
		// delimiters:['%{', '}'],
		watch:{

		},
		methods:{
			toggleMenu(){
				this.showMenu = !this.showMenu
			},
			navigateHome(){
				location.href='/BluebirdCafe'
			},
			selectMarker(marker) {
				if(Object.keys(this.selectedMarker).length != 0) this.selectedMarker.closeInfoWindow()
				let self = this
				let found = self.vectorLayer._geoList.find(x => x._coordinates.x == marker.geometry.location.lng && x._coordinates.y == marker.geometry.location.lat)
				self.selectedMarker = found
				// console.log('marker', marker, this.map, this.vectorLayer)
				if(self.selectedMarker) {
					self.selectedMarker.openInfoWindow()
				}
			},
		},
		mounted(){
			if (appId == 'vue-contact'){
				console.log('MOUNTED RAN')
                    let self = this
                    let x = this.devLocation
                    this.map = new maptalks.Map('map', {
						center: [-64.774500, 46.088820],
						scrollWheelZoom:false,
						zoom: 16,
						zoomControl: {
							'position'  : 'bottom-right',
							'slider'    : false,
							'zoomLevel' : false
						},
						minZoom: 12,
                		maxZoom: 20,
						baseLayer: new maptalks.TileLayer('base', {
						'urlTemplate' : `http://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png`,
						'subdomains'  : ['a','b','c','d'],
						'attribution'  : '&copy; <a href="http://www.osm.org/copyright">OSM</a> contributors, '+
						'&copy; <a href="https://carto.com/attributions">CARTO</a>',
						})
					});

                    setTimeout(() => {
                        if (this.vectorLayer) this.map.removeLayer(this.vectorLayer);
                        this.vectorLayer = new maptalks.VectorLayer('vector', {
                            enableAltitude: true,
                            drawAltitude: {
                                lineWidth: 2,
                                lineColor: '#aaa'
                            }
                        }).addTo(self.map);
                        let iconUrl = self.devLocation.logo
                        let marker = new maptalks.Marker(
                            [-64.774500, 46.088820],
                            {
                                cursor : 'pointer',
                                'symbol' : {
                                    'markerFile'   : iconUrl || '',
                                    'markerWidth'  : 75,
                                    'markerHeight' : 75,
                                    'markerDx'     : 0,
                                    'markerDy'     : 0,
                                    'markerOpacity': 1
                                }
                            }
                        )
                        marker.addTo(self.vectorLayer)
                        
                        marker.setInfoWindow({
                            'autoCloseOn': 'click',
                            'autoPan': false,
                            'single': false,
                            'width': 383,
                            'height': 105,
                            'custom': true,
                            'dx': 0,
                            'dy': -20,
                            'content': `<div class="infobox-content relative">
                                    <div class="bodyFont" style="padding: 10px 20px 0 20px; max-width: 240px; font-size: 16px;">The Bluebird Cafe</div>
                                    <div style="padding: 0 20px 10px 20px;"></div>
                                    </div>`
                        });
                    }, 500)
			}
		},
		created(){
			
		}
	})
})