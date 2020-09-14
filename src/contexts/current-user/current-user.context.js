import { createContext } from 'react';
import CollectionsContext from '../collections/collections.context';

const CurrentUserContext = createContext(undefined);

export default CurrentUserContext;