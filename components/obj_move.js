/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */

var count = 0;

//前
AFRAME.registerComponent('handle-events-f', {
  init: function () {
    var el_button = this.el;  // <a-button>
    var el_car = document.getElementById('model-car');  // <obj-model>

    //クリックすると前に移動
    el_button.addEventListener("click", function(){
      console.log("click_front");
      el_car.emit("BtnPush_Stop");
      el_car.setAttribute("rotation", "0 180 0");
      el_car.emit("BtnPush_Front");
      
    });
  } 
});

//後
AFRAME.registerComponent('handle-events-b', {
  init: function () {
    var el_button = this.el;  // <a-button>
    var el_car = document.getElementById('model-car');  // <obj-model>

    //クリックすると後に移動
    el_button.addEventListener("click", function(){
      console.log("click_back");
      el_car.emit("BtnPush_Stop");
      el_car.setAttribute("rotation", "0 0 0");
      el_car.emit("BtnPush_Back");
      
    });
  } 
});


//左
AFRAME.registerComponent('handle-events-l', {
  init: function () {
    var el_button = this.el;  // <a-button>
    var el_car = document.getElementById('model-car');  // <obj-model>

    //クリックすると左に移動
    el_button.addEventListener("click", function(){
      console.log("click_left");
      el_car.emit("BtnPush_Stop");
      el_car.setAttribute("rotation", "0 270 0");
      el_car.emit("BtnPush_Left");
      
    });
  } 
});

//右
AFRAME.registerComponent('handle-events-r', {
  init: function () {
    var el_button = this.el;  // <a-button>
    var el_car = document.getElementById('model-car');  // <obj-model>

    //クリックすると右に移動
    el_button.addEventListener("click", function(){
      console.log("click_right");
      el_car.emit("BtnPush_Stop");
      el_car.setAttribute("rotation", "0 90 0");
      el_car.emit("BtnPush_Right");
      
    });
  } 
});


//停止
AFRAME.registerComponent('handle-events-s', {
  init: function () {
    var el_button = this.el;  // <a-button>
    var el_car = document.getElementById('model-car');  // <obj-model>

    //クリックすると止まる
    el_button.addEventListener("click", function(){
      console.log("click_stop");
      el_car.emit("BtnPush_Stop");
      
    });
  } 
});