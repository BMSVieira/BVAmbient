/*-------------------------

BVAmbient - VanillaJS Particle Background
https://bmsvieira.github.io/BVAmbient/

Made by: Bruno Vieira

--------------------------- */

class BVAmbient {

    constructor({
        selector = 'defaultId',
        particle_number = "20",
        particle_maxwidth = "30",
        particle_minwidth = "5",
        particle_radius = "50",
        particle_colision_change = true,
        particle_background = "#ededed",
        fps = "10"
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

        // Global Variables
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var selector = this.selector;
        var fps = this.fps;
        var particle_maxwidth = this.particle_maxwidth;
        var particle_minwidth = this.particle_minwidth;
        var particle_radius = this.particle_radius;
        var particle_colision_change = this.particle_colision_change;
        var particle_background = this.particle_background;

        this.SetupAmbient = function() {

            function MovieParticle(element)
            {
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

                // Set frame to move particle
                var setFrame = setInterval(frame, fps);

                function ChangeParticleSize(particle)
                {
                    // Get random number based on the width and height of main div
                    var RandomWidth = Math.random() * (particle_maxwidth - particle_minwidth) + particle_minwidth;
                    particle.style.width = RandomWidth+"px";
                    particle.style.height = RandomWidth+"px";
                }

                function frame() {

                        // Element offset positioning
                        pos = element.offsetTop; 
                        ver = element.offsetLeft; 

                        // Check colision bounds
                        if(pos == rect_main.offsetHeight-element_width) {
                            d_v = "top";
                            pos = rect_main.offsetHeight-element_width;
                            if(particle_colision_change == true) { ChangeParticleSize(element); } // Change Particle Size on colision
                        } 
                        if(pos <= 0){ 
                            d_v = "down"; pos = 0; 
                            if(particle_colision_change == true) { ChangeParticleSize(element); } // Change Particle Size on colision
                        }
                        if(ver == rect_main.offsetWidth-element_width){ 
                            d_h = "left";
                            ver = rect_main.offsetWidth-element_width; 
                            if(particle_colision_change == true) { ChangeParticleSize(element); } // Change Particle Size on colision
                         } 
                        if(ver <= 0){ 
                            d_h = "right";
                            ver = 0;
                            if(particle_colision_change == true) { ChangeParticleSize(element); } // Change Particle Size on colision
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

            // Add number of particles to selector div
            for (var i = 1; i <= this.particle_number; i++) {

                // Append particle to main div
                document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<div id='bvparticle_"+i+"' class='bvambient_particle' style='display: block;'></div>");

                var bvparticle = document.getElementById("bvparticle_"+i);

                // Get Width and Height of main div
                var widthMainDiv = document.getElementById(selector);

                // Get random number based on the width and height of main div
                var RandomTopPosition = Math.floor(Math.random() * (widthMainDiv.offsetHeight - 40 + 1)) + 0;
                var RandomLeftPosition = Math.floor(Math.random() * (widthMainDiv.offsetWidth - 40 + 1)) + 0;


                // Get random number based on the width and height of main div
                var RandomWidth = Math.random() * (this.particle_maxwidth - this.particle_minwidth) + this.particle_minwidth;

                // Add random positioning to particle
                bvparticle.style.top = RandomTopPosition+Number(0)+"px"; 
                bvparticle.style.left = RandomLeftPosition+Number(0)+"px"; 
                bvparticle.style.width = RandomWidth+"px";
                bvparticle.style.height = RandomWidth+"px";
                bvparticle.style.borderRadius = particle_radius+"px";
                bvparticle.style.backgroundColor = particle_background;

                // Call function to move particle
                MovieParticle(bvparticle);
           
            }
        }

        // ** SETUP SLIDE **
        this.SetupAmbient();
    }

    // ** METHODS ** 
    Next() {
    }
    Previous() {
    }

}