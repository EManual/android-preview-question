(function(window,$){
  $(document).ready(function(){
    var selector_title = $('.weui_article h1')
    var selector_option_container = $('#option-container')
    var select_tpl_option = $('#tpl_option')
    /**
     * 渲染题目
     */
    window.updateQuestion = function(question){
       
       selector_title.html(question.description)
       if(question.type === 'choice'){
         var options = []
         question.options.forEach(function(option, index){
           options.push(select_tpl_option.html().replace(/{{option_id}}/g, 'option_'+index).replace(/{{option_description}}/g, option))
         })
         selector_option_container.html(options.join(''))
       }
    }
    /**
     * @return array 已选择的东西列表
     */
    window.getUserAnswer = function(){
      var checkeds = []
      $('#option-container input').forEach(function(input, index){
        if($(input)[0].checked){
          checkeds.push(index)
        }
      })
      return checkeds
    }
    
    console.log(window.Bridge)
  })  
})(window, Zepto);
