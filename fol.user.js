// ==UserScript==
// @name        FinanzaOnline enhancements
// @namespace   camelsoft
// @description Miglioramenti a forum.finanzaonline.com
// @match       https://forum.finanzaonline.com/threads/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADGUlEQVR42u2VOUibYRzGP5zEEx0Ur0kFJ1FxEEXwGNzU6iR4DC4KgqS6tCimozjGCyE4eJDEg3bwaFW8olJCtGIQ79qKR0BzeNTcT//vK6aNsVi0mg554Bny8R6/939FACCQg8gi8jrZgueTlbxFfkMOIQvs8kCyhGzGi4mDSMmhDOA12YSXl4X8jgFo4Dl99xEEIV7wnKIFeFheAC8AB7BarVhbW4NcLkdrayt6e3uxtLTEPTY2hq6uLkilUuh0Otyst2NlRYeOji00Na2ipWUdk5PHuLiw4lZ2u53vlUgkGBgYgNls/jOAw+GA0WhEaWkpqDWQk5ODk5MTnJ2dYX9/H52dnUhOToZGo4Feb0VDwxfExX1AUJAc/v4yBAbKEBExhJISJa0x4PZRhYWF/LzU1FQYDIaHU1BZWck35OXlwWRyHY49PT1QqVZRW6tGcLCcLpUjOnqYwEYZDP8WECBDdvYEdncvKAK2fwOwvb2N6+trHB4eoK1NhfDwIX5Zfv4MZme1ODr6wV9dV6dGWNggB6uvV1PILU8DoJxxd3d3U9h1FFIHysoWeMhTUkaxsWHE77q8tKK8fIFHISlpBHt7RhQVvXocQFpaGqanpyEWiznM+bmRCtCMjIyP8POTobr6M6hs3NTX9xUhIQpERQ1jfv4YxcWPBMjNzYVWq4VarYZIJKLNeoqCBZmZnzhAVdX9AP39NwCRkcOUniMG8PQamJqa4gA2m4NCvOhMweamewoqKhZ5ChITR7CzY6AUPB2AbeQtxTQ4+I0VGi/CgoIZzM05i5AKz1mEVJCuRZiQkIDx8XEolUpKzTzNkBV25sMAd3V1ZUVNjcrZhjExN20YH/+rDbOyJuj1rm3o4+NDqfOj6PnD19cX6enplFL9w4PIYrHgrk5PTXwQxca+/9tB5GYaagzAfRTLZDKXUcwm4T0iMDuWl3Vob99CYyMfxVQr949iOo/Wtd+a/1YoFCzC3n9DL8D/A2CB5+RgABvwnA4ZwFsPRcFGbmYAIWQp//ByspNl5DAGwBxKFpMP8Pw6JjeTwwEIPwG5JvEPlKUwtwAAAABJRU5ErkJggg==
// @downloadURL https://github.com/acavalin/tp_home/raw/main/fol.user.js
// @updateURL   https://github.com/acavalin/tp_home/raw/main/fol.user.js
// @version     1.0.0
// @grant       none
// @license     GPLv3
// ==/UserScript==

(function ($) { $(function () {
// -----------------------------------------------------------------------------
// header, footer
$('#header, #footer, .p-sectionLinks').hide();

// pubblicita'
$('#div-gpt-ad-headofpage').hide();

// pubblicita' dentro i post
$('div[class*="tbm-adv-"]').hide();

// share links
$('.blockMessage').hide();

// breadcrumbs bottom
$('.p-breadcrumbs--bottom').hide();

// footer & company
$('a[name="bottom"]').nextAll().hide();

// login link
$('.block-outer-opposite').hide();

setTimeout(function () {
  // news
  $('#div-gpt-ad-headofpage + div.block').hide();
}, 500);
// -----------------------------------------------------------------------------
});})(jQuery);
