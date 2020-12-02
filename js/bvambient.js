/*-------------------------

BVAmbient - VanillaJS Particle Background
https://bmsvieira.github.io/BVAmbient/

Made by: Bruno Vieira

--------------------------- */

var isPaused = false;

class BVAmbient {

    constructor({
        selector = 'defaultId',
        particle_number = "50",
        particle_maxwidth = "30",
        particle_minwidth = "5",
        particle_radius = "50",
        particle_opacity = true,
        particle_colision_change = true,
        particle_background = "#ededed",
        particle_image = {
            image: false,
            src: ""
        },
        particle_trail = {
              trail: false,
              opacity: "0.1",
              background: "#58c70c",
              length: 300
        },
        responsive = [
            {
              breakpoint: "default"
            }
        ],
        fps = "2"
    }) 
    {
        // Define Variables
        this.selector = selector.substring(1);
        this.particle_number = particle_number;
        this.fps = fps;
        this.particle_maxwidth = particle_maxwidth;
        this.particle_minwidth = particle_minwidth;
        this.particle_radius = particle_radius;
        this.particle_colision_change = particle_colision_change;
        this.particle_background = particle_background;
        this.particle_image = particle_image; 
        this.particle_trail = particle_trail;
        this.responsive = responsive;
        this.particle_opacity = particle_opacity;

        // Global Variables
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var selector = this.selector;
        var fps = this.fps;
        var isPlaying = true;
        var particle_maxwidth = this.particle_maxwidth;
        var particle_minwidth = this.particle_minwidth;
        var particle_radius = this.particle_radius;
        var particle_colision_change = this.particle_colision_change;
        var particle_background = this.particle_background;
        var particle_image = this.particle_image;
        var particle_trail = this.particle_trail;
        var responsive = this.responsive;
        var particle_opacity = this.particle_opacity;
        var trail_count = 0;

        // Add movement to particle
        this.MoveParticle = function(element) {

                // Moving Directions
                var top_down = ['top', "down"];
                var left_right = ["left", "right"];

                // Random value to decide wich direction follow
                var direction_h = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                var direction_v = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

                // Direction
                var d_h = left_right[direction_h];
                var d_v = top_down[direction_v];

                var pos = 0, ver = 0, element_width = element.offsetWidth; 
                var rect_main = document.getElementById(selector);

                // Change particle size
                function ChangeParticle(particle)
                {

                    // Check if random color is enabled, change particle color when colides
                    if(particle_background == "random") { particle.style.backgroundColor = getRandomColor(); }

                    // Get random number based on the width and height of main div
                    var RandomWidth = Math.random() * (particle_maxwidth - particle_minwidth) + particle_minwidth;
                    particle.style.width = RandomWidth+"px";
                    particle.style.height = RandomWidth+"px";

                }

                // Set frame to move particle
                function SetFrame() {

                    if (isPlaying) setTimeout(SetFrame, 1000 / fps);

                            // Element offset positioning
                            pos = element.offsetTop; 
                            ver = element.offsetLeft; 

                            // Add trail if active
                            if(particle_trail["trail"] == true)
                            {
                                // Generate new ID for every trail particle
                                var random_par = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

                                // Append elements to element position
                                document.getElementById(selector).insertAdjacentHTML('beforeend', "<div id='bvparticle_trail_"+random_par+"' class='trail_bv_particle bvambient_particle' style='display: block;'></div>");  

                                // Get current width of the element (because it can change when colide)
                                var positionInfo = element.getBoundingClientRect();
                                var width = positionInfo.width;

                                // Trail style
                                var trail_element = document.getElementById("bvparticle_trail_"+random_par);
                                trail_count++;
                                trail_element.style.top = pos+"px";
                                trail_element.style.left = ver+"px";
                                trail_element.style.opacity = particle_trail['opacity'];
                                trail_element.style.width = width+"px";
                                trail_element.style.height = width+"px";
                                trail_element.style.borderRadius = particle_radius+"px";
                                trail_element.style.backgroundColor = particle_trail['background'];

                                // Set time out function to remove elements
                                if(trail_count > 0)
                                {
                                    document.querySelectorAll('.trail_bv_particle').forEach(e => e.remove());
                                    trail_count = 0;
                                }
                
                            }

                            // Check if particles are paused or not
                            if(isPaused == false)
                            {
                                // Check colision bounds
                                if(pos == rect_main.offsetHeight-element_width) {
                                    d_v = "top";
                                    pos = rect_main.offsetHeight-element_width;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                } 
                                if(pos <= 0){ 
                                    d_v = "down"; pos = 0; 
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                }
                                if(ver == rect_main.offsetWidth-element_width){ 
                                    d_h = "left";
                                    ver = rect_main.offsetWidth-element_width; 
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                 } 
                                if(ver <= 0){ 
                                    d_h = "right";
                                    ver = 0;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                }
                       
                                // Check Position
                                if(d_v == "down" && d_h == 'left')
                                {
                                    element.style.top = Number(element.offsetTop) + Number(1) + "px"; 
                                    element.style.left = Number(element.offsetLeft) - Number(1) + "px"; 
                                }
                                if(d_v == "down" && d_h == 'right')
                                {
                                    element.style.top = Number(element.offsetTop) + Number(1) + "px"; 
                                    element.style.left = Number(element.offsetLeft) + Number(1) + "px"; 
                                }
                                if(d_v == "top" && d_h == 'left')
                                {
                                    element.style.top = Number(element.offsetTop) - Number(1) + "px"; 
                                    element.style.left = Number(element.offsetLeft) - Number(1) + "px"; 
                                }
                                if(d_v == "top" && d_h == 'right') 
                                {
                                    element.style.top = Number(element.offsetTop) - Number(1) + "px"; 
                                    element.style.left = Number(element.offsetLeft) + Number(1) + "px";  
                                }  
                            }
                }

                // Call function for the first time
                SetFrame();
        };

        // Set up particles to selector div
        this.SetupParticles = function(number) {

            var resp_particles;

            // Get window viewport inner width
            var windowViewportWidth = window.innerWidth;
            console.log(number);
            // If functions brings no number, it follow the default
            if(number == undefined)
            {

                // Loop responsive object to get current viewport
                for (var loop = 0; loop < responsive.length; loop++) {
                    if(responsive[loop].breakpoint >= windowViewportWidth) { resp_particles = responsive[loop]["settings"].particle_number; }
                }

                // If there is no result from above, default particles are applied
                if(resp_particles == undefined) { resp_particles = this.particle_number; }

            } else {
                resp_particles = number;
            }

            // Add number of particles to selector div
            for (var i = 1; i <= resp_particles; i++) {

                // Generate random number to particles
                var random_id_particle = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

                // Check if image source is empty and append particle to main div
                if(this.particle_image['image'] == false)
                {
                    document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<div id='bvparticle_"+random_id_particle+"' class='bvambient_particle' style='display: block;'></div>");  
                } else {
                    document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<img src='"+this.particle_image['src']+"' id='bvparticle_"+random_id_particle+"' class='bvambient_particle' style='display: block;'>");
                }

                var bvparticle = document.getElementById("bvparticle_"+random_id_particle);

                // Get Width and Height of main div
                var widthMainDiv = document.getElementById(selector);

                // Get random number based on the width and height of main div
                var RandomTopPosition = Math.floor(Math.random() * (widthMainDiv.offsetHeight - 40 + 1)) + 0;
                var RandomLeftPosition = Math.floor(Math.random() * (widthMainDiv.offsetWidth - 40 + 1)) + 0;

                // Get random number based on the width and height of main div
                var RandomWidth = Math.random() * (this.particle_maxwidth - this.particle_minwidth) + this.particle_minwidth;

                // Get Random Opacity between 0.2 and 1 if active
                if(particle_opacity == true) { var RandomOpacity = Math.random() * (1 - 0.2) + 0.2; } else { var RandomOpacity = 1; }

                // Add random positioning to particle
                bvparticle.style.top = RandomTopPosition+Number(0)+"px"; 
                bvparticle.style.left = RandomLeftPosition+Number(0)+"px"; 
                bvparticle.style.width = RandomWidth+"px";
                bvparticle.style.height = RandomWidth+"px";
                bvparticle.style.opacity = RandomOpacity;                
                bvparticle.style.borderRadius = particle_radius+"px";

                // Check if it has random color enabled
                if(particle_background == "random") { bvparticle.style.backgroundColor = getRandomColor(); } else { bvparticle.style.backgroundColor = particle_background; }

                // Move particle
                this.MoveParticle(bvparticle);
            }
        }

        // ** SETUP SLIDE **
        this.SetupParticles();

        // Generates a random hex color
        function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
        }

    }

    // ** METHODS **
    // REFRESH PARTICLES 
    Refresh() {

        // Remove all particles
        document.getElementById(this.selector).innerHTML = "";
        // Setup new Ambient
        this.SetupParticles();
    }

    // DESTROY
    Destroy() {

        // Remove all particles and unbind all its events
        document.getElementById(this.selector).remove();
    }

    // ADD PARTICLES
    Add(number) {
        if(number != undefined)
        {
            // Add new particles
            this.SetupParticles(number);  
        }
    }

    // PAUSE
    Controls(command)
    {
        // Check what type of command is
        switch(command) {
          case "pause": // Pause Particles moviment
            isPaused = true;
            break;
          case "play": // Resume Particles moviment
            isPaused = false;
            break;
          default:
            console.log("BVAmbient | Command not recognized.");
        } 
    }

    // CHANGE PARTICLES
    Change(properties) {

            // Changes particles according to properties available
            if(properties.type == "particle_background")
            {
                document.querySelectorAll('.bvambient_particle').forEach((item) => {
                    // Change to chosen color
                    item.style.backgroundColor = properties.value;
                });
            } else { console.log("BVAmbient | Propertie not recognized."); }
    }
}