
function showTotalMenuAction(){
    if(showdiv_display = document.getElementsByClassName('shopClass_show').style.display=='none'){
    //如果show是隐藏的 
    document.getElementsByClassName('shopClass_show').style.display='block';
    //show的display属性设置为block（显示）
    }else{
    //如果show是显示的，show的display属性设置为none（隐藏）
    document.getElementsByClassName('shopClass_show').style.display='none';
    }
 }