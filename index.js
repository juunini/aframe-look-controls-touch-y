AFRAME.components['look-controls'].Component.prototype.onTouchMove = function (t) {
  const isTouch = this.touchStarted && this.data.touchEnabled;

  if (!isTouch) {
    return;
  }

  const { clientWidth, clientHeight } = this.el.sceneEl.canvas;
  const { pageX, pageY } = t.touches[0];
  const { x, y } = this.touchStart;
  const { pitchObject, yawObject } = this;

  pitchObject.rotation.x += 0.6 * Math.PI * ((pageY - y) / clientHeight);
  yawObject.rotation.y += Math.PI * ((pageX - x) / clientWidth);

  pitchObject.rotation.x = Math.max(
    Math.PI / -2,
    Math.min(Math.PI / 2, pitchObject.rotation.x),
  );

  this.touchStart = {
    x: pageX,
    y: pageY,
  };
};
