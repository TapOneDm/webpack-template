import * as $ from 'jquery';

import Post from '@models/Post';
import './styles/style.css'
import json from './data.json';
import dartVader from './assets/img/dart_vaider.jpg'

const post = new Post('Webpack template', dartVader)
console.log(post.toString());
// console.log('=====================');
