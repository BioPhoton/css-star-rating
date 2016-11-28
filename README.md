# Css Star Rating
#### Css Star Rating is a pure css star rating plugin based on best practice UX/UI methods.  

![License](https://img.shields.io/npm/l/css-star-rating.svg) 
![Bower Version](https://img.shields.io/bower/v/css-star-rating.svg)
[![NPM Version](https://img.shields.io/npm/v/css-star-rating.svg)](https://www.npmjs.com/package/css-star-rating)  
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/BioPhoton/css-star-rating) 

[![Build Status](https://travis-ci.org/BioPhoton/css-star-rating.svg?branch=dev)](https://travis-ci.org/BioPhoton/css-star-rating)
[![npm](https://img.shields.io/npm/dt/css-star-rating.svg)](https://www.npmjs.com/package/css-star-rating)  

[![Package Quality](http://npm.packagequality.com/badge/css-star-rating.png)](http://packagequality.com/#?package=css-star-rating)  

Css Star Rating is written in scss and fully customizable over variables.  
Easily compose your own rating component over a rich set of css modifiers for any kind of UI state.  


## Install

**Get Css Star Rating:**
 - clone & build this repository
 - [download as .zip](https://github.com/BioPhoton/css-star-rating/releases)
 - via **[npm](https://www.npmjs.org/)**: by running `$ npm install css-star-rating` from your console
 - via **[bower](https://bower.io/)**: by running `$ bower install css-star-rating` from your console
 
**Load library**
```html
<link rel="stylesheet" href="bower_components/css-star-rating/dist/css/star-rating.css">
```

**Copy asstes (optional)**
If you want to use svg as icon type copy the  
```tar-rating.icons.svg``` image form ```bower_components/css-star-rating/dist/images/star-rating.css``` to your roots assets folder.

**Use it**
```html
<div class="rating large star-icon direction-rtl value-1 half color-default label-top">
   <div class="label-value">1.5</div>
    <div class="star-container">
        <div class="star">
            <i class="star-empty fa fa-this-icon"></i>
            <i class="star-half fa fa-half-icon"></i>
            <i class="star-filled fa fa-that-icon"></i>
        </div>
        <div class="star">
            <i class="star-empty fa fa-this-icon"></i>
            <i class="star-half fa fa-half-icon"></i>
            <i class="star-filled fa fa-that-icon"></i>
        </div>
        <div class="star">
            <i class="star-empty fa fa-this-icon"></i>
            <i class="star-half fa fa-half-icon"></i>
            <i class="star-filled fa fa-that-icon"></i>
        </div>
    </div>
</div>
```

##Resources 
Image and b64 conversion tools
- http://svgtopng.com/
- http://b64.io/