// Created by iWeb 3.0.4 local-build-20140401

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_1:new IWReflection({opacity:0.24,offset:2.00}),stroke_0:new IWEmptyStroke(),reflection_0:new IWReflection({opacity:0.00,offset:2.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('PlexConnect_grey_files/PlexConnect_greyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupIECSS3Opacity('id2');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
