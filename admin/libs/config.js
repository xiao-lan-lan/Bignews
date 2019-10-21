(function() {
  $(function() {

    //日期插件 
    jeDate('#testico', {
      trigger: 'click',
      theme: {
        bgcolor: "#00A680",
        pnColor: "#00DDAA"
      }, //绿色主题
      format: "YYYY-MM-DD",
      isinitVal: true,
    });

    //富文本框
    tinymce.init({
      selector: '#mytextarea',
      language: 'zh_CN',
      directionality: 'rtl',
      browser_spellcheck: true,
      contextmenu: false,
      plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste imagetools wordcount",
        "code"
      ],
      toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",

    });
    /*tinymce.activeEditor.uploadImages(function(success) {
        $.post('ajax/post.do', tinymce.activeEditor.getContent()).done(function() {
            console.log("Uploaded images and posted content as an ajax request.");
        });
    });*/

  })
})()