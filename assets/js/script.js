//Vendors
import $ from 'jquery';
window.$ = $;

// Modules
import accordion from './modules/accordion';
import createSelect from './modules/createSelect';


const app = {
    ready() {
        accordion();
        createSelect();
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
