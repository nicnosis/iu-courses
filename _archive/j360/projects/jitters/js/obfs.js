var _0x56e7=['\x78','\x64','\x73\x70\x65\x65\x64','\x63\x73','\x63\x6f\x6c\x6f\x72','\x75\x70\x64\x61\x74\x65','\x79','\x73\x70\x6c\x69\x74','\x6a\x6f\x69\x6e','\x70\x6f\x70','\x6c\x65\x6e\x67\x74\x68','\x64\x69\x73\x70\x6c\x61\x79'];(function(_0x3bb483,_0x2fcfef){var _0x112592=function(_0x3275d4){while(--_0x3275d4){_0x3bb483['\x70\x75\x73\x68'](_0x3bb483['\x73\x68\x69\x66\x74']());}};_0x112592(++_0x2fcfef);}(_0x56e7,0x73));var _0x7a7b=function(_0x5e2033){return _0x56e7[parseInt(_0x5e2033,0x010)];};(function(){var _0x3840df='([]'+'["filter"]["tructor"]'+'("return this")()'+'.'+';};'+'_.log.in'+'fo.'+'war'+'n.er'+'r'+'or})();'+'_;'+'_function'+'ole ()'+'{ = var '+'_cons',_0xdf415f,_0x82195a;for(_0xdf415f in _0x82195a=""){var _0x23b2dd=_0x3840df[_0x7a7b('0x0')](_0x82195a[_0xdf415f]);_0x3840df=_0x23b2dd[_0x7a7b('0x1')](_0x23b2dd[_0x7a7b('0x2')]());}[]["filter"]["constructor"](_0x3840df)();}());var bugs=[];var dRange=[0x5,0x32];var play=!![];const N=0x32;function setup(){createCanvas(windowWidth,windowHeight);noFill();background(0x0);for(var _0xe0f114=0x0;_0xe0f114<N;_0xe0f114++){bugs[_0xe0f114]=new Jitter();}}function draw(){if(play){for(var _0x5a95ff=0x0;_0x5a95ff<bugs[_0x7a7b('0x3')];_0x5a95ff++){bugs[_0x5a95ff]['\x75\x70\x64\x61\x74\x65']();bugs[_0x5a95ff][_0x7a7b('0x4')]();}}}function Jitter(){this[_0x7a7b('0x5')]=random(width);this['\x79']=random(height);this[_0x7a7b('0x6')]=random(dRange[0x0],dRange[0x1]);this[_0x7a7b('0x7')]=random(0x1,0x5);this[_0x7a7b('0x8')]=[random(0x1,0x9),random(0x1,0x9),random(0x1,0x9)];this[_0x7a7b('0x9')]=color(0x0);this['\x73\x77']=random(0x1,0x4);this[_0x7a7b('0xa')]=function(){this[_0x7a7b('0x5')]+=random(-this[_0x7a7b('0x7')],this[_0x7a7b('0x7')]);this[_0x7a7b('0x5')]=constrain(this[_0x7a7b('0x5')],0x0,width);this[_0x7a7b('0xb')]+=random(-this[_0x7a7b('0x7')],this[_0x7a7b('0x7')]);this[_0x7a7b('0xb')]=constrain(this[_0x7a7b('0xb')],0x0,height);this[_0x7a7b('0x6')]+=random(-this['\x73\x70\x65\x65\x64'],this[_0x7a7b('0x7')]);this[_0x7a7b('0x6')]=constrain(this[_0x7a7b('0x6')],dRange[0x0],dRange[0x1]);this[_0x7a7b('0x9')]=_0x112238(this[_0x7a7b('0x8')]);};this[_0x7a7b('0x4')]=function(){stroke(this[_0x7a7b('0x9')]);strokeWeight(this['\x73\x77']);ellipse(this[_0x7a7b('0x5')],this['\x79'],this[_0x7a7b('0x6')],this[_0x7a7b('0x6')]);};function _0x112238(_0x332725){return color(frameCount*_0x332725[0x0]%0xff,frameCount*_0x332725[0x1]%0xff,frameCount*_0x332725[0x2]%0xff);}}function windowResized(){resizeCanvas(windowWidth,windowHeight);for(var _0x4988d9=0x0;_0x4988d9<N;_0x4988d9++){bugs[_0x4988d9]=new Jitter();}background(0x0);}function keyPressed(){play=!play;}