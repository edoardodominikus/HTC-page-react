//require('file-loader?name=[name].[ext]!../dist/index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './nav';
import SimpleSlider from './hero';
import { SubPromo } from './landing';
import { Banner } from './content';
import { StayTuned} from './content';
import { Footer } from './footer';
ReactDOM.render(<App />, document.getElementById('nav'));
ReactDOM.render(<SimpleSlider />, document.getElementById('hero-carousel'));
ReactDOM.render(<SubPromo />, document.getElementById('subpromo-landing'));
ReactDOM.render(<Banner />, document.getElementById('content-page'));
ReactDOM.render(<StayTuned />, document.getElementById('stay-updated'));
ReactDOM.render(<Footer />, document.getElementById('footer'));




  

