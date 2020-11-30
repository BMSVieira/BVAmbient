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
        fps: 60
      });
});
```
Methods:
-

<b>Refresh:</b>
Removes all current elements and builds a new Ambient

```javascript
demo1.Refresh();
```

<b>Destroy:</b>
Removes all particles and unbind its events

```javascript
demo1.Destroy();
```

<b>Change:</b>
Applies changes to current particles

| Name | Value | Description |
| --- | --- | --- |
| `type` | `particle_background` | Parameter |
| `value` | `string` | Value to apply |

```javascript
demo1.Change({
    type: "particle_background",
    value: "#1e81d9"
});
```

Settings:
-
| Name | Value | Default | Description |
| --- | --- | --- | --- |
| `selector` | `String`  | `---` |  Specify ID of the element|
| `fps` | `Integer` | `60` | Frames per second |
| `particle_number` | `Integer` | `50` |  Number of particles|
| `particle_maxwidth` | `Integer` | `30` |  Particle's max width (px) |
| `particle_minwidth` | `Integer` | `10` | Particle's min width (px) |
| `particle_radius` | `Integer` | `50` | Particle's border radius (px) 
| `particle_opacity` | `Boolean` | `true` | Apply random opacity between `0.2` and `1` to particles |
| `particle_colision_change` | `Boolean` | `true` | Particle changes size when collides with main div's boundary |
| `particle_background` | `string` | `#58c70c` | Particle's background color (Hex, Rgba, etc...) |
| `particle_image` | `Object` | `false` | Add image to particles |
| `particle_trail` | `Object` | `false` | Add trail to particles |
| `responsive` | `Object` | `default width` | Different settings according to viewport width to improve performance |

```javascript

/* FULL EXAMPLE */

document.addEventListener("DOMContentLoaded", function() {
        var demo1 = new BVAmbient({
          selector: "#ambient",
          fps: 3,
          particle_number: 30,
          particle_maxwidth: 30,
          particle_minwidth: 10,
          particle_radius: 50,
          particle_opacity: true,
          particle_colision_change: true,
          particle_background: "#58c70c",
          particle_image: {
            image: false,
            src: ""
          },
          particle_trail: {
            trail: false,
            opacity: "0.1",
            background: "#58c70c",
            length: 300
          },
          responsive: [
              {
                breakpoint: 768,
                settings: {
                  particle_number: "15"
                }
              },
              {
                breakpoint: 480,
                settings: {
                  particle_number: "10"
                }
              }
          ]
        });
});
```
