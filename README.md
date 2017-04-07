# Css Star Rating ⭐⭐⭐⭐⭐
####  ⭐ Css Star Rating is a pure css star rating plugin based on best practice UX/UI methods. ⭐  

![License](https://img.shields.io/npm/l/css-star-rating.svg) 
![Bower Version](https://img.shields.io/bower/v/css-star-rating.svg)
[![NPM Version](https://img.shields.io/npm/v/css-star-rating.svg)](https://www.npmjs.com/package/css-star-rating)  
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/BioPhoton/css-star-rating) 

[![Build Status](https://travis-ci.org/BioPhoton/css-star-rating.svg?branch=dev)](https://travis-ci.org/BioPhoton/css-star-rating)
[![npm](https://img.shields.io/npm/dt/css-star-rating.svg)](https://www.npmjs.com/package/css-star-rating)  

[![Package Quality](http://npm.packagequality.com/badge/css-star-rating.png)](http://packagequality.com/#?package=css-star-rating)  

Css Star Rating is written in scss and fully customizable over variables.  
Easily compose your own rating component over a rich set of css modifiers for any kind of UI state.  

##Features

- [x] **Written in scss**
- [x] **Customizable over variables**
- [x] **Flexbox layout**
- [x] **SVG icons**
- [x] **Icon fonts like fontawesome, ionicon...**
- [x] **Display rating over css class**
- [x] **Different Numbers of stars**
- [x] **Color of stars depend on rating**
- [x] **Half stars**
- [x] **Sizes**
- [x] **Star alignments**
- [x] **Static colors**
- [x] **Disabled mode**
- [x] **Star types**
- [x] **Label**
- [x] **Label positions**
- [x] **Animations**
- [x] **Directions**
- [x] **Themes**

## Browser support


| IE | Firefox | Chrome | Safari | Opera |
|--- |---	   |--- 	|---	 |---|
| 11  	|  50 	|   55	|  10 	|   41	|
| <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/browsers/ie.png" width="100">	| <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/browsers/firefox.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/browsers/chrome.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/browsers/safari.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/browsers/opera.png" width="100"> |

## Related Projects

| Css | Angular1 (>=1.5)| Angular (>=2) |
|---  |---	    |--- 	       |
| <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/family/css3.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/family/angular1.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/family/angular.png" width="80"> |
| [Css Star Rating](https://github.com/BioPhoton/css-star-rating) | [Angular1 Star Rating](https://github.com/BioPhoton/angular1-star-rating) | [Angular Star Rating](https://github.com/BioPhoton/angular-star-rating) |


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
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
    </div>
</div>
```



##Css Modifiers

**.value-[N]**:  
The actual star rating value. The color of the stars depends on the rating number  
- .value-0
- .value-1
- .value-2
- .value-3
- .value-4
- .value-5
```html
<div class="rating value-3">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-value.PNG" width="290">

**.half**:  
If set, every rating value will have a half star at the end.
- .half

```html
<div class="rating value-3 half">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-show_half_stars-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-show_half_stars-true.PNG" width="290">  

**text**:  
The text next to the stars. 
- (Just additional HTML)

```html
<div class="rating value-3">
   <div class="label-value">My text</div>
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-text.PNG" width="290">

**.label-[VISIBILITY]**:  
The position of the label.
- .label-visible
- .label-hidden

```html
<div class="rating value-3 label-hidden">
   <div class="label-value">3.5</div>
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-label-visible.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-label-hidden.PNG" width="290">  

**.label-[POSITION]**:  
The position of the label.
- .label-top
- .label-right
- .label-bottom
- .label-left

```html
<div class="rating value-3 label-right">
   <div class="label-value">Good</div>
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-label-top.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-label-bottom.PNG" width="290">  
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-label-right.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-label-left.PNG" width="290">

**.space**:   
If the start use the whole space or not.  

```html
<div class="rating value-3 space-between">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-space-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-space-between.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-space-around.PNG" width="290">

**.[SIZE]**:  
The height and width of the stars.    
- .small
- .medium
- .large
```html
<div class="rating value-3 large">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-size-small.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-size-medium.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-size-large.PNG" width="290">

**color-[COLOR_NAME]**:  
Static color of stars.
- .color-default
- .color-negative
- .color-ok
- .color-positive  

```html
<div class="rating value-3 color-negative">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-color-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-color-positive.PNG" width="290">  
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-color-ok.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-color-negative.PNG" width="290">

**.disabled**:
The click callback is disabled, colors are transparent   
  
```html
<div class="rating value-3 disabled">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-disabled-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-disabled-true.PNG" width="290">
  
**.direction-[DIRECTION]**:   
The direction of the stars and label.   
- .direction-rtl
- .direction-ltr  

```html
<div class="rating value-3 direction-rtl">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-direction-rtl.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-direction-ltr.PNG" width="290">
  
**.[ANIMATION_SPEED]**:   
The duration of the animation in ms.   
- .immediately
- .noticeable
- .slow  
 
```html
<div class="rating value-3 slow">
   <div class="star-container">
        ...stars...
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-animation_speed-immediately.gif" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-animation_speed-noticeable.gif" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-animation_speed-slow.gif" width="290">

**starType**:  
The type of start resource to use.     
- .star-svg
- .star-icon (star character)
- .custom-icon (i.e. font-awesome)

```html
<div class="rating value-3 star-icon">
   <div class="star-container">
        <!-- font icons-->
        <star>
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i> 
        </star>
        <!-- or svg icons-->
        <star>
            <svg class="star-empty">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/star-rating.icons.svg#star-empty"></use>
            </svg>
            <svg class="star-half">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/star-rating.icons.svg#star-filled"></use>
            </svg>
        </star>
    </div>
</div>
```
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-type-svg.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-type-icon.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/css-star-rating/master/resources/images/prop-type-custom_icon.PNG" width="290">


##Themes
As a bonus there are some themes as classes. 
**theme-[NAME]**:  
The type of start resource to use.     
- .theme-google-places
- .theme-kununu

```html
<div class="rating value-3 theme-google-places">
   <div class="star-container">
        ...stars...
    </div>
</div>
```

