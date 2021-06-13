//Vendors
import $ from 'jquery';
window.$ = $;

// Modules
import select from './modules/select';
import accordion from './modules/accordion';

const app = {
    ready() {
        select();
        accordion();
    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
