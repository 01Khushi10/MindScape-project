import { v4 as uuid } from 'uuid';


export const getUniqueID =  () => {
    let id = uuid();
    return id;
}