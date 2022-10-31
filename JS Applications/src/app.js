import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { renderNavigationMiddleware, renderContentMiddleware } from "./middleware/renderMiddleware.js";
import { createView } from "./views/createView.js";
import { dashboardView } from "./views/dashboardView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', dashboardView);
page('/create', createView);
page('/pets/:petId', detailsView)
page('/pets/:petId/edit', editView);
page('/pets/:petId/delete', deleteView);



page.start()