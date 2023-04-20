import product from './product.js'
import category from './category.js'
import blockContent from './blockContent.js'
import {user, account} from 'next-auth-sanity/schemas'

export const schemaTypes = [product, category, blockContent, user, account]
