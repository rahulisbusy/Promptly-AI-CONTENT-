
import { create } from "domain";
import { boolean, pgTable,serial, text, varchar} from "drizzle-orm/pg-core";

export const AIoutput=pgTable('AIoutput', {
    id:serial('id').primaryKey(),
    formdata:varchar('formdata').notNull(),
    aiResponse:text('aiResponse'),
    template:varchar('template').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:text('createdAt')

})

export const Usersubscription=pgTable('usersubscription',{
id:serial('id').primaryKey(),
email:varchar('email'),
userName:varchar('userName'),
active: boolean('active'),
paymentId:varchar('paymentId'),
joinDate:varchar('joinDate')
})