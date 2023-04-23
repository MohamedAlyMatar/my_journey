console.log("it worked");
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/SVrayUOdVOCiNMn6/scene.splinecode');

spline.load('https://prod.spline.design/SVrayUOdVOCiNMn6/scene.splinecode', {
    credentials: 'include',
    mode: 'no-cors',
});