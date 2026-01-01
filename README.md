# happy-new-year
# 🎊 New Year Celebration 2026 🎆

A stunning three-stage interactive New Year celebration experience featuring neon animations, spectacular fireworks, and an animated winter wonderland scene. Built with vanilla JavaScript, WebGL, and GSAP animations.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white)

## ✨ Features

### 🌀 Stage 1: Neon Loader
- Mesmerizing WebGL-powered neon spiral animation
- Responsive and interactive - click to proceed
- Smooth zoom-out transition effect

### 🎆 Stage 2: Fireworks Spectacular
- **5 Unique Firework Patterns:**
  - Circle Burst
  - Double Circle
  - Full Circle Explosion
  - Heart-Shaped Fireworks ❤️
  - Random Scatter
- Dynamic particle system with realistic physics
- Sound effects for launches and explosions
- Modern styled "Are You Ready?" button with hover effects

### 🎄 Stage 3: Winter Wonderland
- Animated SVG winter scene with:
  - Interactive Christmas village
  - Animated snowmen characters
  - Moving ski lift
  - Penguin animations
  - Falling snow particles
  - Zoom-in interactions on hover
- GSAP-powered smooth animations
- "Happy New Year 2026" message with elastic reveal

## 🚀 Live Demo

[View Live Demo]() 

## 📸 Screenshots



## 🛠️ Technologies Used

- **HTML5** - Structure and Canvas elements
- **CSS3** - Animations, transitions, and modern styling
- **JavaScript (ES6+)** - Core logic and interactions
- **WebGL** - High-performance neon shader animations
- **jQuery** - DOM manipulation and event handling
- **GSAP (GreenSock)** - Professional-grade animations
- **Canvas API** - Fireworks particle system

## 📦 Installation & Usage

### Quick Start

1. **Clone the repository**
 

2. **File Structure**
   ```
   happy-new-year/
   ├── index.html                  # Main entry point - START HERE
   ├── style.css                   # Global styles
   ├── script.js                   # Main JavaScript logic
   ├── neon-loader.html           # Stage 1: Neon Loader
   ├── fireworks.html             # Stage 2: Fireworks Show
   ├── fireworks_v2_0.js          # Fireworks animation logic
   ├── fireworks_v2_0.css         # Fireworks styles
   ├── happy-new-year.html        # Stage 3: Winter Wonderland
   ├── happy-new-year.js          # Winter scene animations
   ├── happy-new-year.css         # Winter scene styles
   └── jQuery.js                  # jQuery library
   ```

3. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

4. **Enjoy the experience!**
   - Click on the neon loader to start
   - Watch the fireworks show
   - Click  for the grand finale

### Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (Limited support)

## 📁 Project Structure

```
happy-new-year/
│
├── index.html                     # Main entry point with stage orchestration
│   ├── Manages stage transitions
│   ├── Loads all three stages
│   └── Handles navigation logic
│
├── Stage 1: Neon Loader
│   └── neon-loader.html           # WebGL neon spiral animation
│
├── Stage 2: Fireworks
│   ├── fireworks.html             # Fireworks container
│   ├── fireworks_v2_0.js          # Particle system & animations
│   └── fireworks_v2_0.css         # Fireworks styling
│
├── Stage 3: Winter Wonderland
│   ├── happy-new-year.html        # SVG winter scene
│   ├── happy-new-year.js          # GSAP animations
│   └── happy-new-year.css         # Scene styling
│
├── Shared Resources
│   ├── jQuery.js                  # jQuery library
│   ├── style.css                  # Global styles
│   └── script.js                  # Shared JavaScript utilities
│
└── README.md                      # This file
```

## 🎮 How It Works

### Stage Flow

```
Neon Loader (Click) → Zoom Transition → Fireworks Show (12s) → 
Button Appears → White Splash → Winter Wonderland
```

### Technical Highlights

1. **WebGL Shader Programming**
   - Custom fragment shader for neon effect
   - Real-time animation using uniforms
   - Performance-optimized rendering

2. **Particle System**
   - Physics-based firework particles
   - Dynamic color generation
   - Efficient particle lifecycle management

3. **Smooth Transitions**
   - CSS animations for stage transitions
   - White splash circular expansion effect
   - Opacity and visibility state management

## 🎯 Key Features Breakdown

| Feature | Technology | File |
|---------|-----------|------|
| Neon Animation | WebGL + GLSL | `neon-loader.html` |
| Fireworks | Canvas 2D | `fireworks.html`, `fireworks_v2_0.js` |
| Winter Scene | SVG + GSAP | `happy-new-year.html`, `happy-new-year.js` |
| Transitions | CSS3 | `style.css` |
| Sound Effects | HTML5 Audio | `fireworks.html` |
| Stage Management | Vanilla JS | `index.html`, `script.js` |

## 🎨 Customization

### Modify Firework Colors
Edit `fireworks_v2_0.js`:
```javascript
function randColor() {
    const colors = [
        "#FF1461", // Pink
        "#18FF92", // Green
        "#5A87FF", // Blue
        // Add your own colors here!
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
```

### Adjust Firework Timing
Edit `index.html` or `script.js`:
```javascript
// Change button appearance delay (default: 12 seconds)
setTimeout(() => {
    showReadyButton();
}, 12000); // Change this value in milliseconds
```

### Customize Messages
Edit `happy-new-year.html` to personalize greetings and messages!

## 🐛 Known Issues

- Sound effects may require user interaction to play (browser autoplay policy)
- Some browsers may block audio without user gesture
- Performance may vary on older devices

## 🔮 Future Enhancements

- [ ] Add music background option
- [ ] Include more firework patterns
- [ ] Mobile touch gesture support
- [ ] Customizable text messages
- [ ] Screenshot/share functionality
- [ ] Multiple language support
- [ ] Progressive Web App (PWA) features

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Anuj Keshri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 About the Developer

**Anuj Keshri**

🎓 BTech in Electrical Engineering  
🏛️ National Institute of Technology, Hamirpur  
💡 Passionate about building interactive web experiences  
🚀 Love to build and create amazing projects

### Connect with Me

[![GitHub]()
[![LinkedIn]()
[![Twitter]()
[![Email]()

## 🙏 Acknowledgments

- Inspired by celebration animations across the web
- Firework sound effects from [dar-studio.com](http://static.dar-studio.com)
- GSAP animation library by [GreenSock](https://greensock.com/)
- jQuery by [The jQuery Foundation](https://jquery.com/)
- Winter scene SVG artwork

## 🌟 Show Your Support

If you found this project helpful or inspiring, please consider:

⭐ **Starring this repository**  
🍴 **Forking for your own projects**  
📢 **Sharing with friends**  
💬 **Providing feedback**

## 📊 Project Stats

- **Lines of Code:** ~2500+
- **Languages:** HTML, CSS, JavaScript, GLSL
- **Dependencies:** jQuery, GSAP
- **File Count:** 11 files
- **Total Size:** ~300KB

## 🚀 Deployment

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Select **main branch** as source
4. Your site will be live at: `https://yourusername.github.io/happy-new-year/`

### Deploy to Netlify



## 💡 Usage Tips

- **Best Experience:** Use Chrome on desktop with sound enabled
- **Mobile:** Works but desktop is recommended for full experience
- **Screen Size:** Best on screens 1024px or larger


## 📞 Contact

Have questions or suggestions? Feel free to reach out!

- **Email:** anujxyt@gmail.com
- or
- **Email:** 24bee014@nih.ac.in
- **GitHub Issues:** [Create an issue](https://github.com/anujkeshri7)
- **LinkedIn:** [Connect with me]()

## 🎓 Learning Resources

If you want to learn how to build similar projects:

- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Canvas API Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [GSAP Documentation](https://greensock.com/docs/)
- [SVG Animation Guide](https://css-tricks.com/guide-svg-animations-smil/)

## 📈 Version History

**v1.0.0** (2026-01-01)
- Initial release with all three stages
- WebGL neon loader
- Fireworks show with 5 patterns
- Winter wonderland scene
- Complete documentation



---

<div align="center">

### 🎉 Happy New Year 2026! 🎊

Made with ❤️ by [Anuj Keshri](https://github.com/anujkeshri7)

**If you enjoyed this project, don't forget to leave a ⭐!**

[⬆ Back to Top](#-new-year-celebration-2026-)

</div>
