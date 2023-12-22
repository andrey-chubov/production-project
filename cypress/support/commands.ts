import * as articleComands from './commands/article';
import * as commentComands from './commands/comment';
import * as commonComands from './commands/common';
import * as profileComands from './commands/profile';
import * as ratingComands from './commands/rating';

Cypress.Commands.addAll(commonComands);
Cypress.Commands.addAll(profileComands);
Cypress.Commands.addAll(articleComands);
Cypress.Commands.addAll(commentComands);
Cypress.Commands.addAll(ratingComands);
// Cypress.Commands.overwrite('intercept', ()=> {
// const FIXTURE_MODE =  process.env.FIXTURE_MODE;
// const fixtureName = req.METHOD + req.url + hash(req.body)

// if (FIXTURE_MODE === 'READ') {
// readFixture
// }
// if (FIXTURE_MODE === 'WRITE') {
// const fixtureName = req.METHOD  + req.url + hash(req.body)
// createFixture(fixtureName, req.body)
// }
// if (FIXTURE_MODE === 'API') {

// }
// })

export {};
