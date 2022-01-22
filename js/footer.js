const footer = document.getElementById('footer');
footer.innerHTML = `
<div class="w-full" style="background-color:var(--darkblue);">
    <div class="container mx-auto">
        <div style="padding:2% 5%">
            <div class="my-10 md:my-0">
                <img class="hidden md:block mx-auto md:mx-0" @click="navigateHome()" src="assets/logo-white.png" style="object-fit: contain; max-width:250px; cursor: pointer;" />
                <img class="md:hidden mx-auto md:mx-0" @click="navigateHome()" src="assets/logo-white-simple.png" style="object-fit: contain; width:80px; cursor: pointer;" />
                <div class="md:grid grid-cols-3 md:gap-16 lg:gap-20 xl:gap-28 mt-8">
                    <div style="color:white">
                        <div class="text-center md:text-left md-font-size bodyFont mb-2">
                            Follow us
                        </div>
                        <div class="flex justify-center md:justify-start">
                            <a href="https://www.facebook.com/northpoint.np/" target="_blank"><svg class="mr-3" width="25" height="25" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFF" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a>
                            <a href="https://www.instagram.com/northpoint.realty/?hl=en" target="_blank"><svg class="mr-3" width="25" height="25" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFF" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg></a>
                            <a href="mailto:info@northpointrealty.ca"><svg width="25" height="25" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-square" class="svg-inline--fa fa-envelope-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFF" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"></path></svg></a>
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0" style="color:white">
                        <div class="text-center md:text-left md-font-size bodyFont mb-2">Navigate</div>
                        <div class="text-center md:text-left xs-font-size bodyFont md:flex">
                            <div>
                                <div><a href="/property-management">Property Management</a></div>
                                <div><a href="/tenant-placement">Tenant Placement</a></div>
                                <div><a href="/tenant-rental-application">Tenant Rental Application</a></div>
                            </div>
                            <div class="md:ml-10">
                                <div><a href="/faq">FAQ</a></div>
                                <div><a href="/contact">Contact Us</a></div>
                                <div><a href="/properties">Properties</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0" style="color:white">
                        <div class="text-center md:text-left md-font-size bodyFont mb-2">
                            Head Office
                        </div>
                        <div class="text-center md:text-left xs-font-size bodyFont">
                            <a href="https://www.google.com/maps?q=47+Redlea+Ave+Scarborough,+ON&rlz=1C1CHBF_enCA890CA890&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjztfuy97vyAhXJVc0KHXHeBqAQ_AUoAXoECAEQAw" target="_blank">
                                47 Redlea Ave<br>Scarborough, ON
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;