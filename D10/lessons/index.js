// TUT LINK: https://www.youtube.com/watch?v=PFmuCDHHpwk

/**
 * OBJECTS:
 * - creating objects
 * - factories and constructors
 * - primitives and references types
 * - working with properties
 * - private properties
 * - getters and setters
 */


// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// }

// factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     }
// }


// // const circle = createCircle(1)
// // circle.draw();

// // contstructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw 1');
//     }
// }

// // const another = new Circle(1)
// // another.draw();


// Circle.call({}, 1);
// Circle.apply({}, [1,2,3,4,5]);

// const circle = new Circle(1)


// /**
//  * VALUE VS REFERENCE TYPES
//  */


// /**
//  * values type || primitives
//  * are copied by thier value
//  * - number
//  * - string
//  * - boolean
//  * - undefined
//  * - null     
//  * - symbol  
//  */

// /**
//  * Refecence types || objects
//  * are copied by their reference
//  * - object
//  * - array
//  * - function
//  */


// // ADDING AND REMOVING PROPERTIES
// circle.location = {
//     x: 1
// }

// delete circle.location;


// // ENUMERATING PROPERTIES

// for (let key in circle) {
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if('radius' in circle) {
//     console.log('radius is in circle');
// }

// ABSTRACTION
// function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation = { x: 0, y: 0 };
//     this.computerOptimalLocaiton = function() {
//         console.log('computerOptimalLocaiton');
//     }
//     this.draw = function() {
//         this.computerOptimalLocaiton(0.1)
//         console.log('draw 1');
//     }
// }


// const circle = new Circle(10);
// circle.computerOptimalLocaiton();
// circle.draw();


// PRIVATE PROPERTIES AND METHODS
// function Circle(radius) {

//     this.radius = radius;

//     this.defaultLocation = { x: 0, y: 0 };

//     let computerOptimalLocaiton = function(factor) {
//         console.log('computerOptimalLocaiton');
//     }

//     this.draw = function() {
//         computerOptimalLocaiton(0.1)
//         console.log('draw 1');
//     }
// }

// GETTERS AND SETTERS
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let getDefaultLocation = function() {
        return defaultLocation;
    }

    this.computerOptimalLocaiton = function() {
        console.log('computerOptimalLocaiton');
    }
    this.draw = function() {
        this.computerOptimalLocaiton(0.1)
        console.log('draw 1');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
        }
    })
}