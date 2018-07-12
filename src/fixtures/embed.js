export const wistiaVideoJsonP = `
<script src="https://fast.wistia.com/embed/medias/jchcmam7p5.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_jchcmam7p5 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/jchcmam7p5/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
`

export const wistiaStandardEmbed = `
<script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wistia_embed wistia_async_abcde12345" style="width:640px;height:360px;"></div>
<script>
window._wq = window._wq || [];
_wq.push({ id: "abcde12345", onReady: function(video) {
  console.log("I got a handle to the video!", video);
}});
</script>
`

export const wistiaIFrameEmbed = `
<iframe src="//fast.wistia.net/embed/iframe/abcde12345" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
<script>
window._wq = window._wq || [];
_wq.push({ id: "abcde12345", onReady: function(video) {
  console.log("I got a handle to the video!", video);
}});
</script>
`

export const youtubeIFrameEmbed = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/IKM-Z6CmbJ8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
`

export const vimeoIFrameEmbed = `
<iframe src="https://player.vimeo.com/video/102381170" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
`

export const htmlVideoTag = `
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video controls
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    width="620">

Sorry, your browser doesn't support embedded videos,
but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
and watch it with your favorite video player!

</video>
`

export const hsBeaconEmbed = `
<script src="https://fast.wistia.com/embed/medias/movjwx6t7l.jsonp" async="" type="text/javascript"></script>
<script src="https://fast.wistia.com/assets/external/E-v1.js" async="" type="text/javascript"></script>
<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
 <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
  <div class="wistia_embed wistia_async_movjwx6t7l videoFoam=true" style="height:100%;width:100%">
    &nbsp;
  </div>
 </div>
</div>
`
