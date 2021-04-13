import Fuse from 'fuse.js';
import { sites } from '../data/data';

const options = {
    includeScore: true,
    // equivalent to `keys: [['author', 'tags', 'value']]`
    keys: ['element.name']
};

const fuse = new Fuse(sites, options);

export const result = fuse.search('Quora');

