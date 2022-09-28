const navlinks = [
    {
        id: 1,
        name:"Home",
        link:"#",
        svg: `<svg class="active" xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor"  viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" /><path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" /></svg>`

    },
    {
        id: 2,
        name:"Student Works",
        link:"#",
        svg: ` <svg version="1.1" id="Capa_1"   width="20" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 779.11 779.11" style="enable-background:new 0 0 779.11 779.11;" xml:space="preserve"><g><g><path d="M662.914,632.351H530.07H254.474c-11.49,0-20.806,9.315-20.806,20.806v12.805c0,11.49,9.315,20.81,20.806,20.81h275.598h132.844h68.82v-54.418L662.914,632.351L662.914,632.351z" /><circle cx="211.187" cy="189.625" r="115.19" /><path d="M492.234,472.147l-263.969-0.146l-6.25-0.02v-30.632l-0.217-25.64c0-61.245-49.651-110.898-110.899-110.898c-2.075,0-4.136,0.07-6.184,0.182l-0.156-0.182C46.813,304.813,0,351.625,0,409.372v295.303h222.015V578.876l-2.937-0.231c-0.209-0.019-0.261,0.002-0.391,0.002c-15.021,0-29.417-6.324-39.562-17.399l-90.112-98.363c-2.873-3.135-2.66-8.003,0.476-10.874c3.133-2.873,8.003-2.659,10.874,0.476l90.111,98.362c7.322,7.993,17.648,12.881,28.521,13.039c0.723,0.01,10.594,0.152,10.594,0.152h262.645c25.375,0,45.947-20.571,45.947-45.947C538.182,492.717,517.609,472.147,492.234,472.147z" /><path d="M765.197,309.111c-10.744-3.681-22.439,2.049-26.123,12.794l-87.209,254.59H339.803c-11.356,0-20.567,9.206-20.567,20.564s9.211,20.566,20.567,20.566h326.507c6.994,0,13.168-3.503,16.879-8.841c1.283-1.694,2.33-3.607,3.059-5.729L778,335.225C781.67,324.486,775.947,312.79,765.197,309.111z" /></g></g></svg> `

    },
    {
        id: 3,
        name:"Placements",
        link:"#",
        svg: `<svg id="Layer_1" data-name="Layer 1"  width="20" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 97.84"><path class="cls-1" d="M29.83,85V48.11H46.44c7,1.26,14.08,5.08,21.12,9.51h12.9c5.84.36,8.89,6.27,3.22,10.16-4.52,3.32-10.49,3.13-16.6,2.58-4.22-.21-4.41,5.47,0,5.48,1.52.12,3.18-.24,4.64-.24,7.63,0,13.92-1.46,17.77-7.5l1.93-4.51,19.19-9.51C120.21,50.92,127,61,120,67.94A251.48,251.48,0,0,1,77.23,93.1c-10.58,6.44-21.17,6.22-31.76,0L29.83,85ZM57.71,6.57H72.52V2.32A2.32,2.32,0,0,1,74.84,0h17a2.32,2.32,0,0,1,2.32,2.32V6.57h14.81a3.27,3.27,0,0,1,2.31,1,3.31,3.31,0,0,1,1,2.32V18a73.14,73.14,0,0,1-11.39,6.41,64.63,64.63,0,0,1-12.73,4.21V25.56a2.46,2.46,0,0,0-2.46-2.46H81a2.46,2.46,0,0,0-2.46,2.46v3a64.46,64.46,0,0,1-12.42-4.14A73.75,73.75,0,0,1,54.43,17.8v-8a3.29,3.29,0,0,1,3.28-3.28ZM90,3.17H76.61a.27.27,0,0,0-.2.08.31.31,0,0,0-.09.21v3h14v-3a.29.29,0,0,0-.09-.21A.3.3,0,0,0,90,3.17ZM85.61,25.29H81a.26.26,0,0,0-.19.08.22.22,0,0,0-.08.19v9.7a.29.29,0,0,0,.08.19.25.25,0,0,0,.19.07h4.59a.29.29,0,0,0,.19-.07.25.25,0,0,0,.08-.19v-9.7a.26.26,0,0,0-.08-.19.22.22,0,0,0-.19-.08Zm2.46,6.84a1.61,1.61,0,0,0,.37,0,69.06,69.06,0,0,0,14-4.56,75.88,75.88,0,0,0,9.77-5.29V44a3.23,3.23,0,0,1-1,2.31,3.27,3.27,0,0,1-2.31,1H57.71a3.23,3.23,0,0,1-2.31-1,3.27,3.27,0,0,1-1-2.31V22a75.59,75.59,0,0,0,10.09,5.49,69.06,69.06,0,0,0,14,4.56h.06v3.16A2.46,2.46,0,0,0,79.28,37a2.42,2.42,0,0,0,1.74.72h4.59A2.42,2.42,0,0,0,87.35,37a2.46,2.46,0,0,0,.72-1.73V32.13ZM2.17,44.56H22.66a2.18,2.18,0,0,1,2.17,2.18V86.57a2.18,2.18,0,0,1-2.17,2.17H2.17A2.18,2.18,0,0,1,0,86.57V46.74a2.18,2.18,0,0,1,2.17-2.18Zm10.25,6.71A3.23,3.23,0,1,1,9.19,54.5a3.23,3.23,0,0,1,3.23-3.23Z" /></svg>`


    },
    {
        id: 4,
        name:"Testimonals",
        link:"#",
        svg: ` <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="20" height="25" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4797.3,4992c-504.9-84.2-950.5-457.1-1115-935.2c-36.3-105.2-44-176-49.7-468.6c-5.7-246.7-17.2-371-40.2-439.9c-93.7-290.7,21-671.3,290.7-962c55.5-61.2,99.5-137.7,135.8-233.3c28.7-78.4,68.9-170.2,88-202.7c21-34.4,36.3-95.6,36.3-147.3c0-84.2-3.8-91.8-145.4-218c-248.6-221.8-390.2-317.5-667.5-443.7C2318.6,478.4,2213.4,421,2020.2,231.7c-158.7-154.9-172.1-200.8-172.1-587.2c0-424.6,21-466.7,269.7-550.8c1447.8-495.4,4324.3-495.4,5772.1,0c248.6,84.1,269.7,126.2,269.7,550.8c0,386.3-13.4,432.2-172.1,587.2c-170.2,166.4-348.1,267.8-1004.1,568c-304.1,139.6-598.7,285-650.3,321.3c-53.6,36.3-177.9,137.7-277.3,225.7L5874,1505.4l1.9,105.2c0,74.6,19.1,147.3,72.7,265.8c91.8,212.3,97.5,223.8,223.8,373c122.4,141.5,214.2,315.6,246.7,459c30.6,133.9,26.8,353.8-7.7,441.8c-15.3,42.1-32.5,177.9-38.2,313.7c-9.6,212.3-22.9,325.1-86.1,778.4c-32.5,225.7-166.4,438-317.5,504.9c-42.1,17.2-126.2,42.1-187.5,55.5c-59.3,11.5-174,51.6-254.4,88C5286.9,5001.6,5053.6,5034.1,4797.3,4992z" /><path d="M1983.9,3932.5c-298.4-84.2-558.5-319.4-654.1-594.8c-26.8-76.5-36.3-154.9-36.3-313.7c0-137.7-11.5-250.6-30.6-325.1c-26.8-93.7-28.7-130.1-9.6-221.9c28.7-143.4,80.3-250.5,176-357.6c76.5-88,187.4-319.4,202.7-424.6c7.6-49.7-5.7-68.9-103.3-154.9c-187.4-162.6-290.7-227.6-569.9-351.9C429,952.7,210.9,820.7,142.1,690.7c-28.7-55.5-34.4-109-34.4-311.7c0-231.4,1.9-246.7,45.9-290.7c80.3-80.3,573.8-206.6,1006-256.3c99.5-11.5,218-26.8,260.1-32.5l78.4-9.6l9.6,141.5c17.2,267.8,154.9,460.9,476.2,669.4c202.7,132,361.5,210.4,893.2,443.7c233.3,103.3,424.6,193.2,424.6,200.8s-36.3,30.6-80.3,49.7c-84.2,38.3-315.6,214.2-395.9,300.3c-34.4,38.2-42.1,63.1-34.4,122.4c13.4,109,89.9,269.7,183.6,388.2c158.8,197,227.6,438,176,596.7c-11.5,38.3-30.6,170.2-40.2,294.5c-38.3,478.1-59.3,577.6-147.3,694.3c-51.6,65-175.9,133.9-246.7,135.8c-22.9,0-99.4,26.8-170.2,59.3C2389.3,3961.2,2152.2,3980.3,1983.9,3932.5z" />
           <path d="M7580,3932.5c-292.6-80.3-543.2-306-652.2-583.3c-34.4-84.2-70.8-482-74.6-803.3c-1.9-122.4,5.8-158.7,51.7-248.6c28.7-57.4,86.1-145.4,128.1-195.1c80.3-95.6,189.3-336.6,189.3-416.9c0-76.5-242.9-292.6-438-392.1l-101.4-51.6l455.2-214.2c464.8-218,682.8-334.7,820.5-438c271.6-204.6,382.5-386.3,399.7-644.5c3.8-68.9,9.6-132,9.6-141.5c1.9-21,281.1-1.9,556.6,38.3c468.6,68.9,853,170.2,929.5,246.7c44,44,45.9,59.3,45.9,290.7c0,202.7-5.8,256.3-34.4,311.7c-68.8,130.1-285,262-816.7,497.3c-147.3,66.9-306,147.3-353.8,177.9c-156.9,107.1-325.1,265.8-325.1,309.8c0,70.8,133.9,359.6,204.6,436.1c110.9,122.4,183.6,300.3,183.6,451.4c1.9,68.9-9.6,145.4-21,168.3c-13.4,22.9-22.9,97.5-22.9,168.3c0,68.9-13.4,235.2-30.6,369.1c-47.8,386.3-126.3,506.8-369.1,556.6c-57.4,13.4-112.8,30.6-124.3,38.3c-11.5,9.6-74.6,36.3-139.6,57.4C7912.8,3966.9,7723.5,3972.6,7580,3932.5z" />
           <path d="M8853.8-1459.1c-84.1-168.3-151.1-279.2-172.1-286.9c-19.1-5.7-133.9-23-254.3-40.2c-376.8-51.7-363.4-17.2-107.1-275.4l221.9-221.8l-51.7-292.6c-26.7-160.7-45.9-294.6-40.2-300.3c3.8-5.7,128.2,53.6,275.4,132l265.9,139.6l273.5-141.5c151.1-78.4,277.3-141.5,281.2-137.7c3.8,3.8-17.2,143.4-45.9,307.9l-53.6,298.3l218,216.1c172.1,174.1,208.5,219.9,181.7,229.5c-17.2,5.7-139.6,26.8-271.6,44c-132,19.1-254.4,38.3-273.5,44c-22.9,5.7-82.2,107.1-166.4,285c-72.7,151.1-133.9,275.4-137.7,275.4C8993.4-1183.7,8928.4-1308,8853.8-1459.1z" /><path d="M868.8-1765.1l-135.8-273.5l-317.5-45.9l-315.6-44l223.8-210.4c172.1-162.6,223.8-223.8,223.8-262c0-26.8-21-168.3-47.8-315.6c-26.8-145.4-47.8-267.8-47.8-271.6c0-1.9,126.2,61.2,281.2,143.4l279.2,145.4l265.9-137.7c147.3-76.5,271.6-135.8,277.3-128.1c5.7,5.7-11.5,141.5-40.2,302.2l-49.7,290.7l221.9,223.8l221.9,221.9l-141.5,21c-76.5,11.5-216.1,30.6-309.8,44l-170.2,23l-132,275.4c-72.7,151.1-135.8,273.5-139.6,273.5C1010.4-1489.7,945.3-1614,868.8-1765.1z" /><path d="M2704.9-2644.9l-135.8-273.5l-298.4-42.1c-164.5-22.9-302.2-47.8-307.9-53.5c-5.7-5.7,89.9-105.2,212.3-223.8l223.8-212.3l-45.9-258.2c-24.9-141.5-49.7-283.1-53.5-311.7c-11.5-53.5-7.7-51.6,269.7,93.7l279.2,147.3l265.9-137.7c147.3-76.5,271.6-135.8,277.3-130c5.7,5.7-13.4,143.4-40.2,304.1l-49.7,292.6l221.9,216.1c122.4,118.6,219.9,219.9,216.1,221.9c-3.8,3.8-145.4,26.8-311.7,49.7l-304.1,45.9l-132,273.5c-72.7,151.1-135.8,273.5-139.6,273.5C2846.4-2369.4,2781.4-2493.7,2704.9-2644.9z" /><path d="M7013.9-2642.9l-130.1-275.4l-304.1-44c-168.3-22.9-307.9-45.9-311.8-49.7c-3.8-1.9,93.7-103.3,216.1-221.9L6706-3450l-49.7-292.6c-26.8-160.7-45.9-298.4-40.2-304.1c5.8-5.7,130.1,53.5,277.3,128.1l264,139.6l281.1-147.3c279.3-147.3,281.2-147.3,271.6-93.7c-5.8,28.7-30.6,170.2-57.4,311.7l-45.9,258.2l219.9,206.6c120.5,114.8,218,214.2,218,221.9c0,9.6-135.8,34.4-304.1,59.3l-302.2,44l-131.9,265.9c-72.7,147.2-137.7,271.6-147.3,277.3C7151.6-2371.4,7086.6-2489.9,7013.9-2642.9z" /><path d="M4856.5-3350.6l-135.8-273.5l-309.8-45.9l-307.9-45.9l223.8-223.8l221.9-223.8l-49.7-300.3c-28.7-166.4-47.8-304.1-45.9-306c3.8-1.9,126.2,59.3,271.6,137.7c145.4,76.5,271.6,139.6,279.2,139.6s133.9-63.1,279.2-141.5c147.3-76.5,267.8-137.7,271.6-135.8c1.9,1.9-17.2,139.6-45.9,306l-49.7,300.3l221.9,223.8l223.8,223.8l-307.9,45.9l-309.9,45.9l-135.8,273.5c-76.5,151.1-141.5,273.5-147.3,273.5C4998.1-3077.1,4933.1-3199.5,4856.5-3350.6z" /></g></g></svg>`

    },
    {
        id: 5,
        name:"Job Portal",
        link:"#",
        svg: ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16"><path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" /></svg> `

    },
    {
        id: 6,
        name:"Contact",
        link:"#",
        svg: `  <svg viewBox="0 0 1024 1024" version="1.1"  width="20" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M688.010562 935.276733c-2.06996 28.351446-21.396582 52.71297-49.023042 61.779793l-85.928322 24.959513c-35.584305 8.575833-71.572602-12.629753-80.36143-47.359075a82.558388 82.558388 0 0 1-0.853984-3.839925c-10.303799-36.820281 9.962805-75.198531 46.677089-88.382274l85.928321-24.916513a62.931771 62.931771 0 0 1 63.230765 17.40766 328.740579 328.740579 0 0 0 155.346966-143.933189h-21.866573c-69.054651-3.690928-122.067616-61.140806-118.610683-128.53149V473.802746c-3.413933-67.368684 49.577032-124.797563 118.610683-128.48749h29.631422c4.244917 0 8.489834 0.233995 12.692752 0.724985C795.614461 167.44073 608.418117 60.541818 425.402691 107.260905c-119.80566 30.569403-213.371833 121.87462-244.71022 238.779336a109.437863 109.437863 0 0 1 12.671752-0.725985h29.652421c68.969653 3.754927 121.897619 61.161805 118.483686 128.48849v128.487491c3.433933 67.391684-49.557032 124.840562-118.611683 128.531489H193.236226c-68.948653-3.754927-121.87462-61.097807-118.504686-128.402492V473.802746c0-3.327935 0-6.65587 0.341994-9.940806a58.473858 58.473858 0 0 1-0.341994-6.101881C74.73154 204.539005 270.909709 0 512.034999 0c241.14729 0 437.325458 204.540005 437.325459 457.761059 0 2.02696-0.127998 4.07492-0.362993 6.101881 0 3.284936 0.362993 6.612871 0.362993 9.940806v128.48749a131.987422 131.987422 0 0 1-49.279038 104.297963C864.283119 807.790223 787.677616 890.34861 688.010562 935.147735v0.127998z" /></svg> `

    },
    {
        id: 7,
        name:"Blog",
        link:"#",
        svg: `  <svg width="20" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"> <defs></defs> <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 61.296 90 c 15.692 0 28.438 -12.783 28.527 -28.389 L 90 38.633 l -0.266 -1.25 L 88.98 35.81 l -1.275 -0.986 C 86.05 33.525 77.659 34.912 75.4 32.86 c -1.603 -1.464 -1.853 -4.109 -2.338 -7.694 c -0.901 -6.943 -1.471 -7.305 -2.559 -9.659 C 66.555 7.149 55.835 0.868 48.471 0 H 28.523 C 12.83 0 0 12.802 0 28.438 v 33.173 C 0 77.217 12.83 90 28.523 90 L 61.296 90 L 61.296 90 z M 28.886 23.233 h 15.815 c 3.02 0 5.465 2.451 5.465 5.43 c 0 2.967 -2.445 5.438 -5.465 5.438 H 28.886 c -3.02 0 -5.46 -2.472 -5.46 -5.438 C 23.426 25.684 25.866 23.233 28.886 23.233 z M 23.426 61.191 c 0 -2.978 2.44 -5.411 5.46 -5.411 h 32.135 c 3 0 5.436 2.433 5.436 5.411 c 0 2.938 -2.436 5.41 -5.436 5.41 H 28.886 C 25.866 66.601 23.426 64.13 23.426 61.191 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /> </g> </svg> `

    },
    {
        id: 8,
        name:"Infrastructure",
        link:"#",
        svg: `  <svg width="20" height="24" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">  <path  d="M904.533333 853.333333V341.333333a68.266667 68.266667 0 0 0-68.266666-68.266666h-102.4a34.133333 34.133333 0 0 1-34.133334-34.133334V136.533333a68.266667 68.266667 0 0 0-68.266666-68.266666H187.733333a68.266667 68.266667 0 0 0-68.266666 68.266666v716.8a34.133333 34.133333 0 0 1-34.133334 34.133334H34.133333a34.133333 34.133333 0 1 0 0 68.266666h955.733334a34.133333 34.133333 0 1 0 0-68.266666h-51.2a34.133333 34.133333 0 0 1-34.133334-34.133334zM324.7104 682.581333h-34.133333a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133333a34.133333 34.133333 0 0 1 34.133334-34.133334h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133334v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333z m0-204.8h-34.133333a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133333a34.133333 34.133333 0 0 1 34.133334-34.133334h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133334v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333z m0-204.8h-34.133333a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133333a34.133333 34.133333 0 0 1 34.133334-34.133334h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133334v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333z m204.8 409.6h-34.133333a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133333a34.133333 34.133333 0 0 1 34.133334-34.133334h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133334v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333z m0-204.8h-34.133333a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133333a34.133333 34.133333 0 0 1 34.133334-34.133334h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133334v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333z m0-204.8h-34.133333a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133333a34.133333 34.133333 0 0 1 34.133334-34.133334h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133334v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333z m238.404267 614.4h-68.266667a34.133333 34.133333 0 0 1-34.133333-34.133333v-136.533333a34.133333 34.133333 0 0 1 34.133333-34.133334h68.266667a34.133333 34.133333 0 0 1 34.133333 34.133334v136.533333a34.133333 34.133333 0 0 1-34.133333 34.133333z" /> </svg> `

    },
    {
        id: 9,
        name:"More",
        link:"#",
        svg: ` <svg viewBox="0 0 1024 1024" version="1.1"  width="20" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M511.999488 63.645552c-246.99951 0-447.230857 200.231347-447.230857 447.230857 0 246.998487 200.23237 447.231881 447.230857 447.231881 246.99951 0 447.229834-200.233394 447.229834-447.231881C959.229323 263.876899 758.998999 63.645552 511.999488 63.645552zM309.68776 579.89432c-38.145785 0-69.070098-30.924313-69.070098-69.070098s30.92329-69.070098 69.070098-69.070098 69.070098 30.92329 69.070098 69.070098S347.834568 579.89432 309.68776 579.89432zM515.868609 579.89432c-38.145785 0-69.070098-30.924313-69.070098-69.070098s30.92329-69.070098 69.070098-69.070098 69.070098 30.92329 69.070098 69.070098S554.014394 579.89432 515.868609 579.89432zM720.007963 579.89432c-38.145785 0-69.070098-30.924313-69.070098-69.070098s30.924313-69.070098 69.070098-69.070098 69.070098 30.92329 69.070098 69.070098S758.154771 579.89432 720.007963 579.89432z" /> </svg> `

    },

]

$.each(navlinks, function (key, e) {
    $('.navlinks ul').append(`<li>` + e.svg + ` <a href=` + e.link + `>` + e.name + `</a></li> `)

});


$('.navlinks ul li').each(function (i, e) {
    if(i === 0){
        $(this).addClass("active-li")
        $(this).children("a").addClass("active")

    }
    if(i === 8){
        $(this).addClass("more-link")
        $(this).children("a").append( `<i class="bi bi-chevron-down"></i>`)
        $(this).append(`<div class="dropdown2 "><div class="links"><a href="">Blog</a><a href="">Infrastructure</a></div></div>`)
    }

});


const onlineCourses =[
    {
        id:1,
        link:"#",
        name:"Web Design & Development",

    },
    {
        id:2,
        link:"#",
        name:"Garaphic design",

    },
    {
        id:3,
        link:"#",
        name:"UX UI design",

    },
    {
        id:4,
        link:"#",
        name:"Data science",

    },
    {
        id:5,
        link:"#",
        name:"Digital Marketing",

    },
]

const offlineCourses =[
    {
        id:1,
        link:"#",
        name:"Advanced graphic design",

    },
    {
        id:2,
        link:"#",
        name:"Web Design & development",

    },
    {
        id:3,
        link:"#",
        name:"UX UI design Course",

    },
    {
        id:4,
        link:"#",
        name:"Flim Editing Course",

    },
    {
        id:5,
        link:"#",
        name:"Data Science Course",

    },
    {
        id:6,
        link:"#",
        name:"Digital Marketing Course",

    },
    {
        id:7,
        link:"#",
        name:"Designer Pro Course",

    },
    

]

$.each(onlineCourses, function (key, e) {
    $('.online div ul').append(`<li> <a href=` + e.link + `>` + e.name + `</a></li> `)

});

$.each(offlineCourses, function (key, e) {
    $('.offline div ul').append(`<li> <a href=` + e.link + `>` + e.name + `</a></li> `)

});