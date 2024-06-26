import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useFBO } from './useFBO.js';

const isFunction = node => typeof node === 'function';
const OrthographicCamera = /* @__PURE__ */React.forwardRef(({
  envMap,
  resolution = 256,
  frames = Infinity,
  children,
  makeDefault,
  ...props
}, ref) => {
  const set = useThree(({
    set
  }) => set);
  const camera = useThree(({
    camera
  }) => camera);
  const size = useThree(({
    size
  }) => size);
  const cameraRef = React.useRef(null);
  React.useImperativeHandle(ref, () => cameraRef.current, []);
  const groupRef = React.useRef(null);
  const fbo = useFBO(resolution);
  React.useLayoutEffect(() => {
    if (!props.manual) {
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size, props]);
  React.useLayoutEffect(() => {
    cameraRef.current.updateProjectionMatrix();
  });
  React.useLayoutEffect(() => {
    if (makeDefault) {
      const oldCam = camera;
      set(() => ({
        camera: cameraRef.current
      }));
      return () => set(() => ({
        camera: oldCam
      }));
    }
    // The camera should not be part of the dependency list because this components camera is a stable reference
    // that must exchange the default, and clean up after itself on unmount.
  }, [cameraRef, makeDefault, set]);
  let count = 0;
  let oldEnvMap = null;
  const functional = isFunction(children);
  useFrame(state => {
    if (functional && (frames === Infinity || count < frames)) {
      groupRef.current.visible = false;
      state.gl.setRenderTarget(fbo);
      oldEnvMap = state.scene.background;
      if (envMap) state.scene.background = envMap;
      state.gl.render(state.scene, cameraRef.current);
      state.scene.background = oldEnvMap;
      state.gl.setRenderTarget(null);
      groupRef.current.visible = true;
      count++;
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("orthographicCamera", _extends({
    left: size.width / -2,
    right: size.width / 2,
    top: size.height / 2,
    bottom: size.height / -2,
    ref: cameraRef
  }, props), !functional && children), /*#__PURE__*/React.createElement("group", {
    ref: groupRef
  }, functional && children(fbo.texture)));
});

export { OrthographicCamera };
