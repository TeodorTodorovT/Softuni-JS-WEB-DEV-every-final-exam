import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';


const detailsTemplate = (pet, user) => html`
 <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${user._id == pet._ownerId
                        ? html`
                        <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                            <a href="/pets/${pet._id}/edit" class="edit">Edit</a>
                            <a href="/pets/${pet._id}/delete" class="remove">Delete</a>
                        </div>
                        `
                        : nothing                   
                    }

                </div>
            </div>
        </section>
`

export const detailsView = (ctx) =>{
    petService.getOne(ctx.params.petId)
        .then(pet => {
            ctx.render(detailsTemplate(pet, ctx.user))
        });
};







// <!--(Bonus Part) Only for no creator and user-->
// <a href="#" class="donate">Donate</a>