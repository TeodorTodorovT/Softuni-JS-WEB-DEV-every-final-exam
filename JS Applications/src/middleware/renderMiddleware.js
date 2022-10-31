import { render } from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js';

const headerElement = document.querySelector('#header-navigation');
const contetElement = document.querySelector("#content");

const renderContet = (templateResult) =>{
    render(templateResult, contetElement);

    
};

export const renderNavigationMiddleware = (ctx, next) => {
    //render navigation


    render(navigationView(ctx), headerElement)
    next();
};

export const renderContentMiddleware = (ctx,next) =>{
    ctx.render = renderContet;

    next();
}