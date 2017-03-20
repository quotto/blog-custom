<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript">
   $('#main-inner').ready(function(){
    "use strict";
    var pc_width = 600;
    var device = window.screen.width < pc_width ? 'sp' : 'pc';
    device = (device == 'pc' && $(window).width() > pc_width) ? 'pc' : 'sp';
    var view_sec_num = 7; <!-- ここに1回あたりの表示記事数を設定 -->
    var sections = $('#main-inner > div.archive-entries > section');
    if((sections.length > view_sec_num) && device == 'sp') {
      var page_index = 0;
      var $entries_archive = null;
      var archive_num = 0;
      $entries_archive = $('<div id="entries-archive-' + archive_num + '"></div>');
      $entries_archive.insertBefore(sections[0]);
      for(var i=0; i < view_sec_num; i++) {
        $(sections[i]).appendTo($entries_archive);
        page_index += 1;
      }
      archive_num += 1;
      for(var i=view_sec_num; i < sections.length; i++) {
        if(page_index==view_sec_num) {
          var $read_more_link = $('<p style="text-align:center;background:#ddd"><a href="javascript:void(0)" style="line-height:3;font-size:80%:">もっと表示する</a></p>');
          $read_more_link.on('click',{archive_num: archive_num},function(e){
            $(e.target).hide();
            $('#entries-archive-' + e.data.archive_num).fadeIn("slow");
          });
          var $before_archive = $('#entries-archive-' + (archive_num-1));
          $before_archive.append($read_more_link);

          $entries_archive = $('<div id="entries-archive-' + archive_num + '"></div>');
          $entries_archive.hide();
          $entries_archive.insertAfter($before_archive);
          page_index = 0;
          archive_num += 1;
        }
        $(sections[i]).appendTo($entries_archive);
        page_index += 1;
      }
      $entries_archive.hide();
    }
});
</script>
<script src="http://hatena.wackwack.net/v1.1/js/breadcrumb.min.js"></script>
<script src="http://hatena.wackwack.net/v1.1/js/category_archive.min.js"></script>
<!-- newentry
<script src="http://hatenablog.wackwack.net/assets/newentry.min.js"></script>
-->

<!-- ptengine -->
<script type="text/javascript">
    window._pt_lt = new Date().getTime();
    window._pt_sp_2 = [];
    _pt_sp_2.push('setAccount,2e23c2ec');
    var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    (function() {
        var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
        atag.src = _protocol + 'js.ptengine.jp/pta.js';
        var stag = document.createElement('script'); stag.type = 'text/javascript'; stag.async = true;
        stag.src = _protocol + 'js.ptengine.jp/pts.js';
        var s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(atag, s); s.parentNode.insertBefore(stag, s);
    })();
</script>
                        