/* script_home.js - Home Page JavaScript */

document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80, // Adjust particle density
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ffff' // Particle color - cyan
            },
            shape: {
                type: 'circle', // Particle shape - circle
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.7, // Particle opacity
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3, // Particle size
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true, // Enable lines between particles
                distance: 150,
                color: '#00ffff', // Line color - cyan
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true, // Enable particle movement
                speed: 3, // Particle speed
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab' // Interaction mode on hover - grab particles
                },
                onclick: {
                    enable: true,
                    mode: 'push' // Interaction mode on click - push particles
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true // Enable retina detection for sharper particles on high-resolution screens
    });
});


/* script_home.js - Home Page JavaScript */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Particles.js (keep this as it is)
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80, // Adjust particle density
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ffff' // Particle color - cyan
            },
            shape: {
                type: 'circle', // Particle shape - circle
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.7, // Particle opacity
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3, // Particle size
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true, // Enable lines between particles
                distance: 150,
                color: '#00ffff', // Line color - cyan
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true, // Enable particle movement
                speed: 3, // Particle speed
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab' // Interaction mode on hover - grab particles
                },
                onclick: {
                    enable: true,
                    mode: 'push' // Interaction mode on click - push particles
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true // Enable retina detection for sharper particles on high-resolution screens
    });

    // Initialize Typed.js
    var typed = new Typed(".typed-text", {
        strings: ["Ranshiv Kumar","Computer Programmer"], // Replace with your name and title
        typeSpeed: 80, // Typing speed in milliseconds
        backSpeed: 50, // Backspacing speed in milliseconds
        backDelay: 1500, // Delay before starting to backspace
        startDelay: 500,  // Delay before typing starts
        loop: true, // Loop the animation
        cursorChar: "|", // Customize cursor character
    });
});