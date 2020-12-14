import './index.less'
import gameIntro from './img/game_intro.png'
import videoBg from './img/video_bg.png'

const img1 = new Image()
img1.src = gameIntro
const img2 = new Image()
img2.src = videoBg

const imgElement = document.getElementById('img')
imgElement.append(img1)
imgElement.append(img2)
