BVAmbient - Vanilla Javascript Background Particles 
--
<p align="center">
<img width="500" src="https://raw.githubusercontent.com/BMSVieira/BVAmbient/main/demo-template/images/BV.png">
</p>
<br>
<p align="center">
Easy-to-use Particle Background built with VanillaJS
</p>

Features:
-
- 🔧 Fully Customizable HTML
- 💪 No Dependencies, built with VanillaJS
- 🌎 Tested in All Modern Browsers
- 😎 Image Support

Demo:
-
https://bmsvieira.github.io/BVAmbient/

Installation:
-

1 - Include JavaScript Source.
```javascript
<script src="path/to/bvambient.js"></script>
```
2 - Include Styles.
```javascript
<link rel="stylesheet" href="path/to/bvambient.css">
```
4 - Set HTML.
```javascript
 <div id="ambient"></div>
```
3 - Initilize.
```javascript
document.addEventListener("DOMContentLoaded", function() {
      var demo1 = new BVAmbient({
        selector: "#ambient",
        particle_number: 50,
        particle_maxwidth: 30,
        particle_minwidth: 10,
        particle_radius: 50,
        particle_colision_change: true,
        particle_background: "#58c70c",
        fps: 30
      });
});
```

Settings:
-
| Name | Value | Default | Description |
| --- | --- | --- | --- |
| `selector` | `ID`  | `---` |  Specify ID of the element|
| `particle_number` | `Integer` | `50` |  Number of particles|
| `particle_maxwidth` | `Integer` | `30` |  Particle's max width (px) |
| `particle_minwidth` | `Integer` | `10` | Particle's min width (px) |
| `particle_radius` | `Integer` | `50` | Particle's border radius (px) |
| `particle_colision_change` | `boolean` | `true` | Particle changes size when collides with main div's boundary |
| `particle_background` | `string` | `#58c70c` | Particle's background color (Hex, Rgba, etc...) |
| `particle_image` | `boolean` | `false` | Add image to particles |
| `particle_trail` | `boolean` | `false` | Add trail to particles |
| `fps` | `integer` | `30` | Frames per second / velocity |

```javascript
document.addEventListener("DOMContentLoaded", function() {
      var demo1 = new BVAmbient({
            selector: "#ambient",
            particle_number: 50,
            particle_maxwidth: 30,
            particle_minwidth: 10,
            particle_radius: 50,
            particle_colision_change: true,
            particle_background: "#58c70c",
            particle_image: {
              image: false,
              src: ""
            },
            particle_trail: {
              trail: true,
              opacity: "0.1",
              background: "#58c70c",
              length: 300
            },  
            fps: 30
      });
});
```
